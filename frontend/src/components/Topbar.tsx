import React from 'react'
import { Button, Space } from 'antd'
import { LogOutButton } from './LogOutButton'

export const Topbar = () => {
    return (
        <div>
            <Space className="flex justify-between flex-col md:flex-row gap-10 md:gap-0 p-5">
                <a href="/">
                    <div className="text-6xl px-2 font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Crystal Mind
                    </div>
                </a>
                <div className="flex gap-2">
                    {!isAuthenticated ? (
                        <>
                            <Button shape="round" type="dashed" href="/register">
                                Join now
                            </Button>
                            <Button shape="round" type="dashed" href="/login">
                                Login
                            </Button>
                        </>
                    ) : (
                        <>
                            <LogOutButton />
                        </>
                    )}
                </div>
            </Space>
        </div>
    )
}
