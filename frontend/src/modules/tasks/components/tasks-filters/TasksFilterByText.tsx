import React, { ChangeEvent, useMemo, useState } from 'react'
import { Input } from 'antd'
import { debounce } from 'lodash-es'
import { observer } from 'mobx-react-lite'
import { useRoot$ } from '../../../../../mst/StoreProvider'

export const TasksFilterByText = observer(() => {
    const [searchText, setSearchText] = useState('')
    const { onChangeField, fetchSelectedTasks } = useRoot$()

    const onChangeServerSearchInput = useMemo(() => {
        return debounce(async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            onChangeField('tasks_search_text', e.target.value)
            fetchSelectedTasks()
        }, 1000)
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchText(e.target.value)
        onChangeServerSearchInput(e)
    }

    return (
        <div>
            <Input size={'large'} placeholder="Search..." value={searchText} onChange={onChange} />
        </div>
    )
})
