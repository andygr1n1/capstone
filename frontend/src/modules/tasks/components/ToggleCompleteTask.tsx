import React, { useState } from 'react'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { ITask } from '../../../../mst/types'
import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../../../../mst/StoreProvider'

export const ToggleCompleteTask: React.FC<{ task: ITask }> = observer(({ task }) => {
    const { toggleCompleteTask } = useRoot$()
    const [finishedAt, setFinishedAt] = useState<string | null>(task.finished_at)

    const handleToggle = async (e: CheckboxChangeEvent) => {
        const finished_at = e.target.checked ? new Date().toISOString() : null
        setFinishedAt(finished_at)
        toggleCompleteTask({ taskId: task.id, finishedAt: finished_at })
    }

    return (
        <Checkbox checked={!!finishedAt} onChange={handleToggle}>
            Completed
        </Checkbox>
    )
})
