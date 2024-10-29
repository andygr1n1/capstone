import React from 'react'
import { Pagination } from 'antd'
import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../../../../mst/StoreProvider'

export const TasksPagination = observer(() => {
    const { tasks_num_pages, onChangeField, fetchSelectedTasks } = useRoot$()
    const onPageChange = async (page: number) => {
        onChangeField('tasks_current_page', page)
        fetchSelectedTasks()
    }
    return (
        <Pagination
            align="center"
            pageSize={5}
            defaultCurrent={1}
            total={tasks_num_pages * 5}
            onChange={onPageChange}
            pageSizeOptions={[5]}
        />
    )
})
