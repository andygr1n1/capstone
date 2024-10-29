from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("register/", views.register, name="register"),
    path("logout/", views.logout_view, name="logout"),
    path("login/", views.login_view, name="login"),
    path("tasks/", views.tasks, name="tasks"),
    # js
    path("createTask", views.createTask, name="createTask"),
    path("fetchTask", views.fetchTask, name="fetchTask"),
    path("deleteTask", views.deleteTask, name="deleteTask"),
    path("toggleCompleteTask", views.toggleCompleteTask, name="toggleCompleteTask"),
    path("selectedTasks/<int:page>/<str:searchText>/<str:state>/", views.selectedTasks, name="selectedTasks"),
    path("selectedTasks/<int:page>/", views.selectedTasks, name="selectedTasks"),
    path("fetchUsersAndTasks", views.fetchUsersAndTasks, name="fetchUsersAndTasks"),
    # Task Messenger
    path("sendMessage", views.sendMessage, name="sendMessage"),
    path("fetchSelectedTasks", views.fetchSelectedTasks, name="fetchSelectedTasks"),
]
