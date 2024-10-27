import { Button, Collapse, Form, Input } from 'antd'
import React, { useEffect } from 'react'
import { ITask } from '../../../../utils/types'
import { Message } from './Message'

export const TaskMessenger: React.FC<{ task: ITask; fetchTask: (taskId: number) => void }> = ({ task, fetchTask }) => {
    useEffect(() => {
        const socket = new WebSocket(`ws://${window.location.host}/ws/task_messenger/${task.id}/`)
        socket.onmessage = event => {
            const data = JSON.parse(event.data)
            if (data.type === 'messenger_refresh') {
                fetchTask(task.id)
            }
        }

        return () => {
            socket.close()
        }
    }, [])

    return <Collapse size="large" items={[{ key: '1', label: 'Messages', children: <Messages task={task} /> }]} />
}

const Messages: React.FC<{ task: ITask }> = ({ task }) => {
    const [form] = Form.useForm()

    const handleSendMessage = async () => {
        form.validateFields().then(async values => {
            await fetch('/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': appCsrftoken,
                },
                body: JSON.stringify({ ...values, task_id: task.id }),
            }).then(response => {
                return response.json()
            })
        })
    }

    return (
        <>
            <div className="flex flex-col gap-2">
                <Form
                    form={form}
                    layout="vertical"
                    name="new_message"
                    onFinish={handleSendMessage}
                    className="p-4 bg-white shadow-md rounded-lg"
                >
                    <Form.Item name="new_message" className="mb-2">
                        <Input.TextArea
                            placeholder="Write a message..."
                            className="resize-none border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </Form.Item>
                    <Button htmlType="submit" type="primary" size="large" className="w-full">
                        Send
                    </Button>
                </Form>
            </div>
            <div>
                {task.messages.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
        </>
    )
}
