import React from 'react'
import { Pagination } from 'antd'
import { fetchSelectedTasks } from '../../../utils/api/fetchSelectedTasks'

export const TasksPagination = () => {
    const onPageChange = async (page: number) => {
        tasks_current_page = page
        fetchSelectedTasks({ page })
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
}
