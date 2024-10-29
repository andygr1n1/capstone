import { Button, Form, Input } from 'antd'
import React from 'react'
import { useRoot$ } from '../../../../../mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Message } from './Message'

export const Messages = observer(() => {
    const { selected_task, sendMessage } = useRoot$()
    const [form] = Form.useForm()

    const handleSendMessage = async () => {
        form.validateFields().then(async values => {
            sendMessage({ new_message: values.new_message }).then(() => {
                form.resetFields()
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
            <div className="my-2">
                {selected_task?.messages.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
        </>
    )
})
