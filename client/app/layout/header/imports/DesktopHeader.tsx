import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "./../utils/MiddleLink";
import { DefaultButton } from "../../../core/Button";
import * as Display from "../../../../services/displayAlert";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import User from "../../../core/auth/User";
import { Box } from "@mui/material";

export default function DesktopHeader(props: any) {
    const { data: session }: any = useSession();

    const Router = useRouter();
    const Pathname: string = usePathname() as string;

    const MiddleLinks: {
        href: String;
        text: String;
    }[] = props.links;

    // let LogoSource = props["data-theme"] === "dark" ? "/Logo.png" : "/Logo.png";
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
                className="Middle"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    gap: "0.75rem",
                    flex: 1,
                }}
            >
                {MiddleLinks.map((middleLink, index) => (
                    <Link
                        key={index}
                        href={middleLink.href}
                        text={middleLink.text}
                    >
                        {middleLink.text}
                    </Link>
                ))}
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
                        button: {
                            minWidth: 135,
                            "&:last-of-type": {
                                color: "white",
                            },
                        },
                    }}
                >
                    {
                        // if user is connected
                        session ? (
                            <User />
                        ) : (
                            <>
                                <DefaultButton
                                    color="LightGreen"
                                    onClick={() => {
                                        Router.push("/auth/register");
                                    }}
                                >
                                    {"S'inscrire"}
                                </DefaultButton>
                                <DefaultButton
                                    color="Green"
                                    onClick={() => {
                                        Router.push("/auth/login");
                                    }}
                                >
                                    Se Connecter
                                </DefaultButton>
                            </>
                        )
                    }
                </Box>
            )}
        </Box>
    );
}
