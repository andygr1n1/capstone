import React from 'react'
import { CreateNewTask } from './components/CreateNewTask'
import { FilteredTasks } from './components/FilteredTasks'

export const Tasks = () => {
    return (
        <div className="flex w-full gap-5 flex-col max-w-lg m-auto h-full my-10 px-5 md:px-0">
            <CreateNewTask />
            <FilteredTasks />
        </div>
    )
}
