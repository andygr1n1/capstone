export const fetchTaskById = async ({ task_id }: { task_id: number }) => {
    return await fetch('/fetchTask', {
        method: 'POST',
        body: JSON.stringify({ task_id }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': appCsrftoken,
        },
    })
        .then(data => {
            return data.json()
        })
        .then(data => {
            return JSON.parse(data.task)
        })
        .catch(error => {
            console.error('Error /task/:', error)
            return null
        })
}
