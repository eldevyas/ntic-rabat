import { BackButton } from '@/app/core/Button'
import { Box, Button } from '@mui/material'
import React from 'react'

const PostHeader = () => {
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
            <BackButton />

        </Box>
    )
}

export default PostHeader