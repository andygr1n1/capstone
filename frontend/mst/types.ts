import type { Instance, SnapshotOut } from 'mobx-state-tree'
import type { Root$ } from './stores/Root.store'
import { Task } from './models/Task.model'
import { Message } from './models/Message.model'

export interface IRoot$ extends Instance<typeof Root$> {}

export interface ITask extends Instance<typeof Task> {}
export interface ITaskSnOut extends SnapshotOut<typeof Task> { }

export interface IMessage extends Instance<typeof Message> {}
