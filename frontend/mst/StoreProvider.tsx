import React, { createContext, type ReactNode, useContext } from 'react'
import type { IRoot$ } from './types'
import { Root$ } from './stores/Root.store'
import dayjs from 'dayjs'
const storeContext = createContext<IRoot$ | null>(null)

const generateRoot$ = () => Root$.create({
    selected_date: dayjs(Date.now()).format('DD MMMM YYYY'),
})

export const root$ = generateRoot$()

export const useRoot$ = (): IRoot$ => {
    const store = useContext(storeContext)
    if (!store) {
        throw new Error('use Store shall be used within StoreProvider')
    }

    return store
}

export const Root$Provider = ({ children, store }: { children: ReactNode; store: IRoot$ }) => {
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}
