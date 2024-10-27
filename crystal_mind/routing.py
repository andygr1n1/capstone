from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/tasks/', consumers.TaskConsumer.as_asgi()),
    re_path(r'ws/task_messenger/(?P<task_id>\d+)/', consumers.TaskMessengerConsumer.as_asgi()),
]

