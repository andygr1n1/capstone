import React from 'react'

import { root$, Root$Provider } from '../../../mst/StoreProvider'
import { Dashboard } from './Dashboard'
import { useInitModule } from '../../hooks/useInitModule'

export const DashboardIndex = () => {
    useInitModule({ page: -1, searchText: '', state: 'active' })

    return (
        <Root$Provider store={root$}>
            <Dashboard />
        </Root$Provider>
    )
}
