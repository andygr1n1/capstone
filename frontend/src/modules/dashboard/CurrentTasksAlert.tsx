import { Alert } from 'antd'
import React from 'react'
import dayjs from 'dayjs'
import { useWindowWidth } from '../../hooks/useContainerWidth'
import { Task } from '../tasks/components/Task'
import { useRoot$ } from '../../../mst/StoreProvider'
import { observer } from 'mobx-react-lite'

export const CurrentTasksAlert = observer(() => {
    const { isLgView } = useWindowWidth()
    const { selected_date, calendarData } = useRoot$()

    return (
        <>
            {isLgView && <Alert message={`Tasks on ${dayjs(selected_date).format('DD MMMM YYYY')}`} />}
            <div className="flex flex-col gap-4 my-4">
                {calendarData(selected_date)?.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </>
    )
})
