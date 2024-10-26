import json
from channels.generic.websocket import AsyncWebsocketConsumer

class TaskConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("tasks", self.channel_name)
        await self.accept()
        
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("tasks", self.channel_name)
        
    async def receive(self, text_data):
        data = json.loads(text_data)
        # Handle incoming data if needed

    async def tasks_refresh(self, event):
        await self.send(text_data=json.dumps({
            'type': 'tasks_refresh',
            'related_users': event['related_users']
        }))
