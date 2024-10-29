import { types } from 'mobx-state-tree'
import { User } from './User.model'

export const Message = types.model('Message', {
    id: types.identifierNumber,
    content: types.string,
    created_at: types.string,
    created_by: User,
})
