import React, { useEffect } from 'react'
import { CreateNewTask } from './components/CreateNewTask'
import { FilteredTasks } from './components/FilteredTasks'
import { TasksPagination } from './components/TasksPagination'
import { fetchSelectedTasks } from '../../utils/api/fetchSelectedTasks'

export const Tasks = () => {
    useEffect(() => {
        console.log('->> websocket frontend connected')
        const socket = new WebSocket(`ws://${window.location.host}/ws/tasks/`)
        console.log('->> socket', socket)
        socket.onmessage = event => {
            console.log('->> event', event)
            const data = JSON.parse(event.data)
            const relatedUsers = JSON.parse(data.related_users)
            const userInRelatedUsers = relatedUsers.includes(appUser.id)
            console.log(appUser.id, userInRelatedUsers)
            if (data.type === 'tasks_refresh' && userInRelatedUsers) {
                console.log('New task created:', data.related_users)
                fetchSelectedTasks(tasks_current_page)
            }
        }
    }, [])

    return (
        <div className="flex w-full gap-5 flex-col max-w-lg m-auto h-full my-10 px-5 md:px-0">
            <CreateNewTask />
            <FilteredTasks />
            <TasksPagination />
        </div>
    )
}
