import React, { useState } from 'react'
import { Button, Modal, Form, Input, DatePicker, Select } from 'antd'
const { Option } = Select

export const CreateNewTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [form] = Form.useForm()

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = async () => {
        form.validateFields()
            .then(async values => {
                console.log('Received values of form: ', values)
                const res = await fetch('/createTask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                    body: JSON.stringify(values),
                })
                if (res.ok) {
                    setIsModalOpen(false)
                    form.resetFields()
                } else {
                    console.error('Failed to create task:', res.statusText)
                }
            })
            .catch(info => {
                console.log('Validate Failed:', info)
            })
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <Button className="w-full" size="large" type="primary" onClick={showModal}>
                New task
            </Button>
            <Modal title="Create new task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical" name="create_task">
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please input the title of the task!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please input the description of the task!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name="deadline"
                        label="Deadline"
                        rules={[{ required: true, message: 'Please select the deadline!' }]}
                    >
                        <DatePicker showTime />
                    </Form.Item>
                    <Form.Item name="location" label="Location">
                        <Input />
                    </Form.Item>
                    <Form.Item name="users" label="Assign to Users">
                        <Select mode="multiple" allowClear style={{ width: '100%' }} placeholder="Select users">
                            {users.map(user => (
                                <Option key={user.id} value={user.id}>
                                    {user.username}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
