import React, { useState } from 'react'
import { ITask } from '../../../utils/types'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { toggleCompleteTask } from '../../../utils/api/toggleCompleteTask'
import { renderTasksRoot } from '../../../application/app_react'

export const ToggleCompleteTask: React.FC<{ task: ITask }> = ({ task }) => {
    const [finishedAt, setFinishedAt] = useState<string | null>(task.finished_at)

    const handleToggle = async (e: CheckboxChangeEvent) => {
        const isChecked = e.target.checked
        if (isChecked) {
            setFinishedAt(new Date().toISOString())
        } else {
            setFinishedAt(null)
        }
        await toggleCompleteTask(task.id, finishedAt).then(() => {
            if (tasks_state !== 'all') {
                tasks = tasks.filter(t => t.id !== task.id)
                renderTasksRoot()
            }
        })
    }

    return (
        <Checkbox checked={!!finishedAt} onChange={handleToggle}>
            Completed
        </Checkbox>
    )
}
