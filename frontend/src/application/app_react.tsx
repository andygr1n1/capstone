import React from 'react'
import { createRoot } from 'react-dom/client'
import { Topbar } from '../components/Topbar'

import '../styles/index.scss'
import { Footer } from '../components/Footer'
import { AnonymousLogin } from '../components/AnonymousLogin'
import { Register } from '../components/Register'
import { DashboardIndex } from '../modules/dashboard/DashboardIndex'
import { Login } from '../components/Login'
import { BrowserRouter } from 'react-router-dom'
import { TasksIndex } from '../modules/tasks/TasksIndex'

const root = document.getElementById('root')
if (root) {
    const rootElement = createRoot(root)
    rootElement.render(null)
}
const topbarRoot = document.getElementById('topbar')
if (topbarRoot) {
    const topbarRootElement = createRoot(topbarRoot)
    topbarRootElement.render(
        <BrowserRouter>
            <Topbar />
        </BrowserRouter>
    )
}

const footerRoot = document.getElementById('footer')
if (footerRoot) {
    const footerRootElement = createRoot(footerRoot)
    footerRootElement.render(<Footer />)
}

const anonymousLoginRoot = document.getElementById('anonymous-login')
if (anonymousLoginRoot) {
    const anonymousLoginRootElement = createRoot(anonymousLoginRoot)
    anonymousLoginRootElement.render(<AnonymousLogin />)
}

const authenticatedLoginRoot = document.getElementById('authenticated-login')

export const dashboardRootElement = authenticatedLoginRoot ? createRoot(authenticatedLoginRoot) : null

export const renderDashboardRoot = () => {
    dashboardRootElement?.render(<DashboardIndex />)
}

renderDashboardRoot()

const registerRoot = document.getElementById('register')
if (registerRoot) {
    const registerRootElement = createRoot(registerRoot)
    registerRootElement.render(<Register />)
}

const loginRoot = document.getElementById('login')
if (loginRoot) {
    const loginRootElement = createRoot(loginRoot)
    loginRootElement.render(<Login />)
}

/*  */
const tasksRoot = document.getElementById('tasks')
export const tasksRootElement = tasksRoot ? createRoot(tasksRoot) : null

export const renderTasksRoot = () => {
    tasksRootElement?.render(<TasksIndex />)
}

renderTasksRoot()
