import { renderTasksRoot } from '../../application/app_react'

export const fetchSelectedTasks = async (props: { page: number; searchText?: string }) => {
    const searchText = props.searchText || tasks_search_text || '___empty_search___'
    await fetch(`/selectedTasks/${props.page}/${searchText}/${tasks_state}`)
        .then(data => {
            return data.json()
        })
        .then(data => {
            tasks = JSON.parse(data.tasks)
            tasks_num_pages = JSON.parse(data.num_pages)
            tasks_current_page = JSON.parse(data.current_page)
        })
        .catch(error => console.error('Error /selectedTasks:', error))

    renderTasksRoot()
}
