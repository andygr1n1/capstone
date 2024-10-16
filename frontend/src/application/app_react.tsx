import React from 'react'
import { createRoot } from 'react-dom/client'
import { Topbar } from '../components/Topbar'

import '../styles/index.scss'
import { Footer } from '../components/Footer'
import { AnonymousLogin } from '../components/AnonymousLogin'

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
