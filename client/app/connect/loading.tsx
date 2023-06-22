"use client";

import { Box } from "@mui/material";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Box
            className="Flux"
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
            }}
        >
            Chargement...
        </Box>
    );
}
