import React from "react";
import { Box } from "@mui/material";
import SideBar from "./1. Desktop/SideBar";
import Header from "./1. Desktop/Header";
interface Props {
    children: JSX.Element[] | JSX.Element;
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function DesktopLayout(Props: Props) {
    return (
        <Box
            sx={{
                position: "static",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                maxHeight: "100vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "stretch",
                gap: "0rem",
                color: (theme) => theme.palette.text.primary,
                padding: "0rem",
                backgroundColor: (theme) =>
                    theme.palette.mode == "dark" ? "#101010" : "#F5F5F5",
                overflowY: "auto",
                scrollMarginLeft: "1rem",
                scrollbarWidth: "thin" /* Add thin scrollbar */,
                scrollbarColor: "#333333 #f5f5f5" /* Set scrollbar colors */,
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "auto",
                    maxHeight: "100vh",
                    maxWidth: "max-content",
                }}
            >
                <SideBar />
            </Box>
            <Box
                className="Container"
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    borderRadius: "0.75rem",
                    color: (theme) => theme.palette.text.primary,
                    // backgroundColor: (theme) =>
                    //     theme.palette.background.default,
                }}
            >
                <Header />
                <Box
                    className="ContainerPage"
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "1rem",
                        color: (theme) => theme.palette.text.primary,
                        flex: 1,
                    }}
                >
                    {Props.children}
                </Box>
            </Box>
        </Box>
    );
}
