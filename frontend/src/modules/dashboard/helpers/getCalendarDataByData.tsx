import dayjs from 'dayjs'
import { ITask } from '../../../../mst/types'

export const getCalendarDataByDate = (date: string, tasks: ITask[]) => {
    return tasks.filter(task => {
        const taskStartDate = dayjs(task.created_at)
        const taskDeadline = dayjs(task.deadline).endOf('day')
        const currentDate = dayjs(date).endOf('day')

        return (
            currentDate.isSame(taskStartDate, 'day') ||
            currentDate.isSame(taskDeadline, 'day') ||
            (currentDate.isAfter(taskStartDate, 'day') && currentDate.isBefore(taskDeadline, 'day'))
        )
    })
}
