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
    path("selectedTasks/<int:page>", views.selectedTasks, name="selectedTasks"),
    path("toggleCompleteTask/", views.toggleCompleteTask, name="toggleCompleteTask"),
]
