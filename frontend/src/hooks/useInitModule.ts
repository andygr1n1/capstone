import { useEffect } from 'react'
import { root$ } from '../../mst/StoreProvider'

export const useInitModule = ({ page, searchText, state }: { page: number; searchText: string; state: string }) => {
    useEffect(() => {
        root$.initSetup({ page, searchText, state })
        root$.fetchUsersAndTasks()

        const socket = new WebSocket(`ws://${window.location.host}/ws/tasks/`)
        socket.onmessage = event => {
            const data = JSON.parse(event.data)
            const relatedUsers = JSON.parse(data.related_users)
            const userInRelatedUsers = relatedUsers.includes(appUser.id)
            if (data.type === 'tasks_refresh' && userInRelatedUsers) {
                root$.fetchSelectedTasks()
            }
        }

        return () => {
            socket.close()
        }
    }, [])
}
