import React from 'react'
import { Form, Input, DatePicker, Select, Button } from 'antd'
import { ITask } from '../../../utils/types'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
const { Option } = Select

export const SelectedTaskEditor: React.FC<{
    selectedTask: ITask
    toggleEditMode: () => void
    toggleIsLoading: () => void
    setSelectedTask: (task: ITask) => void
}> = ({ selectedTask, toggleEditMode, toggleIsLoading, setSelectedTask }) => {
    const [form] = Form.useForm()

    const handleOk = async () => {
        toggleIsLoading()
        form.validateFields()
            .then(async values => {
                const res = await fetch('/createTask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': appCsrftoken,
                    },
                    body: JSON.stringify({ ...values, current_page: tasks_current_page, id: selectedTask.id }),
                })
                if (res.ok) {
                    const data = await res.json()
                    setSelectedTask(JSON.parse(data.task))
                    toggleEditMode()
                    form.resetFields()
                } else {
                    console.error('Failed to create task:', res.statusText)
                }
            })
            .catch(info => {
                console.error('Validate Failed:', info)
            })
            .finally(() => {
                toggleIsLoading()
            })
    }

    return (
        <Form
            form={form}
            layout="vertical"
            name="edit_task"
            onFinish={handleOk}
            initialValues={{
                ...selectedTask,
                deadline: selectedTask.deadline ? dayjs(selectedTask.deadline) : null,
                users: selectedTask.users.map(user => user.id),
            }}
        >
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
            <div className={'flex gap-2 mt-5 justify-end'}>
                <div className="flex gap-2">
                    <Button onClick={toggleEditMode}>Cancel</Button>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </div>
            </div>
        </Form>
    )
}
