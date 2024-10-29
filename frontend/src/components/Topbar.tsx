import React from 'react'
import { Button } from 'antd'
import { LogOutButton } from './LogOutButton'
import { MobileMenu } from './MobileMenu'
import { useCurrentLocation } from '../hooks/useCurrentLocation'

export const Topbar = () => {
    const { selectedLocation } = useCurrentLocation()

    return (
        <div>
            <div className="flex justify-between md:flex-row gap-10 md:gap-0 p-5">
                <a href="/" className="min-w-fit">
                    <div className="text-4xl lg:text-6xl px-2 font-kaushan text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Crystal Mind
                    </div>
                </a>
                <div className="gap-2 w-full justify-between items-center hidden lg:flex">
                    {!isAuthenticated ? (
                        <div className="flex w-full justify-end gap-4 items-center px-5">
                            <Button shape="round" type="dashed" href="/register">
                                Join now
                            </Button>
                            <Button shape="round" type="dashed" href="/login">
                                Login
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex gap-4 items-center px-5">
                                <Button shape="round" type={selectedLocation('')} href="/">
                                    Dashboard
                                </Button>
                                <Button shape="round" type={selectedLocation('tasks')} href="/tasks">
                                    Tasks
                                </Button>
                                <div className="text-sm text-gray-500">connected as {appUser?.username}</div>
                            </div>
                            <LogOutButton />
                        </>
                    )}
                </div>
                <MobileMenu />
            </div>
        </div>
    )
}
