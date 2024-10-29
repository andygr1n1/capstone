import React from 'react'
import { Observer, observer } from 'mobx-react-lite'
import { useRoot$ } from '../../../mst/StoreProvider'
import { Badge } from 'antd'

export const CellRender = observer(({ value }: { value: string }) => {
    const { calendarData } = useRoot$()
    return (
        <Observer>
            {() => (
                <ul className="events">
                    {calendarData(value).map(item => (
                        <li key={item.id}>
                            <Badge status={item.is_author ? 'success' : 'default'} text={item.title} />
                        </li>
                    ))}
                </ul>
            )}
        </Observer>
    )
})
