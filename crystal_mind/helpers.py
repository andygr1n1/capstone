import datetime
import json
from .models import Task, User
from django.core.paginator import Paginator
from django.db.models import Q
from django.core.mail import send_mail
from django.conf import settings
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

def makeTasks(request, page, searchText='', state='all'):
    if searchText == '___empty_search___':
        searchText = ''

    tasks = Task.objects.filter(Q(users__id=request.user.id) | Q(created_by=request.user)).distinct()
    if searchText:
        tasks = tasks.filter(Q(title__icontains=searchText) | Q(description__icontains=searchText))


    elif state == 'active':
        tasks = tasks.filter(finished_at__isnull=True)
    elif state == 'completed':
        tasks = tasks.filter(finished_at__isnull=False)
    elif state == 'expired':
        tasks = tasks.filter(Q(deadline__lt=datetime.datetime.now().astimezone()) & Q(finished_at__isnull=True))

        
    tasks = tasks.order_by('-created_at')
    paginator = Paginator(tasks, 5) 
    page_number = request.GET.get('page', page)
    page_obj = paginator.get_page(page_number)
    tasks_data = []

    for task in page_obj:
        tasks_data.append({
            "id": task.id,
            "is_author": task.created_by == request.user if request.user.is_authenticated else False,
            "author": {"id": task.created_by.id, "username": task.created_by.username},
            "title": task.title,
            "description": task.description,
            "created_at": task.created_at.strftime("%Y-%m-%d %H:%M:%S"),
            "deadline": task.deadline.strftime("%Y-%m-%d %H:%M:%S"),
            "location": task.location,
            "finished_at": task.finished_at.strftime("%Y-%m-%d %H:%M:%S") if task.finished_at else None,
            "users": [{"id": user.id, "username": user.username} for user in task.users.all()],
            "messages": [
                {
                    "id": message.id,
                    "content": message.content,
                    "created_at": message.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                    "created_by": {
                        "id": message.created_by.id,
                        "username": message.created_by.username
                    }
                }
                for message in task.messages.all().order_by('-created_at')
            ],
        })

    return {
        "json": json.dumps(tasks_data),
        "tasks": tasks_data,
        'num_pages': paginator.num_pages,
        'current_page': page_obj.number
    }

def makeUsers(request):
    users = User.objects.exclude(id=request.user.id)
    users_data = []
    for user in users:
        users_data.append({"id": user.id, "username": user.username})
    return {
        "users": users_data,
        "json": json.dumps(users_data)
    }

def sendTaskNotificationEmail(subject, message, recipient_list):
    send_mail(
        subject,
        message,
        settings.EMAIL_HOST_USER,
        recipient_list,
        fail_silently=False,
    )

def makeJsonTask(request, task):
    return  {
            "id": task.id,
            "is_author": task.created_by == request.user if request.user.is_authenticated else False,
            "author": {"id": task.created_by.id, "username": task.created_by.username},
            "title": task.title,
            "description": task.description,
            "created_at": task.created_at.strftime("%Y-%m-%d %H:%M:%S"),
            "deadline": task.deadline.strftime("%Y-%m-%d %H:%M:%S"),
            "location": task.location,
            "finished_at": task.finished_at.strftime("%Y-%m-%d %H:%M:%S") if task.finished_at else None,
            "users": [{"id": user.id, "username": user.username} for user in task.users.all()],
            "messages": [
                {
                    "id": message.id,
                    "content": message.content,
                    "created_at": message.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                    "created_by": {
                        "id": message.created_by.id,
                        "username": message.created_by.username
                    }
                }
                for message in task.messages.all().order_by('-created_at')
            ],
        }

def triggerTasksSubscription(related_users):
    # Notify WebSocket group
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        "tasks",
        {
            "type": "tasks_refresh",
            "related_users": json.dumps(related_users)
        }
    )

def triggerMessengerSubscription(task):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        f"task_{task.id}",
        {
            "type": "messenger_refresh",
        }
    )   