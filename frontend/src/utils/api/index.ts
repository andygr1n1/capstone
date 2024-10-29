import { deleteTask } from './deleteTask'
import { editTask } from './editTask'
import { fetchSelectedTasks } from './fetchSelectedTasks'
import { fetchTaskById } from './fetchTaskById'
import { fetchUsersAndTasks } from './fetchUsersAndTasks'
import { sendMessage } from './sendMessage'
import { toggleCompleteTask } from './toggleCompleteTask'

export const api = {
    fetchUsersAndTasks,
    fetchSelectedTasks,
    editTask,
    deleteTask,
    toggleCompleteTask,
    sendMessage,
    fetchTaskById,
}
