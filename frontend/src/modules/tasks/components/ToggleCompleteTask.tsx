import React from 'react'
import { ITask } from '../../../utils/types'
import { Checkbox } from 'antd'

export const ToggleCompleteTask: React.FC<{ task: ITask }> = ({ task }) => {
    return <Checkbox checked={!!task.finished_at}>Completed</Checkbox>
}
