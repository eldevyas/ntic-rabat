"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

// Screen Width Based Schedule Displays
import { EmptySchedule } from "./base/B. Desktop Schedule";
import MobileSchedule from "./base/C. Mobile Schedule";

import { Divider, Table } from "@mui/material";
import { Box } from "@mui/system";

export default function Loading() {
    const [width, setWidth] = useState<number>();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "stretch",
                width: "100%",
                minHeight: "50vh",
                color: "text.primary",
            }}
        >
            {width && width < 768 ? <EmptySchedule /> : <EmptySchedule />}
        </Box>
    );
}
