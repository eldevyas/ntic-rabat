
import React from 'react'
import { Box, Typography } from '@mui/material'
import Heading from './imports/Heading'
import NewPostForm from './imports/NewPostForm'

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
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                }}
                >
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            color: (theme) => theme.palette.mode == "light"
                                ? theme.palette.primary.main
                                : theme.palette.primary.light,
                            lineHeight: "1.334",
                            width: "100%",
                        }}
                    >Details</Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        color="text.primary"
                        sx={{
                            fontWeight: "normal",
                            fontSize: "1rem",

                            lineHeight: "1.5",
                            width: "100%",
                            // don't break line 
                            whiteSpace: "nowrap",

                        }}

                    >Title, short description, image...</Typography>
                </Box>
                <NewPostForm />
            </Box>

        </Box >
    )
}

export default CreatePost