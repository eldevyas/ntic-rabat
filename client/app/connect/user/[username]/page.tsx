"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { Avatar, Box, Typography, Grid } from "@mui/material";
import { BackButton, IconButton } from "@/app/core/Button";
import { Icon } from "@iconify/react"
import { useTheme } from '@mui/material/styles';
import UserInfos from "./components/UserInfos";
import PostGrid from "../../flux/core/components/2. Posts";
import axios from "axios";
import Post from "../../flux/core/components/3. Post";

const Username = () => {
    const theme = useTheme();
    const twitterColor = theme.palette.mode == "light" ? "#00acee" : theme.palette.grey[300];
    const portfolioColor = theme.palette.mode == "light" ? "aliceblue" : theme.palette.grey[300];

    const [user, setUser]: any = React.useState([]);
    const { username }: any = useParams();
    const [posts, setPosts]: any = React.useState([]);
    const [postsLimit, setPostsLimit] = React.useState(4);
    const [refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(
                `${process.env.SERVER_PUBLIC_API_URL}/user/${username}`
            );
            const data = await response.json();
            setUser(data);
            console.log(data);
        };

        fetchUser();
        const getUserPosts = (limit: any) => {
            setRefresh(true);
            axios.get(`${process.env.SERVER_PUBLIC_API_URL}/user/${username}/posts/${postsLimit}`)
                .then((response) => {
                    setPosts(response.data);
                    console.log("This shit got me insane", response.data);
                    setRefresh(false)
                }
                )
                .catch((error) => {
                    console.log(error);
                    setRefresh(false)
                }
                );
        };
        getUserPosts(postsLimit);
    }, [postsLimit]);

    return (
        <Box
            sx={{
                width: "80%",
                margin: '1rem auto',
                borderRadius: '1rem',
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                padding: "2rem",
                gap: "3rem",
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
            }}
        >
            <Box className="userHeader">
                <BackButton />
            </Box>
            {
                user &&
                <UserInfos user={user} />
            }
            <Box className="UserAbout"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "flex-start",
                    gap: "1.5rem",

                }}
            >
                <Typography variant="h5"
                    sx={{
                        width: "max-content",
                        whiteSpace: "nowrap",
                    }}
                >A propos :</Typography>
                <Box className="About"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "flex-start",
                        gap: "1rem",
                        width: "100%",
                    }}
                >
                    <Typography variant="body1"
                        sx={{
                            width: "100%",
                            whiteSpace: "pre-wrap",

                        }}
                        color="text.secondary"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum odio delectus eius iusto expedita debitis nemo ea iste ipsa pariatur consequatur alias, rem doloremque, cupiditate impedit? Ipsam similique laudantium obcaecati.
                    </Typography>
                </Box>

            </Box>
            <Box className="UserPosts"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "flex-start",
                    gap: "2rem",
                    width: "100%",
                }}
            >
                <Typography variant="h5"
                    sx={{
                        width: "max-content",
                        whiteSpace: "nowrap",
                    }}
                >Posts :</Typography>
                <Box className="Posts"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "flex-start",
                        gap: "2rem",
                        backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
                    }}
                >
                    {
                        posts &&
                        posts.length > 0 &&
                        <PostGrid Posts={posts} Refresh={refresh} Limit={postsLimit} setLimit={() => {
                            setPostsLimit(postsLimit + 3)
                        }
                        } />
                    }
                </Box>
            </Box>
        </Box >
    );
};


export default Username;
