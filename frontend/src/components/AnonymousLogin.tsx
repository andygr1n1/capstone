import React from 'react'
import crystalMindImage from '../assets/images/CM-IMG.png'

export const AnonymousLogin = () => {
    return (
        <div className="absolute-center">
            <img
                src={crystalMindImage}
                height={200}
                width={200}
                alt="Crystal Mind Logo"
                className="animate-bounce-slow select-none pointer-events-none"
            />
        </div>
    )
}
