import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function UsersList() {
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
        <div>
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
        </div>
    );
}
