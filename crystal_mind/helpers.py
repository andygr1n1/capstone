import json
from .models import Task, User
from django.core.paginator import Paginator
from django.db.models import Q

def makeTasks(request, page):
    tasks = Task.objects.filter(Q(users__id=request.user.id) | Q(created_by=request.user)).distinct()
    tasks = tasks.order_by('-created_at')
    paginator = Paginator(tasks, 10) 
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
            "users": [{"id": user.id, "username": user.username} for user in task.users.all()],
            "messages": [{"id": message.id, "content": message.content, "created_at": message.created_at.strftime("%Y-%m-%d %H:%M:%S")} for message in task.messages.all()],
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
