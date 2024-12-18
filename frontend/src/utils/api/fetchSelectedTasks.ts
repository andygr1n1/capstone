export const fetchSelectedTasks = async ({
    page,
    filter_by_text,
    filter_state,
    user_id,
}: {
    page: number
    filter_by_text: string
    filter_state: string
    user_id: number
}) => {
    return await fetch('/fetchSelectedTasks', {
        method: 'POST',
        body: JSON.stringify({ page, filter_by_text, filter_state, user_id }),
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': appCsrftoken,
        },
    })
        .then(data => {
            return data.json()
        })
        .then(data => {
            return {
                tasks: JSON.parse(data.tasks),
                num_pages: +data.num_pages,
                current_page: +data.current_page,
            }
        })
        .catch(error => {
            console.error('Error /fetchSelectedTasks:', error)
            return null
        })
}
