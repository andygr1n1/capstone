import React from 'react'
import { root$, Root$Provider } from '../../../mst/StoreProvider'
import { Tasks } from './Tasks'
import { useInitModule } from '../../hooks/useInitModule'

export const TasksIndex = () => {
    useInitModule({ page: 1, searchText: '', state: 'active' })
    return (
        <Root$Provider store={root$}>
            <Tasks />
        </Root$Provider>
    )
}
