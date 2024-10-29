export const sendMessage = async ({ new_message, task_id }: { new_message: string; task_id: number }) => {
    return await fetch('/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': appCsrftoken,
        },
        body: JSON.stringify({ new_message, task_id }),
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            return data.message
        })
}
