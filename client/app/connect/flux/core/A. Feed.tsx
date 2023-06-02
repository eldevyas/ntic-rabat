"use client";

import React from "react";
import EmptyFluxPage from "@/app/pages/A. Empty State/FluxPage";
import { Box, TextField, Typography } from "@mui/material";
import Heading from "./components/1. Heading";
import PostGrid from "./components/2. Posts";
export default function Feed() {
    const PostsData = [
        {
            Id: "A1",
            Banner: "https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
            Author: {
                Name: "Yassine C.",
                Avatar: "https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
            },
            Date: "02 June 2023",
            Title: "This is a post to be posted.",
            Likes: 322,
            Comments: 56,
        },
        {
            Id: "A2",
            Banner: "https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
            Author: {
                Name: "Yassine C.",
                Avatar: "https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
            },
            Date: "02 June 2023",
            Title: "This is another post to be posted.",
            Likes: 322,
            Comments: 56,
        },
    ];

    return (
        <Box
            className="Feed"
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                flexGrow: 2,
                padding: "1rem",
            }}
        >
            <Heading />
            {PostsData.length > 0 ? (
                <>
                    <PostGrid Posts={PostsData} />
                    <EmptyFluxPage />
                </>
            ) : (
                <Box
                    className="Posts"
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "0.75rem",
                        backgroundColor: (theme) =>
                            theme.palette.background.default,
                    }}
                >
                    <EmptyFluxPage />
                </Box>
            )}
        </Box>
    );
}
