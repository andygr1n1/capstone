import React from 'react'
import { Button } from 'antd'
import { useWindowWidth } from '../hooks/useContainerWidth'

export const LogOutButton = () => {
    const { isLgView } = useWindowWidth()

    const onClick = () => {
        fetch('/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': appCsrftoken,
            },
        }).then(response => {
            if (response.ok) {
                window.location.href = '/'
            }
        })
    }

    return (
        <Button
            className={'w-full lg:w-auto'}
            size={isLgView ? 'middle' : 'large'}
            shape={isLgView ? 'round' : undefined}
            color="danger"
            variant="dashed"
            onClick={onClick}
        >
            Log out
        </Button>
    )
}
