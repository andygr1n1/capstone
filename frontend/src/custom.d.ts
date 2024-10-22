declare module '*.png' {
    const value: string
    export default value
}

declare const isAuthenticated: boolean
declare const appCsrftoken: string

declare const appUser: {
    username: string
    email: string
}

declare const tasks: {
    id: number
    title: string
    description: string
    location: string
    deadline: string
    created_at: string
    is_author: boolean
    finished_at: string | null
}[]

declare const users: {
    id: number
    username: string
}[]
