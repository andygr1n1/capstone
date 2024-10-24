declare module '*.png' {
    const value: string
    export default value
}

declare let isAuthenticated: boolean
declare let appCsrftoken: string

declare let appUser: {
    id: number
    username: string
    email: string
}

declare let tasks: {
    id: number
    title: string
    description: string
    location: string
    deadline: string
    created_at: string
    is_author: boolean
    finished_at: string | null
}[]

declare let tasks_num_pages: number
declare let tasks_current_page: number

declare const users: {
    id: number
    username: string
}[]
