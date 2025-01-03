import { types } from 'mobx-state-tree'
import { User } from './User.model'
import { Message } from './Message.model'

export const Task = types
    .model('Task', {
        id: types.identifierNumber,
        title: types.string,
        description: types.maybeNull(types.string),
        location: types.maybeNull(types.string),
        deadline: types.maybeNull(types.string),
        created_at: types.string,
        is_author: types.boolean,
        author: types.maybeNull(User),
        finished_at: types.maybeNull(types.string),
        users: types.array(User),
        messages: types.array(Message),
    })
    .views(self => ({
        get authorInUsers() {
            return self.author && self.users.map(user => user.id).includes(self.author.id)
        },
    }))
