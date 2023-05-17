"use client";

import Head from "next/head";
import Background from "@/app/core/Background";
import Image from "next/image";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";

function LinearIndeterminate() {
    return (
        <Box sx={{ width: "100%" }}>
            <LinearProgress />
        </Box>
    );
}

export default function Loading() {
    useEffect(() => {
        const Footer: HTMLDivElement = document.querySelector(
            ".Footer"
        ) as HTMLDivElement;
        const Header: HTMLDivElement = document.querySelector(
            ".Header"
        ) as HTMLDivElement;

        if (Header) {
            Header.style.display = "none";
        }
        if (Footer) {
            Footer.style.display = "none";
        }
        return () => {
            if (Header) {
                Header.style.display = "flex";
            }
            if (Footer) {
                Footer.style.display = "flex";
            }
        };
    }, []);
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
            }}
        >
            <Box>
                <Image
                    src="/Logo.png"
                    width={150}
                    height={150}
                    alt="Logo"
                    priority
                />
                <LinearIndeterminate />
            </Box>
        </Box>
    );
}
