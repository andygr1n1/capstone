import { ITaskSnOut } from '../../../mst/types'

export const editTask = async ({
    formData,
    tasks_current_page,
}: {
    formData: ITaskSnOut
    tasks_current_page: number
}) => {
    return await fetch('/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': appCsrftoken,
        },
        body: JSON.stringify({ ...formData, current_page: tasks_current_page }),
    })
}
