import React from 'react'
import { Modal, Typography, Divider, Tag, Button } from 'antd'
import { cn } from '../../../utils/cn'
import dayjs from 'dayjs'
import { TaskMessenger } from './task-messenger/TaskMessenger'
import { useRoot$ } from '../../../../mst/StoreProvider'
import { cloneDeep } from 'lodash-es'

const { Text } = Typography

export const SelectedTaskView: React.FC<{
    toggleEditMode: () => void
    readonly?: boolean
}> = ({ toggleEditMode, readonly = false }) => {
    const { selected_task, onChangeField, deleteTask } = useRoot$()

    console.log(cloneDeep(selected_task))

    if (!selected_task) return null

    return (
        <>
            <p>{selected_task?.description}</p>
            <Divider />
            {/* location */}
            {selected_task?.location && (
                <div>
                    <Text strong>Location: </Text>
                    <div className="my-2">
                        <Tag color="red">{selected_task?.location}</Tag>
                    </div>
                </div>
            )}
            <Divider style={{ margin: '4px 0' }} />
            {/* related users */}
            {!!selected_task?.users?.length && (
                <>
                    <div>
                        <Text strong>Related Users: </Text>
                        <div className="flex flex-wrap gap-2 my-2">
                            {selected_task.users.map(user => (
                                <Tag color={selected_task.author?.id === user.id ? 'gold' : 'blue'} key={user.id}>
                                    {user.username}
                                </Tag>
                            ))}
                            {!selected_task.authorInUsers && <Tag color="gold">{selected_task.author?.username}</Tag>}
                        </div>
                    </div>
                    <Divider style={{ margin: '4px 0' }} />
                </>
            )}

            <div>
                <Text className="text-xs">Created at </Text>
                <Text className="text-xs">{dayjs(selected_task.created_at).format('DD MMM YYYY HH:mm')}</Text>
            </div>
            <div>
                <Text className="text-xs">Deadline at </Text>
                <Text className="text-xs">{dayjs(selected_task.deadline).format('DD MMM YYYY HH:mm')}</Text>
            </div>

            {selected_task.finished_at && (
                <div>
                    <Text className="text-xs">Finished at </Text>
                    <Text className="text-xs">{dayjs(selected_task.finished_at).format('DD MMM YYYY HH:mm')}</Text>
                </div>
            )}
            {selected_task && <TaskMessenger />}
            <div className={cn('flex gap-2 mt-5', selected_task.is_author ? ' justify-between' : 'justify-end')}>
                {selected_task.is_author && !readonly && (
                    <Button
                        type="primary"
                        color="danger"
                        variant="dashed"
                        onClick={() => {
                            Modal.confirm({
                                onOk: deleteTask,
                                title: 'Confirm',
                                content: 'Are you sure you want to delete this task?',
                                footer: (_, { OkBtn, CancelBtn }) => (
                                    <>
                                        <CancelBtn />
                                        <OkBtn />
                                    </>
                                ),
                            })
                        }}
                    >
                        Delete
                    </Button>
                )}
                <div className="flex gap-2 w-full justify-end">
                    {selected_task.is_author && !readonly && <Button onClick={toggleEditMode}>Edit</Button>}
                    <Button onClick={() => onChangeField('selected_task', undefined)}>Close</Button>
                </div>
            </div>
        </>
    )
}
