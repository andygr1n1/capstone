import { renderTasksRoot } from "../../application/app_react"

export const deleteTask = async (taskId: number) => {
    await fetch('/deleteTask', {
        method: 'POST',
        body: JSON.stringify({ taskId }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': appCsrftoken,
        },
    })
        .then(() => {
            tasks = tasks.filter(task => task.id !== taskId)
            renderTasksRoot()
        })

        .catch(error => {
            console.error('Error /deleteTask:', error)
            return null
        })
}
