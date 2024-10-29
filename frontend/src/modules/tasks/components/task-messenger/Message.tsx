import React from 'react'
import { Card } from 'antd'
import dayjs from 'dayjs'
import { IMessage } from '../../../../../mst/types'
export const Message: React.FC<{ message: IMessage }> = ({ message }) => {
    return (
        <Card className="mb-4 shadow-lg">
            <div className="text-base">{message.content}</div>
            <div className="text-sm text-gray-400">By: {message?.created_by?.username}</div>
            <div className="text-xs text-gray-400">{dayjs(message.created_at).format('DD MMM YYYY HH:mm:ss')}</div>
        </Card>
    )
}
