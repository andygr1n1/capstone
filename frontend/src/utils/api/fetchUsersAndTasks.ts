export const fetchUsersAndTasks = async ({ user_id, page, filter_by_text, filter_state }: { user_id: number, page: number, filter_by_text: string, filter_state: string }) => {
    return await fetch('/fetchUsersAndTasks', {
        method: 'POST',
        body: JSON.stringify({ user_id, page, filter_by_text, filter_state }),
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
                users: JSON.parse(data.users),
                tasks: JSON.parse(data.tasks),
                num_pages: +data.num_pages,
                current_page: +data.current_page,
            }
        })
        .catch(error => {
            console.error('Error /fetchUsersAndTasks:', error)
            return null
        })
}
