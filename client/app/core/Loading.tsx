"use client";

import Head from "next/head";
import Background from "@/app/core/Background";
import Image from "next/image";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

function LinearIndeterminate() {
    return (
        <Box sx={{ width: "100%" }}>
            <LinearProgress />
        </Box>
    );
}

export default function Loading() {
    const version = "2023.06.01"; // Replace with the actual version of your project

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
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: (theme) => theme.palette.background.default,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 150,
                }}
            >
                <Image
                    src="/Logo.png"
                    width={150}
                    height={150}
                    alt="Logo"
                    quality={100}
                    unoptimized={true}
                    priority
                />
                <LinearIndeterminate />
            </Box>
            <Box
                sx={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "auto",
                    zIndex: 9999,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                }}
            >
                <Typography
                    variant={"caption"}
                    component={"p"}
                    gutterBottom
                    textAlign={"center"}
                    maxWidth={400}
                >
                    <Typography
                        variant={"caption"}
                        fontWeight={800}
                        color={"text.secondary"}
                        component={"span"}
                    >
                        NTIC Rabat
                    </Typography>{" "}
                    <Typography
                        variant={"caption"}
                        fontWeight={800}
                        color={"text.secondary"}
                        component={"span"}
                    >
                        v{version}
                    </Typography>
                </Typography>
                <Typography
                    variant={"caption"}
                    component={"p"}
                    gutterBottom
                    textAlign={"center"}
                    maxWidth={400}
                    color={"text.secondary"}
                >
                    Conçu et développé par{" "}
                    <Typography
                        variant={"caption"}
                        component={"span"}
                        fontWeight={700}
                        sx={{
                            cursor: "pointer",
                        }}
                        textTransform={"uppercase"}
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/yassinechettouch/",
                                "_blank"
                            );
                        }}
                    >
                        Yassine Chettouch
                    </Typography>{" "}
                    et{" "}
                    <Typography
                        variant={"caption"}
                        component={"span"}
                        fontWeight={700}
                        textTransform={"uppercase"}
                        sx={{
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/yassineatik/",
                                "_blank"
                            );
                        }}
                    >
                        Yassine Atik
                    </Typography>
                    .
                </Typography>
            </Box>
        </Box>
    );
}
