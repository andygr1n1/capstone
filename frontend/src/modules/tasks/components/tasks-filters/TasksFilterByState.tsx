import React from 'react'
import type { RadioChangeEvent } from 'antd'
import { Radio } from 'antd'
import { useRoot$ } from '../../../../../mst/StoreProvider'
import { observer } from 'mobx-react-lite'

export const TasksFilterByState = observer(() => {
    const { fetchSelectedTasks, tasks_state } = useRoot$()

    const onChange = (e: RadioChangeEvent) => fetchSelectedTasks({ state: e.target.value })

    return (
        <div>
            <Radio.Group block onChange={onChange} defaultValue="active" value={tasks_state}>
                <Radio.Button value="all">All</Radio.Button>
                <Radio.Button value="active">Active</Radio.Button>
                <Radio.Button value="expired">Expired</Radio.Button>
                <Radio.Button value="completed">Completed</Radio.Button>
            </Radio.Group>
        </div>
    )
})
