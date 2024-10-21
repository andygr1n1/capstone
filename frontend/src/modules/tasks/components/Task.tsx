import React from 'react'
import { ITask } from '../../../utils/types'
import { Card, Divider, Typography } from 'antd'
import { ToggleCompleteTask } from './ToggleCompleteTask'
import { format } from 'date-fns'

const { Text } = Typography

export const Task: React.FC<{ task: ITask }> = ({ task }) => {
    console.log(task.is_author)
    return (
        <Card title={task.title} className="task-card">
            <div className="flex w-full justify-between">
                <div className="flex flex-col sm:flex-row gap-1">
                    <Text className="text-xs">Created:</Text>
                    <Text className="text-xs">{format(new Date(task.created_at), 'dd MMM yyyy HH:mm')}</Text>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                    <Text className="text-xs">Deadline:</Text>
                    <Text className="text-xs">{format(new Date(task.deadline), 'dd MMM yyyy HH:mm')}</Text>
                </div>
            </div>
            <div className="my-5">{task.description}</div>
            <Divider />
            {task.is_author && <ToggleCompleteTask task={task} />}
        </Card>
    )
}
