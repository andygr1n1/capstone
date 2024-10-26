import React, { useContext } from 'react'
import { ITask } from '../../../utils/types'
import { Card, Divider, Typography } from 'antd'
import { ToggleCompleteTask } from './ToggleCompleteTask'
import { TaskContext } from '../Tasks'
import dayjs from 'dayjs'

const { Text } = Typography

export const Task: React.FC<{ task: ITask }> = ({ task }) => {
    const { setTaskId } = useContext(TaskContext)
    return (
        <Card
            title={task.title}
            className="task-card hover:cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={e => {
                if ((e.target as unknown as HTMLElement).closest('.ant-checkbox-wrapper')) {
                    return
                }
                setTaskId(task.id)
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
}
