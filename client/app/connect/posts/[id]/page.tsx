'use client';
import React, { useEffect } from 'react'
import { useParams } from "next/navigation";
import axios from 'axios';
import { Box, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import PostHeader from './imports/PostHeader';
import BlogPostHero from './imports/PostHero';

const Page = () => {
    const { id }: any = useParams();
    const [post, setPost]: any = React.useState({});

    useEffect(() => {
        axios.get(`${process.env.SERVER_PUBLIC_API_URL}/posts/${id}`)
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            }
            )

    }, [])

    return (
        <Box sx={{
            display: "flex", flexDirection: "column",
            justifyContent: "center",
            padding: "0.6rem 1rem",
            width: "80%",
            margin: "1rem auto",
            borderRadius: "1rem",
            backgroundColor: (theme: any) => theme.palette.mode === "light" ? theme.palette.background.default : theme.palette.background.paper,
            height: "100%",
        }}>
            <PostHeader />
            <BlogPostHero post={post} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "1rem",
                }}
            >
                <Typography
                    variant="h5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >

                </Typography>
            </Box>
        </Box>
    )
}

export default Page