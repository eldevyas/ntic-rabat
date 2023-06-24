"use client";

// import MessagesPage from "@/app/pages/A. Empty State/MessagesPage";
import { Box } from "@mui/material";

import React from "react";
import ChatWindow from "./components/ChatWindow";
import { ChatContextProvider } from "@/context/ChatContext";

export default function Page() {

    return (
        <ChatContextProvider>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: '1rem',
                }}
            >
                <ChatWindow />
            </Box>
        </ChatContextProvider>
    );
}
