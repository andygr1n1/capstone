import React from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio } from 'antd'
import { fetchSelectedTasks } from '../../../../utils/api/fetchSelectedTasks'

export const TasksFilterByState = () => {
    const onChange = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`)
        tasks_state = e.target.value

        fetchSelectedTasks({ page: 1 })
    }

    return (
        <div>
            <Radio.Group block onChange={onChange} defaultValue="all">
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="active">Active</Radio.Button>
                <Radio.Button value="expired">Expired</Radio.Button>
                <Radio.Button value="completed">Completed</Radio.Button>
            </Radio.Group>
        </div>
    )
}
