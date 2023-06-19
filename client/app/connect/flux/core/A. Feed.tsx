"use client";

import React, { useEffect } from "react";
import EmptyFluxPage from "@/app/pages/A. Empty State/FluxPage";
import { Box, TextField, Typography } from "@mui/material";
import Heading from "./components/1. Heading";
import PostGrid from "./components/2. Posts";
import axios from "axios";
export default function Feed() {
    const [posts, setPosts]: any = React.useState([]);
    const [postsLimit, setPostsLimit] = React.useState(7);
    const [isRefresh, setRefresh] = React.useState(false);
    // use Effect that awaits the posts from the server
    useEffect(() => {
        setRefresh(true);
        axios
            .get(`${process.env.SERVER_PUBLIC_API_URL}/posts/${postsLimit}}`)
            .then((response) => {
                setPosts(response.data);
                setRefresh(false);

            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setRefresh(false)
            });
        setRefresh(false)

    }, [postsLimit]);


    const PostsData = [
        posts.map((post: any) => {
            return {

                Id: post.id || "1",
                user: {
                    Name: post.user.name || "John Doe",
                    Avatar: "https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
                },
                Title: post.title || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Don",
                Banner: post.cover || "https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80",
                Date: post.date || "Aujourd'hui",
                Likes: post.likes.length,
                Comments: post.comments.length,
                // Content: post.content,
            };
        }),
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
            {posts.length > 0 ? (
                <>
                    <PostGrid Posts={posts} Limit={postsLimit} setLimit={
                        () => setPostsLimit(postsLimit + 6)

                    }
                        Refresh={isRefresh}
                    />
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
