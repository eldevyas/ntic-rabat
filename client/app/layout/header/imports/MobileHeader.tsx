import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
    MobileMenuWithAuth,
    MobileMenuWithoutAuth,
} from "@/app/core/auth/User";
import { Box } from "@mui/material";

export interface IOpenMenu {
    isOpen: boolean;
}

export default function MobileHeader(props: any) {
    const { data: status }: any = useSession();

    const Router = useRouter();
    var { links, ...other } = props;

    let LogoSource = props["data-theme"] === "dark" ? "/Logo.png" : "/Logo.png";

    return (
        <>
            <Box
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
                    "&.DefaultButton": {
                        minWidth: 100,
                        height: "100%",
                        "&.Black": {
                            color: "white",
                        },
                    },
                }}
                className="Header"
            >
                {" "}
                <Box
                    sx={{
                        maxHeight: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        flex: 1,
                        "&:hover": {
                            opacity: 0.75,
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
        </>
    );
}
