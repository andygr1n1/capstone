import React from 'react'
import { Button, Space } from 'antd'

export const Topbar = () => {
    return (
        <div>
            <Space className="flex justify-between p-5">
                <div className="text-6xl px-2 font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-xky-300 to-sky-500">
                    On cruises
                </div>
                <div className="flex gap-2">
                    <Button shape="round" type="text">
                        Partnership
                    </Button>
                    <Button shape="round" type="text">
                        Membership
                    </Button>
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
