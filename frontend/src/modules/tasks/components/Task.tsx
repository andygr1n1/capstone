import React from 'react'
import { Card, Divider, Typography } from 'antd'
import { ToggleCompleteTask } from './ToggleCompleteTask'
import dayjs from 'dayjs'
import { observer } from 'mobx-react-lite'
import { ITask } from '../../../../mst/types'
import { useRoot$ } from '../../../../mst/StoreProvider'
import { castToSnapshot } from 'mobx-state-tree'

const { Text } = Typography

export const Task: React.FC<{ task: ITask }> = observer(({ task }) => {
    const { onChangeField } = useRoot$()
    return (
        <Card
            title={task.title}
            className="task-card hover:cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={e => {
                if ((e.target as unknown as HTMLElement).closest('.ant-checkbox-wrapper')) {
                    return
                }
                onChangeField('selected_task', castToSnapshot(task.id))
            }}
        >
            <div className="flex w-full justify-between">
                <div className="flex flex-col sm:flex-row gap-1">
                    <Text className="text-xs">Created:</Text>
                    <Text className="text-xs">{dayjs(task.created_at).format('DD MMM YYYY HH:mm')}</Text>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                    <Text className="text-xs">Deadline:</Text>
                    <Text className="text-xs">{dayjs(task.deadline).format('DD MMM YYYY HH:mm')}</Text>
                </div>
            </div>
            <div className="my-5">{task.description}</div>
            <Divider />
            {task.is_author && <ToggleCompleteTask task={task} />}
        </Card>
    )
})
