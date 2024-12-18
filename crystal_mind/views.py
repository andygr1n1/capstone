import datetime
import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse
from .models import User, Task, Message
from django.db.models import Q
from .helpers import makeTasks, makeUsers, makeJsonTask, triggerTasksSubscription, triggerMessengerSubscription
from django.contrib.auth.decorators import login_required
from .helpers import sendTaskNotificationEmail


def index(request):
    return render(request, "index.html")


def login_view(request):
    if request.method == "POST":
        form = json.loads(request.body)
        username = form["username"]
        password = form["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return JsonResponse({"status": "success"})
        else:
            return JsonResponse({"status": "error", "message": "Invalid username and/or password."})
    else:
        return render(request, "login.html")


def logout_view(request):
    logout(request)
    return JsonResponse({"status": "success"})


def register(request):
    if request.method == "POST":
        form = json.loads(request.body)
        username = form["username"]
        email = form["email"]
        password = form["password"]
        confirmation = form["confirmation"]
        
        if password != confirmation:
            return JsonResponse({"status": "error", "message": "Passwords must match."})

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return JsonResponse({"status": "error", "message": "Name or email already taken."})
        login(request, user)
        return JsonResponse({"status": "success"}) 
    else:
        return render(request, "register.html")
    

def tasks(request):
    if not request.user.is_authenticated:
        return redirect('index')
    return render(request, "tasks.html")



# js
def selectedTasks(request, page, searchText='', state='all'):
    tasks = makeTasks(request, page, searchText, state)
    return JsonResponse({
        "tasks":tasks['json'],
        "num_pages": tasks["num_pages"],
        "current_page": tasks["current_page"]
    })

def createTask(request):
    if request.method == "POST":
        form = json.loads(request.body)

        if "id" in form:
            task = Task.objects.get(id=form["id"])
            task.title = form["title"]
            task.description = form["description"]
            task.location = form.get("location")
            task.deadline = form["deadline"]
        else:
            task = Task(
                title=form["title"],
                description=form["description"],
                location=form.get("location"), 
                deadline=form["deadline"],
                created_by=request.user
            )

        task.save()
        
        if "users" in form:
            task.users.set(form["users"])
        
        # Notify WebSocket group
        related_users = [request.user.id] + form["users"] if "users" in form else [request.user.id]
        triggerTasksSubscription(related_users)
     
        # only if task is created
        # send email to related users
        if not "id" in form and "users" in form:
            recipient_emails = [user.email for user in task.users.all() if user.email]
            sendTaskNotificationEmail(
                subject="New Task Created",
                message=f"A new task '{task.title}' has been created.",
                recipient_list=recipient_emails
            )
        
       

        task = Task.objects.get(id=task.id)
        jsonTask = makeJsonTask(request, task)

        return JsonResponse({"task": json.dumps(jsonTask)}) 
    else:
        return JsonResponse({"status": "error", "message": "Invalid request method."})



def toggleCompleteTask(request):
    try:
        form = json.loads(request.body)
        task = Task.objects.get(id=form["taskId"])
        if task.finished_at:
            task.finished_at = None
        else:
            task.finished_at = datetime.datetime.now().astimezone()
        task.save()

        related_users = [request.user.id] + list(task.users.all().values_list('id', flat=True))
        triggerTasksSubscription(related_users) 

        return JsonResponse({"status": "success"})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)})
    
def fetchTask(request):
    try:
        form = json.loads(request.body)
        task = Task.objects.get(id=form["task_id"])
        jsonTask = makeJsonTask(request, task)
        return JsonResponse({"task": json.dumps(jsonTask)}) 
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)})

def deleteTask(request):
    try:
        form = json.loads(request.body)
        task = Task.objects.get(id=form["task_id"])
    
        related_users = [request.user.id] + list(task.users.all().values_list('id', flat=True))

        task.delete()

        triggerTasksSubscription(related_users) 
        return JsonResponse({"status": "success"})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)})

def sendMessage(request):
    try:
        form = json.loads(request.body)
        task = Task.objects.get(id=form["task_id"])
        new_message = form["new_message"]

        Message.objects.create(
            content=new_message,
            task=task,
            created_by=request.user
        )

        triggerMessengerSubscription(task)

        return JsonResponse({"status": "success"})
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)})
    
def fetchUsersAndTasks(request):
    form = json.loads(request.body)
    page = form.get("page", -1)
    filter_by_text = form.get("filter_by_text", '')
    filter_state = form.get("filter_state", 'active')
    users = makeUsers(request)
    tasks = makeTasks(request, page, filter_by_text, filter_state)
    return JsonResponse({
        "users": users["json"], 
        "tasks": tasks["json"],
        "num_pages": tasks["num_pages"],
        "current_page": page
    })

def fetchSelectedTasks(request):
    form = json.loads(request.body)
    page = form.get("page", -1)
    filter_by_text = form.get("filter_by_text", '')
    filter_state = form.get("filter_state", 'active')
    tasks = makeTasks(request, page, filter_by_text, filter_state)
    return JsonResponse({
        "tasks": tasks["json"],
        "num_pages": tasks["num_pages"],
        "current_page": form["page"]
    })
