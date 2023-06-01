"use client";

import React from "react";
import { Box } from "@mui/material";
import Dashboard from "./layout/Dashboard";
export default function DashboardLayout({ children }: any) {
    return <Dashboard>{children}</Dashboard>;
}
