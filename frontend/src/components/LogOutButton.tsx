import React from 'react'
import { Button } from 'antd'
import { getCsrftoken } from '../utils/getCookie'

export const LogOutButton = () => {
    const onClick = () => {
        fetch('/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrftoken(),
            },
        }).then(response => {
            if (response.ok) {
                window.location.href = '/'
            }
        })
    }

    return (
        <Button shape="round" type="dashed" onClick={onClick}>
            Log out
        </Button>
    )
}
