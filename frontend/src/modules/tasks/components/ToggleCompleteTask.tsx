import React, { useState } from 'react'
import { ITask } from '../../../utils/types'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { toggleCompleteTask } from '../../../utils/api/toggleCompleteTask'

export const ToggleCompleteTask: React.FC<{ task: ITask }> = ({ task }) => {
    const [finishedAt, setFinishedAt] = useState<string | null>(task.finished_at)

    const handleToggle = async (e: CheckboxChangeEvent) => {
        const isChecked = e.target.checked
        if (isChecked) {
            // await toggleCompleteTask(task.id)
            setFinishedAt(new Date().toISOString())
        } else {
            setFinishedAt(null)
        }
            await toggleCompleteTask(task.id, finishedAt)
    }

    return (
        <Checkbox checked={!!finishedAt} onChange={handleToggle}>
            Completed
        </Checkbox>
    )
}
