import React, { useState } from 'react'
import { Calendar } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { useWindowWidth } from '../../hooks/useContainerWidth'
import { useRoot$ } from '../../../mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { CellRender } from './CellRender'

export const CalendarIndex = observer(() => {
    const { isLgView } = useWindowWidth()
    const { onChangeField } = useRoot$()
    const [value, setValue] = useState(() => dayjs(Date.now()))

    const onSelect = (newValue: Dayjs) => {
        setValue(newValue)
        onChangeField('selected_date', newValue.format('DD MMMM YYYY'))
    }

    const onPanelChange = (newValue: Dayjs) => {
        setValue(newValue)
    }

    return (
        <div className="w-full p-5 bg-white rounded-lg">
            <Calendar
                cellRender={
                    isLgView ? (value: Dayjs) => <CellRender value={value.format('DD MMMM YYYY')} /> : undefined
                }
                fullscreen={isLgView}
                value={value}
                onSelect={onSelect}
                onPanelChange={onPanelChange}
            />
        </div>
    )
})
