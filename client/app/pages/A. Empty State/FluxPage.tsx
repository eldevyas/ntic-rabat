"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
import Flux from "@/app/connect/flux/Flux";
import Feed from "@/app/connect/flux/core/A. Feed";
export default function EmptyFluxPage() {
    const Router = useRouter();
    const [posts, setPosts] = React.useState<any[]>([]);
    // useEffect(() => {
    //     var API = process.env.SERVER_PUBLIC_API_URL;
    //     const fetchPosts = async () => {
    //         const res = await fetch(`${API}/posts}`);
    //         const posts = await res.json();
    //         setPosts(posts);
    //         console.log(posts);
    //     };
    //     fetchPosts();
    // }, []);
    return (
        <Box
            sx={{
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
                backgroundColor: "black",
            }}
        >

        </Box>
        // </Box>
    );
}
