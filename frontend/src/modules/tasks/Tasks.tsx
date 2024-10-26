import React, { createContext, useEffect, useState } from 'react'
import { TaskEditor } from './components/TaskEditor'
import { FilteredTasks } from './components/FilteredTasks'
import { TasksPagination } from './components/TasksPagination'
import { fetchSelectedTasks } from '../../utils/api/fetchSelectedTasks'
import { TasksFilters } from './components/tasks-filters/TasksFilters'
import { SelectedTaskDialog } from './components/SelectedTaskDialog'

export interface TaskContextType {
    taskId: number | null
    setTaskId: (id: number | null) => void
}

export const TaskContext = createContext<TaskContextType>({
    taskId: null,
    setTaskId: () => {},
})

export const Tasks = () => {
    const [taskId, setTaskId] = useState<number | null>(null)

    useEffect(() => {
        console.log('->> websocket frontend connected')
        const socket = new WebSocket(`ws://${window.location.host}/ws/tasks/`)
        console.log('->> socket', socket)
        socket.onmessage = event => {
            const data = JSON.parse(event.data)
            const relatedUsers = JSON.parse(data.related_users)
            const userInRelatedUsers = relatedUsers.includes(appUser.id)
            if (data.type === 'tasks_refresh' && userInRelatedUsers) {
                fetchSelectedTasks({ page: tasks_current_page })
            }
        }
    }, [])

    return (
        <div className="flex w-full gap-5 flex-col max-w-lg m-auto h-full my-10 px-5 md:px-0">
            <TasksFilters />
            <TaskEditor />
            <TaskContext.Provider value={{ taskId, setTaskId }}>
                <FilteredTasks />
                <SelectedTaskDialog />
            </TaskContext.Provider>
            <TasksPagination />
        </div>
    )
}
