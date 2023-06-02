"use client";

import EmptyFluxPage from "@/app/pages/A. Empty State/FluxPage";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Flux() {
    const Posts = [];
    const [isMobile, setIsMobile] = React.useState(false);

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
                                    "var(--mui-palette-common-background) var(--mui-palette-primary-dark)",
                                "&::-webkit-scrollbar": {
                                    width: "8px",
                                },
                                "&::-webkit-scrollbar-track": {
                                    backgroundColor:
                                        "var(--mui-palette-common-background)",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor:
                                        "var(--mui-palette-primary-dark)",
                                    borderRadius: "4px",
                                },
                            }}
                        >
                            <Box
                                className="User"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                <Avatar
                                    alt="Anonymous"
                                    src="/broken-image.jpg"
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
                                                theme.palette.text.primary,
                                        }}
                                    >
                                        Anonymous
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        fontWeight="medium"
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.text.secondary,
                                        }}
                                    >
                                        Anonymous
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
