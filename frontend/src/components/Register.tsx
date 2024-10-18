import React from 'react'
import { Form, Input, Button, Typography, message } from 'antd'
import { getCsrftoken } from '../utils/getCookie'

const { Title } = Typography

export const Register = () => {
    const onFinish = (values: { username: string; email: string; password: string; confirmation: string }) => {
        fetch('/register/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrftoken(),
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Network response was not ok')
                }
            })
            .then(data => {
                if (data.status === 'success') {
                    window.location.href = '/'
                } else {
                    const errorMessage = data.message
                    message.error(errorMessage)
                    console.error('Error:', data)
                }
            })
            .catch(error => {
                const errorMessage = error
                message.error(errorMessage)
                console.error('Error:', error)
            })
    }

    return (
        <div className="flex justify-center w-full max-w-xl items-center h-full">
            <div className="bg-white p-10 rounded-md shadow-md w-full max-w-md">
                <Title className="font-kaushan text-center">Register</Title>
                <Form name="register" onFinish={onFinish}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                        <Input size="large" placeholder="Username" autoComplete="username" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your Email!' },
                            { type: 'email', message: 'The input is not valid E-mail!' },
                        ]}
                    >
                        <Input size="large" type="email" placeholder="Email Address" autoComplete="email" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input.Password size="large" placeholder="Password" autoComplete="new-password" />
                    </Form.Item>

                    <Form.Item
                        name="confirmation"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your Password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'))
                                },
                            }),
                        ]}
                    >
                        <Input.Password size="large" placeholder="Confirm Password" autoComplete="new-password" />
                    </Form.Item>

                    <Form.Item>
                        <Button size="large" type="primary" htmlType="submit" className="w-full">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <div className="flex justify-center">
                    <Button type="text" href="/login">
                        Already have an account? Login
                    </Button>
                </div>
            </div>
        </div>
    )
}
