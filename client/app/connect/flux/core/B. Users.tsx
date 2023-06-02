import React from "react";
import { Box, Skeleton, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";

export default function UsersList() {
    const Router = useRouter();

    const [isMobile, setIsMobile] = React.useState(false);
    const [isLoading, setLoading] = React.useState(true);
    const [Users, setUsers] = React.useState([]);

    const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    React.useEffect(() => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

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
            {isLoading ? (
                <>
                    {Skeletons.map((Number: number) => (
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
                            key={Number}
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
                                            theme.palette.text.primary,
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
                                            theme.palette.text.secondary,
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
                    {Users.map((user: any, index: number) => (
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
                                    `/connect/profile/${user.username}`
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
                                            theme.palette.text.primary,
                                    }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    fontWeight="medium"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.text.secondary,
                                    }}
                                >
                                    {user.email}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </>
            )}
        </div>
    );
}
