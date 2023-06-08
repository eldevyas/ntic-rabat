'use client';
import React, { useEffect } from 'react'
import { useParams } from "next/navigation";
import axios from 'axios';
import { Box, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import BlogPostHero from './PostHero';

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
        // <Box
        //     sx={{
        //         display: "flex", flexDirection: "column",
        //         justifyContent: "center",
        //         padding: "1rem",
        //         // backgroundColor: (theme) => theme.palette.background.default,
        //         // color: (theme) => theme.palette.text.primary,
        //         width: "100%",
        //         height: "100%",

        //     }}
        // >
        //     <Box
        //         sx={{
        //             width: "100%",
        //             height: "60vh",
        //             borderRadius: "1rem",
        //             overflow: "hidden",

        //             position: "relative",
        //         }}
        //     >
        //         <CardMedia src={post.cover} component="img"
        //             style={{
        //                 height: "100%",
        //                 width: "100%",
        //                 zIndex: "-1",
        //                 display: "block",
        //                 //  make it gradient
        //                 maskImage: "linear-gradient(to bottom, rgba(100,149,237,0) 20%,rgba(100,149,237,20) 100%)",
        //                 // -webkit-mask-image: "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)"",
        //                 WebkitMaskImage: "linear-gradient(to bottom, rgba(100,149,237,0) 20%,rgba(100,149,237,20) 100%)",

        //             }}
        //             alt={post.title} />
        //         <Typography
        //             variant="h3"

        //             sx={{
        //                 position: "absolute",
        //                 top: "1rem",
        //                 left: "1rem",
        //                 maxWidth: "80%",
        //                 color: (theme: any) => theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
        //                 borderBottom: (theme: any) => theme.palette.mode === "light" ? `2px solid ${theme.palette.text.primary}` : `2px solid ${theme.palette.text.secondary}`,
        //             }}
        //         >
        //             {post.title}
        //         </Typography>
        //     </Box>
        //     <Box
        //         sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: "1rem",
        //             padding: "1rem",
        //         }}
        //     >
        //         <Typography
        //             variant="h5"
        //             sx={{
        //                 color: (theme: any) => theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
        //             }}
        //         >
        //             {post.description}
        //         </Typography>
        //     </Box>
        //     {/* <Hr /> */}
        //     <Box
        //         sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             gap: "1rem",
        //             padding: "1rem",
        //         }}
        //     >
        //         <Typography
        //             variant="h5"
        //             sx={{
        //                 color: (theme: any) => theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
        //             }}
        //             dangerouslySetInnerHTML={{ __html: post.content }}
        //         >
        //         </Typography>
        //     </Box>
        // </Box >
        <Box sx={{
            display: "flex", flexDirection: "column",
            justifyContent: "center",
            padding: "1rem",
            // backgroundColor: (theme) => theme.palette.background.default,
            // color: (theme) => theme.palette.text.primary,
            width: "80%",
            margin: "1rem auto",
            borderRadius: "1rem",
            backgroundColor: (theme: any) => theme.palette.mode === "light" ? theme.palette.background.default : theme.palette.background.paper,
            height: "100%",
        }}>
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
                ></Typography>

            </Box>
        </Box>
    )
}

export default Page