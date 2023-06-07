import { Box, Breadcrumbs, Button, Typography, SvgIcon } from "@mui/material";
import Link from "next/link";
import React from "react";

// SVG Icon component for the dot separator
const DotSeparator = () => (
    <SvgIcon viewBox="0 0 4 4" sx={{ fontSize: 4, opacity: 0.25 }}>
        <circle cx="2" cy="2" r="2" fill="currentColor" />
    </SvgIcon>
);

export default function Heading() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
            }}
        >
            <Box
                sx={{
                    width: "auto",
                    flex: 1,
                    height: "auto",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >
                <Typography variant="h4" component="h1" fontWeight={"bold"}>
                    Flux
                </Typography>

                <Breadcrumbs separator={<DotSeparator />}>
                    <Link color="inherit" href="/connect">
                        Connect
                    </Link>
                    <Typography color="text.primary">Flux</Typography>
                    <Typography color="text.primary">Create Post</Typography>
                </Breadcrumbs>
            </Box>

        </Box>
    );
}