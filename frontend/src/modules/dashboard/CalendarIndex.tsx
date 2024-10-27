import React, { useState } from 'react'
import { Calendar } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { useWindowWidth } from '../../hooks/useContainerWidth'

export const CalendarIndex: React.FC<{ selectedValue: Dayjs; setSelectedValue: (value: Dayjs) => void }> = ({
    setSelectedValue,
}) => {
    const { isLgView } = useWindowWidth()
    const [value, setValue] = useState(() => dayjs(Date.now()))

    const onSelect = (newValue: Dayjs) => {
        setValue(newValue)
        setSelectedValue(newValue)
    }

    const onPanelChange = (newValue: Dayjs) => {
        setValue(newValue)
    }
    return (
        <div className="w-full max-w-4xl p-5 bg-white rounded-lg">
            <Calendar fullscreen={isLgView} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </div>
    )
}
