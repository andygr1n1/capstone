import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Topbar } from '../components/Topbar'

import '../styles/index.scss'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        // Clear the interval when the component unmounts
        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <h1>Current Time:</h1>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}

const root = document.getElementById('root')
if (root) {
    const rootElement = createRoot(root)
    rootElement.render(<Clock />)
}
const topbarRoot = document.getElementById('topbar')
if (topbarRoot) {
    const topbarRootElement = createRoot(topbarRoot)
    topbarRootElement.render(<Topbar />)
    // console.log('topbarRoot', topbarRoot)
}
