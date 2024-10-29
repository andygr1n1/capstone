import { applySnapshot, flow, types } from 'mobx-state-tree'
import { User } from '../models/User.model'
import { Task } from '../models/Task.model'
import { api } from '../../src/utils/api'
import { getCalendarDataByDate } from '../../src/modules/dashboard/helpers/getCalendarDataByData'
import { ITaskSnOut } from '../types'

export const Root$ = types
    .model('Root$', {
        users: types.array(User),
        tasks: types.array(Task),

        // tasks filters
        tasks_state: types.optional(
            types.enumeration('TasksState', ['all', 'active', 'completed', 'expired']),
            'active'
        ),
        tasks_current_page: -1,
        tasks_num_pages: 1,
        tasks_search_text: '',

        // dashboard specific filters
        selected_date: types.string,

        // task dialog view/editor
        selected_task: types.safeReference(Task),
    })
    .views(self => ({
        isAllState() {
            return self.tasks_state === 'all'
        },
        calendarData(date: string) {
            return getCalendarDataByDate(date, self.tasks)
        },
    }))
    .actions(self => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        initSetup({ page, searchText, state }: { page: number; searchText: string; state: string }) {
            self.tasks_current_page = page
            self.tasks_search_text = searchText
            self.tasks_state = state
        },
    }))
    .actions(self => ({
        fetchUsersAndTasks: flow(function* _fetchUsersAndTasks() {
            const res = yield api.fetchUsersAndTasks({
                user_id: appUser.id,
                page: self.tasks_current_page,
                filter_by_text: self.tasks_search_text,
                filter_state: 'active',
            })
            applySnapshot(self.users, res.users)
            applySnapshot(self.tasks, res.tasks)
            self.tasks_num_pages = res.num_pages
            self.tasks_current_page = res.current_page
        }),
        fetchSelectedTasks: flow(function* _fetchSelectedTasks(props?: { state: string }) {
            const selectedState = props?.state || self.tasks_state
            if (props?.state) self.tasks_state = selectedState

            const res = yield api.fetchSelectedTasks({
                page: self.tasks_current_page,
                filter_by_text: self.tasks_search_text,
                filter_state: selectedState,
                user_id: appUser.id,
            })

            applySnapshot(self.tasks, res.tasks)
            self.tasks_num_pages = res.num_pages
            self.tasks_current_page = res.current_page
        }),
        editTask: flow(function* _editTask({ formData }: { formData: ITaskSnOut }) {
            yield api.editTask({ formData, tasks_current_page: self.tasks_current_page })
        }),
        deleteTask: flow(function* _deleteTask() {
            const task_id = self.selected_task?.id
            if (!task_id) return
            yield api.deleteTask({ task_id })
        }),
        toggleCompleteTask: flow(function* _toggleCompleteTask({
            taskId,
        }: {
            taskId: number
            finishedAt: string | null
        }) {
            if (!self.isAllState()) {
                applySnapshot(
                    self.tasks,
                    self.tasks.filter(task => task.id !== taskId)
                )
            }

            yield api.toggleCompleteTask({ taskId })
        }),
        sendMessage: flow(function* _sendMessage({ new_message }: { new_message: string }) {
            const task_id = self.selected_task?.id
            if (!task_id) return

            yield api.sendMessage({ new_message, task_id })
        }),
        refreshMessenger: flow(function* _refreshMessenger() {
            const task_id = self.selected_task?.id
            if (!task_id) return
            const resTask = yield api.fetchTaskById({ task_id })
            const selectedTask = self.tasks.find(task => task.id === task_id)
            if (selectedTask) {
                applySnapshot(selectedTask, resTask)
            }
        }),
    }))
