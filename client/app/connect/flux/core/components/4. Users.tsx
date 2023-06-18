import React from 'react'
import User from './5. User'
import Link from 'next/link'
import { Box } from '@mui/material'

const Users = (props: any) => {

    return (
        <Box
            className="Avatars"
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                overflowX: "hidden",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor:
                    "var(--mui-palette-common-background) var(--mui-palette-primary-dark)",
                "&::-webkit-scrollbar": {
                    width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor:
                        "var(--mui-palette-common-background)",
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor:
                        "var(--mui-palette-primary-dark)",
                    borderRadius: "4px",
                },
            }}
        >
            {
                // if the users array is not empty
                props.users.map((user: any) => (
                    <Link href={`/connect/user/${user.username}`}>
                        <User user={user} />
                    </Link>
                ))}
        </Box>
    )
}

export default Users