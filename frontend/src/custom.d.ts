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
