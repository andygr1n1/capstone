import React from 'react'
import { Form, Input, Button, Typography, message } from 'antd'

const { Title } = Typography

export const Login = () => {
    const onFinish = (values: { username: string; password: string }) => {
        console.log('CSRF Token:', appCsrftoken)
        fetch('/login/', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': appCsrftoken,
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
        <div className="flex justify-center w-full items-center">
            <div className="lg:bg-white p-10 lg:rounded-md lg:shadow-md w-full max-w-md">
                <Title className="font-kaushan text-center">Login</Title>
                <Form name="login" onFinish={onFinish}>
                    <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                        <Input size="large" placeholder="Username" autoComplete="username" />
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                        <Input size="large" type="password" placeholder="Password" autoComplete="password" />
                    </Form.Item>

                    <Form.Item>
                        <Button size="large" type="primary" htmlType="submit" className="w-full">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div className="flex justify-center">
                    <Button type="text" href="/register">
                        Don&apos;t have an account? Register
                    </Button>
                </div>
            </div>
        </div>
    )
}
