import React from 'react'
import { ITask } from '../../../utils/types'
import { Modal, Typography, Divider, Tag, Button } from 'antd'
import { deleteTask } from '../../../utils/api/deleteTask'
import { cn } from '../../../utils/cn'
import dayjs from 'dayjs'
import { TaskMessenger } from './task-messenger/TaskMessenger'

const { Text } = Typography

export const SelectedTaskView: React.FC<{
    selectedTask: ITask
    onClose: () => void
    toggleEditMode: () => void
    fetchTask: (taskId: number) => void
}> = ({ selectedTask, onClose, toggleEditMode, fetchTask }) => {
    return (
        <>
            <p>{selectedTask.description}</p>
            <Divider />
            {/* location */}
            {selectedTask.location && (
                <div>
                    <Text strong>Location: </Text>
                    <div className="my-2">
                        <Tag color="red">{selectedTask.location}</Tag>
                    </div>
                </div>
            )}
            <Divider style={{ margin: '4px 0' }} />
            {/* related users */}
            {!!selectedTask.users?.length && (
                <>
                    <div>
                        <Text strong>Related Users: </Text>
                        <div className="flex flex-wrap gap-2 my-2">
                            {selectedTask.users.map(user => (
                                <Tag color="blue" key={user.id}>
                                    {user.username}
                                </Tag>
                            ))}
                        </div>
                    </div>
                    <Divider style={{ margin: '4px 0' }} />
                </>
            )}

            <div>
                <Text className="text-xs">Created at </Text>
                <Text className="text-xs">{dayjs(selectedTask.created_at).format('DD MMM YYYY HH:mm')}</Text>
            </div>
            <div>
                <Text className="text-xs">Deadline at </Text>
                <Text className="text-xs">{dayjs(selectedTask.deadline).format('DD MMM YYYY HH:mm')}</Text>
            </div>

            {selectedTask.finished_at && (
                <div>
                    <Text className="text-xs">Finished at </Text>
                    <Text className="text-xs">{dayjs(selectedTask.finished_at).format('DD MMM YYYY HH:mm')}</Text>
                </div>
            )}
            <TaskMessenger task={selectedTask} fetchTask={fetchTask} />
            <div className={cn('flex gap-2 mt-5', selectedTask.is_author ? ' justify-between' : 'justify-end')}>
                {selectedTask.is_author && (
                    <Button
                        type="primary"
                        color="danger"
                        variant="dashed"
                        onClick={() => {
                            Modal.confirm({
                                onOk: async () => {
                                    await deleteTask(selectedTask.id)
                                    onClose()
                                },
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
                <div className="flex gap-2">
                    {selectedTask.is_author && <Button onClick={toggleEditMode}>Edit</Button>}
                    <Button onClick={() => onClose()}>Close</Button>
                </div>
            </div>
        </>
    )
}
