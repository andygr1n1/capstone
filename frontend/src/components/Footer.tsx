import React from 'react'
import { Clock } from './Clock'

export const Footer = () => {
    return (
        <div className="flex justify-between w-full h-full items-center">
            <Clock />

            <div className="text-sm w-fit h-full text-gray-500">created by andygr1n1 for Harvard university</div>
        </div>
    )
}
