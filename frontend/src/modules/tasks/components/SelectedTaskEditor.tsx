import React from 'react'
import { Form, Input, DatePicker, Select, Button } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { useRoot$ } from '../../../../mst/StoreProvider'
dayjs.extend(customParseFormat)
const { Option } = Select

export const SelectedTaskEditor: React.FC<{
    toggleEditMode: () => void
}> = ({ toggleEditMode }) => {
    const { selected_task, users, editTask } = useRoot$()
    const [form] = Form.useForm()

    const handleOk = async () => {
        form.validateFields()
            .then(async values => await editTask({ formData: { ...values, id: selected_task?.id } }))
            .then(() => {
                form.resetFields()
                toggleEditMode()
            })
    }

    if (!selected_task) return null

    return (
        <Form
            form={form}
            layout="vertical"
            name="edit_task"
            onFinish={handleOk}
            initialValues={{
                ...selected_task,
                deadline: selected_task.deadline ? dayjs(selected_task.deadline) : null,
                users: selected_task.users.map(user => user.id),
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
