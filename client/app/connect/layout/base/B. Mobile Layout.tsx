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
import Header from "./2. Mobile/Header";
import Footer from "./2. Mobile/Footer";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export default function MobileLayout(Props: Props) {
    const { data: status, session }: any = useSession();

    const Router = useRouter();

    return (
        <Box
            className="Container"
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                maxHeight: "100vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "stretch",
                gap: "1rem",
                color: (theme) => theme.palette.text.primary,
                padding: "0rem",
                backgroundColor: (theme) =>
                    theme.palette.mode == "dark" ? "#101010" : "#F5F5F5",
                overflowY: "auto",
                scrollMarginLeft: "1rem",
                scrollbarWidth: "thin",
                scrollbarColor: "#333333 #f5f5f5",
            }}
        >
            <Header />
            <Box
                className="PageContainer"
                sx={{
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                {Props.children}
            </Box>
            <Footer />
        </Box>
    );
}
