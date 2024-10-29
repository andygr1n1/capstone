import React, { useState } from 'react'
import { Modal } from 'antd'
import { SelectedTaskView } from './SelectedTaskView'
import { SelectedTaskEditor } from './SelectedTaskEditor'
import { useRoot$ } from '../../../../mst/StoreProvider'
import { observer } from 'mobx-react-lite'

export const SelectedTaskDialog: React.FC<{ readonly?: boolean }> = observer(({ readonly = false }) => {
    const [editMode, setEditMode] = useState(false)

    const { selected_task, onChangeField } = useRoot$()

    return (
        <Modal
            destroyOnClose
            open={!!selected_task}
            title={selected_task?.title}
            onCancel={() => {
                setEditMode(false)
                onChangeField('selected_task', undefined)
            }}
            footer={null}
        >
            {!editMode ? (
                <SelectedTaskView toggleEditMode={() => setEditMode(!editMode)} readonly={readonly} />
            ) : (
                <SelectedTaskEditor toggleEditMode={() => setEditMode(prev => !prev)} />
            )}
        </Modal>
    )
})
