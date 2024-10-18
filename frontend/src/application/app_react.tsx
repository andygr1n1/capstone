import React from 'react'
import { createRoot } from 'react-dom/client'
import { Topbar } from '../components/Topbar'

import '../styles/index.scss'
import { Footer } from '../components/Footer'
import { AnonymousLogin } from '../components/AnonymousLogin'
import { Register } from '../components/Register'
import { AuthenticatedLogin } from '../components/AuthenticatedLogin'
import { Login } from '../components/Login'

const root = document.getElementById('root')
if (root) {
    const rootElement = createRoot(root)
    rootElement.render(null)
}
const topbarRoot = document.getElementById('topbar')
if (topbarRoot) {
    const topbarRootElement = createRoot(topbarRoot)
    topbarRootElement.render(<Topbar />)
    // console.log('topbarRoot', topbarRoot)
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
if (authenticatedLoginRoot) {
    const authenticatedLoginRootElement = createRoot(authenticatedLoginRoot)
    authenticatedLoginRootElement.render(<AuthenticatedLogin />)
}

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
