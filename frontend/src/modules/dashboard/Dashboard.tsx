import React from 'react'
import { observer } from 'mobx-react-lite'
import { useWindowWidth } from '../../hooks/useContainerWidth'
import { Collapse } from 'antd'
import dayjs from 'dayjs'
import { useRoot$ } from '../../../mst/StoreProvider'
import { CalendarIndex } from './CalendarIndex'
import { cn } from '../../utils/cn'
import { CurrentTasksAlert } from './CurrentTasksAlert'
import { SelectedTaskDialog } from '../tasks/components/SelectedTaskDialog'

export const Dashboard = observer(() => {
    const { isLgView } = useWindowWidth()
    const { selected_date } = useRoot$()

    return (
        <div className="flex gap-5 p-10 flex-col w-full lg:flex-row">
            {!isLgView ? (
                <Collapse
                    size="large"
                    className="w-full"
                    items={[
                        {
                            key: '1',
                            label: dayjs(selected_date).format('DD MMMM YYYY'),
                            children: (
                                <div className="w-full max-w-4xl p-5 bg-white rounded-lg">
                                    <CalendarIndex />
                                </div>
                            ),
                        },
                    ]}
                />
            ) : (
                <CalendarIndex />
            )}
            <div className={cn('w-full', isLgView && 'max-w-md max-h-[830px] overflow-x-hidden overflow-y-auto')}>
                <CurrentTasksAlert />
            </div>
            <SelectedTaskDialog readonly />
        </div>
    )
})
