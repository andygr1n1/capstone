from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True, blank=True, max_length=254, verbose_name='email address')


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    finished_at = models.DateTimeField(null=True, blank=True)
    deadline = models.DateTimeField()
    location = models.CharField(max_length=200, null=True, blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    users = models.ManyToManyField(User, related_name='tasks')

    # Add a related name for messages to access them easily from the task side
    def __str__(self):
        return self.title


class Message(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='messages')

    def __str__(self):
        return f'Message by {self.created_by} on {self.created_at} in {self.task.title} with id {self.task.id}'
