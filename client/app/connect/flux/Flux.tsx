"use client";

import EmptyFluxPage from "@/app/pages/A. Empty State/FluxPage";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Feed from "./core/A. Feed";
import UsersList from "./core/B. Users";

export default function Flux() {
    return (
        <Box
            className="Flux"
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
            }}
        >
            <Feed />
            <UsersList />
        </Box>
    );
}
