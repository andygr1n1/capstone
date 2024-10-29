import { Collapse } from 'antd'
import React, { useEffect } from 'react'
import { useRoot$ } from '../../../../../mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Messages } from './Messages'

export const TaskMessenger = observer(() => {
    const { selected_task, refreshMessenger } = useRoot$()

    useEffect(() => {
        if (!selected_task) return

        const socket = new WebSocket(`ws://${window.location.host}/ws/task_messenger/${selected_task.id}/`)
        socket.onmessage = event => {
            const data = JSON.parse(event.data)
            if (data.type === 'messenger_refresh') {
                refreshMessenger()
            }
        }

        return () => {
            socket.close()
        }
    }, [selected_task?.id])

    return <Collapse size="large" items={[{ key: '1', label: 'Messages', children: <Messages /> }]} />
})
