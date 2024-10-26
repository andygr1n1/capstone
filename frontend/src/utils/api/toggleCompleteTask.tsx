export const toggleCompleteTask = async (taskId: number, finished_at: string | null) => {
    await fetch('/toggleCompleteTask', {
        method: 'POST',
        body: JSON.stringify({ taskId, finished_at }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': appCsrftoken,
        },
    })
}
