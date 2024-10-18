import React from 'react'
import { Button } from 'antd'

export const LogOutButton = () => {
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
        <Button shape="round" type="dashed" onClick={onClick}>
            Log out
        </Button>
    )
}
