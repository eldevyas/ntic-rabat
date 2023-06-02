"use client";

import EmptyFluxPage from "@/app/pages/A. Empty State/FluxPage";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useRouter } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";

export default function Flux() {
    const Posts = [];
    const [isMobile, setIsMobile] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const Router = useRouter();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        // Initial check
        handleResize();

        // Listen for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [ContainerHeight, setContainerHeight] = React.useState(0);
    const [HeaderHeight, setHeaderHeight] = React.useState(0);

    React.useEffect(() => {
        const calculateContainerHeight = () => {
            const windowHeight: any = window.innerHeight;
            const headerHeight: any =
                (document.querySelector(".ConnectHeader") as any)
                    ?.offsetHeight || 0;

            setHeaderHeight(headerHeight);
            const containerHeight = windowHeight - headerHeight;
            setContainerHeight(containerHeight);
        };
        calculateContainerHeight();
        window.addEventListener("resize", calculateContainerHeight);

        // get all users

        axios
            .get(`${process.env.SERVER_PUBLIC_API_URL}/users`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setUsers(res.data.users);
                setIsLoading(false);
            })
            .catch((err: any) => {
                console.log(err);
            });

        return () => {
            window.removeEventListener("resize", calculateContainerHeight);
        };
    }, []);

    return (
        <Box
            className="Flux"
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
            }}
        >
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
                <Box
                    className="Create"
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "0.75rem",
                        padding: "1rem",
                        backgroundColor: (theme) =>
                            theme.palette.background.paper,
                    }}
                >
                    <Box
                        className="CreatorContainer"
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                        }}
                    >
                        <Box
                            className="AvatarContainer"
                            sx={{
                                position: "relative",
                                width: "fit-content",
                                height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                            }}
                        >
                            <Avatar
                                alt="Anonymous"
                                src="/broken-image.jpg"
                                sizes="large"
                            />
                        </Box>
                        <Box
                            className="EditorContainer"
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                gap: "1rem",
                            }}
                        >
                            <TextField
                                margin="dense"
                                placeholder="Quoi de neuf ?!"
                                multiline
                                fullWidth
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Box>
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
                    {Posts.length > 0 ? <></> : <EmptyFluxPage />}
                </Box>
            </Box>
            {!isMobile && (
                <Box
                    className="Users"
                    sx={{
                        position: "sticky",
                        top: HeaderHeight,
                        height: ContainerHeight,
                        width: "100%",
                        minWidth: 250,
                        maxHeight: "100vh",
                        maxWidth: "max-content",
                    }}
                >
                    <Box
                        className="List"
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            minWidth: 250,
                            color: (theme) => theme.palette.text.primary,
                            backgroundColor: (theme) =>
                                theme.palette.background.default,
                            padding: "1rem",
                        }}
                    >
                        <Typography fontWeight="bold" variant="body1">
                            Stagiares
                        </Typography>
                        <Box
                            className="Avatars"
                            sx={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                                overflowX: "hidden",
                                overflowY: "auto",
                                scrollbarWidth: "thin",
                                scrollbarColor:
                                    "var(--nextui-colors-background) var(--nextui-colors-primaryDark)",
                                "&::-webkit-scrollbar": {
                                    width: "8px",
                                },
                                "&::-webkit-scrollbar-track": {
                                    backgroundColor:
                                        "var(--nextui-colors-background)",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor:
                                        "var(--nextui-colors-primaryDark)",
                                    borderRadius: "4px",
                                },
                            }}
                        >
                            {isLoading ? (
                                <>
                                    {skeleton.map((item, index) => (
                                        <Box
                                            className="User"
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                "&:hover": {
                                                    cursor: "pointer",
                                                },
                                            }}
                                        >
                                            <Skeleton
                                                variant="circular"
                                                width={40}
                                                height={40}
                                            />

                                            <Box
                                                className="Name"
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    fontWeight="bold"
                                                    sx={{
                                                        color: (theme) =>
                                                            theme.palette.text
                                                                .primary,
                                                    }}
                                                >
                                                    <Skeleton
                                                        variant="text"
                                                        sx={{
                                                            fontSize: "1rem",
                                                            width: "200px",
                                                        }}
                                                    />
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    fontWeight="medium"
                                                    sx={{
                                                        color: (theme) =>
                                                            theme.palette.text
                                                                .secondary,
                                                    }}
                                                >
                                                    <Skeleton
                                                        variant="text"
                                                        sx={{
                                                            fontSize: "1rem",
                                                            width: "200px",
                                                        }}
                                                    />
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {users.map((user: any, index: number) => (
                                        <Box
                                            key={index}
                                            className="User"
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                                "&:hover": {
                                                    cursor: "pointer",
                                                },
                                            }}
                                            onClick={() => {
                                                Router.push(
                                                    `/user/${user.username}`
                                                );
                                            }}
                                        >
                                            <Avatar
                                                alt={user.name}
                                                src="/assets/avatars/Default.png"
                                                sizes="large"
                                            />
                                            <Box
                                                className="Name"
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    fontWeight="bold"
                                                    sx={{
                                                        color: (theme) =>
                                                            theme.palette.text
                                                                .primary,
                                                    }}
                                                >
                                                    {user.name}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    fontWeight="medium"
                                                    sx={{
                                                        color: (theme) =>
                                                            theme.palette.text
                                                                .secondary,
                                                    }}
                                                >
                                                    {user.email}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </>
                            )}
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
