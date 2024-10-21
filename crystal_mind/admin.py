from django.contrib import admin

from .models import *

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_by', 'created_at', 'deadline', 'location', 'get_users', 'get_messages')

    def get_users(self, obj):
        return ", ".join([user.username for user in obj.users.all()])
    get_users.short_description = 'Users'

    def get_messages(self, obj):
        return obj.messages.count()
    get_messages.short_description = 'Messages'


class MessageAdmin(admin.ModelAdmin):
    list_display = ('content', 'created_by', 'created_at', 'task')

admin.site.register(User)
admin.site.register(Task, TaskAdmin)
admin.site.register(Message, MessageAdmin)



