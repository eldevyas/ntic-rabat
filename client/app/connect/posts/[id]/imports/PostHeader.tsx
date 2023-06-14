import { BackButton } from '@/app/core/Button'
import { Box, Button } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation'

const PostHeader = () => {
    const Router = useRouter()
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                justifyContent: "space-between",
            }}
        >
            <BackButton
                onClick={() => {
                    Router.push("/connect/")
                }}
            />

        </Box>
    )
}

export default PostHeader