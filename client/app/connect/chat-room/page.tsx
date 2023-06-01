"use client";

import MessagesPage from "@/app/pages/A. Empty State/MessagesPage";
import { Box } from "@mui/material";
import React from "react";

export default function Page() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <MessagesPage />
        </Box>
    );
}
