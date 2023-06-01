import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
    MobileMenuWithAuth,
    MobileMenuWithoutAuth,
} from "@/app/core/auth/User";
import { Box, Typography } from "@mui/material";
import { Avatar } from "@nextui-org/react";
export default function Header() {
    const { data: status, session }: any = useSession();

    const Router = useRouter();
    return (
        <Box
            className="HeaderNavigation"
            sx={{
                position: "sticky",
                top: 0,
                width: "100%",
                height: "auto",
                borderRadius: "0rem",
                padding: "1rem",
                backgroundColor: (theme) =>
                    theme.palette.mode == "dark" ? "#000" : "#fff",
                border: 1,
                borderColor: "var(--nextui-colors-border)",
            }}
        >
            <Box
                sx={{
                    background: "transparent",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                }}
            >
                <Box
                    className="Greeting"
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    {/* {session ? (
                            <Avatar squared text="Junior" size={"lg"} />
                        ) : (
                            <Avatar squared text="Anonyme" size={"lg"} />
                        )} */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: (theme) => theme.palette.text.secondary,
                            }}
                        >
                            Bonjour,👋
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: (theme) => theme.palette.text.primary,
                            }}
                            fontWeight={700}
                        >
                            {session ? session.user.username : "Anonyme."}
                        </Typography>
                    </Box>
                </Box>
                {status != "authenticated" && (
                    <div className="MenuButton">
                        <MobileMenuWithoutAuth />
                    </div>
                )}
                {status == "authenticated" && (
                    <div className="MenuButton">
                        <MobileMenuWithAuth />
                    </div>
                )}
            </Box>
        </Box>
    );
}
