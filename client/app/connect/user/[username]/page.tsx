"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { BackButton, IconButton } from "@/app/core/Button";
import { Icon } from "@iconify/react";
import { useTheme } from "@mui/material";

const Username = () => {
    const theme = useTheme();
    const twitterColor = theme.palette.mode == "light" ? "#00acee" : theme.palette.grey[300];
    const portfolioColor = theme.palette.mode == "light" ? "aliceblue" : theme.palette.grey[300];

    const [user, setUser]: any = React.useState([]);
    const { username }: any = useParams();

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
    }, []);
    return (
        <Box
            sx={{
                width: "100%",
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "2rem",
                }}
            >
                <Avatar src={`/assets/avatars/${user.avatar}`}
                    sx={{
                        width: "8rem",
                        height: "8rem",
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        gap: "0.5rem",
                    }}
                >
                    <Typography variant="h5">{user.name}</Typography>
                    <Typography variant="body2"
                        sx={{
                            color: (theme) =>
                                theme.palette.mode == "light" ? "#101010" : "#F5F5F5",
                        }}
                    >{user.email}</Typography>
                    {
                        user.socials &&
                        <Box className="socials"
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: "0.5rem",
                                padding: "0.5rem 0",
                            }}
                        >
                            {
                                user.socials[0].linkedin &&
                                <IconButton
                                    onClick={() => window.open(user.socials[0].linkedin, "_blank")}
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: (theme: any) =>
                                            theme.palette.mode == "light" ? "#F5F5F5" : theme.palette.grey[300],
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "0.5rem",
                                        padding: "0.5rem 0.8rem",
                                        backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : "#0072b1",
                                        '&:hover': {
                                            backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[700] : "#0072b3",
                                        },


                                    }}
                                >
                                    <Icon icon="akar-icons:linkedin-fill" />
                                    <Typography variant="body2">Linkedin</Typography>
                                </IconButton>
                            }
                            {
                                user.socials[0].portfolio &&
                                <IconButton
                                    onClick={() => window.open(user.socials[0].portfolio, "_blank")}
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: (theme: any) =>
                                            theme.palette.mode == "light" ? "aliceblue" : theme.palette.grey[300],
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "0.5rem",
                                        padding: "0.5rem 0.8rem",

                                        backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.secondary.main,
                                        '&:hover': {
                                            backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[700] : "#3ea94d",
                                        },

                                    }}
                                >
                                    <Icon icon="zondicons:portfolio" color={portfolioColor}
                                    />
                                    <Typography variant="body2"
                                        color={(theme: any) => theme.palette.mode == "light" ? "aliceblue" : theme.palette.grey[300]}
                                    >Portfolio</Typography>
                                </IconButton>
                            }
                            {
                                user.socials[0].github &&

                                <IconButton
                                    onClick={() => window.open(user.socials[0].github, "_blank")}
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: (theme: any) =>
                                            theme.palette.mode == "light" ? theme.palette.grey[800] : theme.palette.grey[300],
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "0.5rem",
                                        padding: "0.5rem 0.8rem",

                                        backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[200],
                                        '&:hover': {
                                            backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
                                        },

                                    }}
                                >
                                    <Icon icon="akar-icons:github-fill" />
                                    <Typography variant="body2">Github</Typography>
                                </IconButton>
                            }
                            {
                                user.socials[0].twitter &&
                                <IconButton
                                    onClick={() => window.open(user.socials[0].twitter, "_blank")}
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: (theme: any) =>
                                            theme.palette.mode == "light" ? theme.palette.grey[800] : theme.palette.grey[300],
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: "0.5rem",
                                        padding: "0.5rem 0.8rem",

                                        backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[100],
                                        '&:hover': {
                                            backgroundColor: (theme: any) => theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
                                        },

                                    }}
                                >
                                    <Icon icon="akar-icons:twitter-fill" color={twitterColor}
                                    />
                                    <Typography variant="body2"
                                        color={(theme: any) => theme.palette.mode == "light" ? "#00acee" : theme.palette.grey[300]}
                                    >Twitter</Typography>
                                </IconButton>

                            }


                        </Box>
                    }
                </Box>
            </Box >
        </Box >
    );
};

export default Username;
