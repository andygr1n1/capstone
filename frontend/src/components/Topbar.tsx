import React from 'react'
import { Button, Space } from 'antd'

export const Topbar = () => {
    return (
        <div>
            <Space className="flex justify-between flex-col md:flex-row gap-10 md:gap-0 p-5">
                <div className="text-6xl px-2 font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Crystal Mind
                </div>
                <div className="flex gap-2">
                    <Button shape="round" type="dashed">
                        Join now
                    </Button>
                    <Button shape="round" type="dashed">
                        Login
                    </Button>
                </div>
            </Space>
        </div>
    )
}
