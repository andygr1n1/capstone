import { MenuOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import React, { useState } from 'react'
import { LogOutButton } from './LogOutButton'
import { useCurrentLocation } from '../hooks/useCurrentLocation'

export const MobileMenu = () => {
    const { selectedLocation } = useCurrentLocation()
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(val => !val)
    }

    return (
        <div className="flex lg:hidden">
            <MenuOutlined className="text-2xl cursor-pointer" onClick={toggleDrawer} />
            <Drawer title="Crystal Mind" placement="bottom" width={500} onClose={toggleDrawer} open={open}>
                <ul className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <>
                            {' '}
                            <li>
                                <Button className="w-full" size="large" type={selectedLocation('')} href="/">
                                    Dashboard
                                </Button>
                            </li>
                            <li>
                                <Button className="w-full" size="large" type={selectedLocation('tasks')} href="/tasks">
                                    Tasks
                                </Button>
                            </li>
                            <li>
                                <Button className="w-full" size="large" type={selectedLocation('events')} href="/events">
                                    Events
                                </Button>
                            </li>
                            <li>
                                <Button className="w-full" size="large" type={selectedLocation('notes')} href="/notes">
                                    Notes
                                </Button>
                            </li>
                            <li>
                                <LogOutButton />
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Button className="w-full" size="large" type="dashed" href="/register">
                                    Join now
                                </Button>
                            </li>
                            <li>
                                <Button className="w-full" size="large" type="dashed" href="/login">
                                    Login
                                </Button>
                            </li>
                        </>
                    )}
                </ul>
            </Drawer>
        </div>
    )
}
