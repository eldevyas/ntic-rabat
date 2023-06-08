
import React from 'react'
import { Box, Typography } from '@mui/material'
import Heading from '../imports/Heading'
import NewPostForm from '../imports/NewPostForm'
import { BackButton } from '@/app/core/Button'

const CreatePost = () => {
    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            maxWidth: "700",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "2rem 1rem",
            borderRadius: "0.75rem",

        }}>
            <Heading />

            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "start",
                gap: "1rem",
                marginTop: "3rem",

            }}
            >
                <BackButton />
                <NewPostForm />
            </Box>

        </Box >
    )
}

export default CreatePost