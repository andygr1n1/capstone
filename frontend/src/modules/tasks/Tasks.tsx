import React from 'react'
import { CreateNewTask } from './components/CreateNewTask'
import { FilteredTasks } from './components/FilteredTasks'
import { TasksPagination } from './components/TasksPagination'
import { TasksFilters } from './components/tasks-filters/TasksFilters'
import { SelectedTaskDialog } from './components/SelectedTaskDialog'

export const Tasks = () => {
    return (
        <div className="flex w-full gap-5 flex-col max-w-lg m-auto h-full my-10 px-5 md:px-0">
            <TasksFilters />
            <CreateNewTask />
            <FilteredTasks />
            <TasksPagination />
            {/* dialogs */}
            <SelectedTaskDialog />
        </div>
    )
}
