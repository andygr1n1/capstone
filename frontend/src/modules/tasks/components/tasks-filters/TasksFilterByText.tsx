import React, { ChangeEvent, useMemo, useState } from 'react'
import { Input } from 'antd'
import { debounce } from 'lodash-es'
import { fetchSelectedTasks } from '../../../../utils/api/fetchSelectedTasks'

export const TasksFilterByText = () => {
    const [searchText, setSearchText] = useState('')

    const onChangeServerSearchInput = useMemo(() => {
        return debounce(async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            tasks_search_text = e.target.value
            await fetchSelectedTasks({ page: 1, searchText: e.target.value })
        }, 1000)
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchText(e.target.value)
        onChangeServerSearchInput(e)
    }

    return (
        <div>
            <Input placeholder="Search..." value={searchText} onChange={onChange} />
        </div>
    )
}
