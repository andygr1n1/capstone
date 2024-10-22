import { renderTasksRoot } from '../../application/app_react'

export const fetchSelectedTasks = async (page: number) => {
    await fetch(`/selectedTasks/${page}`)
        .then(data => {
            return data.json()
        })
        .then(data => {
            console.log('data', data.tasks)
            tasks = JSON.parse(data.tasks)
            tasks_num_pages = JSON.parse(data.num_pages)
            tasks_current_page = JSON.parse(data.current_page)
        })
        .catch(error => console.error('Error /selectedTasks:', error))

    renderTasksRoot()
}
