export const toggleCompleteTask = async ({ taskId }: { taskId: number }) => {
    try {
        return await fetch('/toggleCompleteTask', {
            method: 'POST',
            body: JSON.stringify({ taskId }),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': appCsrftoken,
            },
        })
    } catch (e) {
        console.error(e)
    }
}
