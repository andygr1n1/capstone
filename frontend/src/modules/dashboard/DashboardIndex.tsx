import React, { useState } from 'react'
import { Alert, Collapse } from 'antd'
import dayjs from 'dayjs'
import { useWindowWidth } from '../../hooks/useContainerWidth'
import { CalendarIndex } from './CalendarIndex'

export const DashboardIndex = () => {
    const { isLgView } = useWindowWidth()
    const [selectedValue, setSelectedValue] = useState(() => dayjs(Date.now()))

    return (
        <div className="flex gap-5 p-10 flex-col w-full lg:flex-row">
            {!isLgView ? (
                <Collapse
                    size="large"
                    className="w-full"
                    items={[
                        {
                            key: '1',
                            label: dayjs(selectedValue).format('DD MMMM YYYY'),
                            children: (
                                <div className="w-full max-w-4xl p-5 bg-white rounded-lg">
                                    <CalendarIndex selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                                </div>
                            ),
                        },
                    ]}
                />
            ) : (
                <div className="w-full max-w-4xl p-5 bg-white rounded-lg">
                    <CalendarIndex selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                </div>
            )}
            <div className="w-full max-w-md">
                <Alert message={`Tasks on ${dayjs(selectedValue).format('DD MMMM YYYY')}`} />
            </div>
        </div>
    )
}
