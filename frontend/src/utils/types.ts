export type ITask = (typeof tasks)[0]
export type IUser = (typeof users)[0]

export type IMessage = {
    id: number
    content: string
    created_at: string
    created_by: IUser
}
