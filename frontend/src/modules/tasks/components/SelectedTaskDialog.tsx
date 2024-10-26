import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'antd'
import { TaskContext } from '../Tasks'
import { ITask } from '../../../utils/types'
import { fetchTaskById } from '../../../utils/api/fetchTaskById'
import { SelectedTaskView } from './SelectedTaskView'
import { SelectedTaskEditor } from './SelectedTaskEditor'

export const SelectedTaskDialog = () => {
    const { setTaskId, taskId } = useContext(TaskContext)
    const [isLoading, setIsLoading] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [selectedTask, setSelectedTask] = useState<ITask | null>(null)

    const fetchTask = async (taskId: number) => {
        await fetchTaskById(taskId).then(data => {
            setSelectedTask(data)
        })
    }

    useEffect(() => {
        if (taskId) {
            fetchTask(taskId)
        }
    }, [taskId])

    if (!selectedTask) return null

    return (
        <Modal
            loading={isLoading}
            destroyOnClose
            open={!!taskId}
            title={selectedTask?.title}
            onCancel={() => {
                setEditMode(false)
                setTaskId(null)
            }}
            footer={null}
        >
            {!editMode ? (
                <SelectedTaskView
                    selectedTask={selectedTask}
                    onClose={() => setTaskId(null)}
                    toggleEditMode={() => setEditMode(!editMode)}
                />
            ) : (
                <SelectedTaskEditor
                    toggleIsLoading={() => setIsLoading(prev => !prev)}
                    selectedTask={selectedTask}
                    toggleEditMode={() => setEditMode(prev => !prev)}
                    setSelectedTask={(task: ITask) => {
                        console.log('task>>>', task)
                        console.log('selectedTask>>>', selectedTask)
                        setSelectedTask(task)
                    }}
                />
            )}
        </Modal>
    )
}
