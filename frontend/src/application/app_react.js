import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom'

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
const rootElement = createRoot(root)
rootElement.render(<Clock />)