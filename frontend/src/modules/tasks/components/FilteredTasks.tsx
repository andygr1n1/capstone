import React from 'react'
import { Task } from './Task'

export const FilteredTasks = () => {
    return (
        <div className="flex flex-col gap-5">
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}
