import React from 'react'
import { CreateNewTask } from './components/CreateNewTask'
import { ActiveTasks } from './components/ActiveTasks'
import { CompletedTasks } from './components/CompletedTasks'

export const Tasks = () => {
    return (
        <div className="flex w-full flex-col lg:flex-row h-full my-10">
            <div className="lg:w-1/2 flex flex-col gap-4 items-center">
                <CreateNewTask />
                <ActiveTasks />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-4 items-center">
                <CompletedTasks />
            </div>
        </div>
    )
}
