import React from 'react'
import { TasksFilterByText } from './TasksFilterByText'
import { TasksFilterByState } from './TasksFilterByState'

export const TasksFilters = () => {
    return (
        <div>
            <TasksFilterByText />
            <TasksFilterByState />
        </div>
    )
}
