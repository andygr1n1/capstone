export const deleteTask = async ({ task_id }: { task_id: number }) => {
    await fetch('/deleteTask', {
        method: 'POST',
        body: JSON.stringify({ task_id }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': appCsrftoken,
        },
    }).catch(error => {
        console.error('Error /deleteTask:', error)
        return null
    })
}
