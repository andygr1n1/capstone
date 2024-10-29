import React from 'react'
import { Task } from './Task'
import { useRoot$ } from '../../../../mst/StoreProvider'
import { observer } from 'mobx-react-lite'

export const FilteredTasks = observer(() => {
    const { tasks } = useRoot$()
    return (
        <div className="flex flex-col gap-5">
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
})
