import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "./../utils/MiddleLink";
import { useSession } from "next-auth/react";
import User from "../../../core/auth/User";
import { Box, Button, useColorScheme } from "@mui/material";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DesktopHeader(props: any) {
    const { data: session }: any = useSession();

    const Router = useRouter();
    const Pathname: string = usePathname() as string;

    const { mode, setMode } = useColorScheme();

    const MiddleLinks: {
        href: String;
        text: String;
        icon: any;
    }[] = props.links;

    return (
        <Box
            className="Header"
            sx={{
                background: "transparent",
                width: "100%",
                maxHeight: "100px",
                display: "flex",
                alignItems: "stretch",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: "0.75rem",
                padding: "1rem 2rem",
                overflow: "hidden",
                "&.DefaultButton": {
                    minWidth: 100,
                    height: "100%",
                    "&.Black": {
                        color: "white",
                    },
                },
            }}
        >
            <Box
                sx={{
                    maxHeight: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flex: 1,
                    img: {
                        transition: "transform .3s ease",
                        "&:hover": {
                            opacity: 0.75,
                            cursor: "pointer",
                            transform: "rotateY(180deg)",
                        },
                    },
                }}
            >
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    alt="Logo"
                    priority
                    onClick={() => Router.push("/")}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: "0.75rem",
                    flex: 1,
                }}
            >
                {MiddleLinks.map((middleLink, index) => {
                    return (
                        <>
                            {index == 2 && (
                                <Button
                                    key={index}
                                    variant="outlined"
                                    color="white"
                                    onClick={() => {
                                        setMode(
                                            mode == "dark" ? "light" : "dark"
                                        );
                                    }}
                                    sx={{
                                        height: "100%",
                                    }}
                                >
                                    {mode == "dark" ? (
                                        <MdDarkMode />
                                    ) : (
                                        <MdLightMode />
                                    )}
                                </Button>
                            )}
                            <Link
                                key={index >= 2 ? index + 1 : index}
                                href={middleLink.href}
                                text={middleLink.text}
                                icon={middleLink.icon}
                                variant={"outlined"}
                                color={"white"}
                            >
                                {middleLink.text}
                            </Link>
                        </>
                    );
                })}
            </Box>
            {/* Hidden on Login and Register Pages */}
            {Pathname !== "/auth/login" && Pathname !== "/auth/register" && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "0.75rem",
                        flex: 1,
                    }}
                >
                    {
                        // if user is connected
                        session ? (
                            <User />
                        ) : (
                            <>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        Router.push("/auth/register");
                                    }}
                                    sx={{
                                        minWidth: 135,
                                    }}
                                >
                                    {"S'inscrire"}
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => {
                                        Router.push("/auth/login");
                                    }}
                                    sx={{
                                        minWidth: 135,
                                    }}
                                >
                                    Se Connecter
                                </Button>
                            </>
                        )
                    }
                </Box>
            )}
        </Box>
    );
}
