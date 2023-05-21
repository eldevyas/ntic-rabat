"use client";

// Next Auth Session Provider
import { SessionProvider } from "next-auth/react";
//
//
// Next UI Provider
import {
    ThemeProvider as NextThemesProvider,
    useTheme as useNextTheme,
} from "next-themes";
import { NextUIProvider as NextProvider, useTheme } from "@nextui-org/react";
import { ThemeProvider } from "@mui/material/styles";
import { NextUI_Theme } from "@/themes/NexUI";
import { MUI_Theme } from "@/themes/MUI";
import CssBaseline from "@mui/material/CssBaseline";

//
//
// Framer Motion Page Transitions
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/app/layout/LayoutProperties";
import { useEffect, useMemo } from "react";
//
//
// Emotion
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
    children?: React.ReactNode;
};

// NextAuth
export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

export const StylingProvider = ({ children }: Props) => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [Mode, setMode] = React.useState<string>(
        prefersDarkMode ? "dark" : "light"
    );
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    return prevMode === "light" ? "dark" : "light";
                });
            },
        }),
        [Mode, isDark, type]
    );

    const MTheme = React.useMemo(
        () => (Mode == "light" ? MUI_Theme.Light : MUI_Theme.Dark),
        [Mode, isDark]
    );

    const NTheme = React.useMemo(
        () => (Mode == "light" ? NextUI_Theme.Light : NextUI_Theme.Dark),
        [Mode, isDark]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <CssBaseline />
            <NextProvider theme={NTheme}>
                <ThemeProvider theme={MTheme}>{children}</ThemeProvider>
            </NextProvider>
        </ColorModeContext.Provider>
    );
};

// Layout & Transitions
export const LayoutProvider = ({ children }: Props) => {
    return <Layout>{children}</Layout>;
};

// Emotion Support for App Router

function RootStyleRegistry({ children }: { children: JSX.Element }) {
    const [cache] = useState(() => {
        const cache = createCache({ key: "css" });
        cache.compat = true;
        return cache;
    });

    useServerInsertedHTML(() => {
        return (
            <style
                data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(
                    " "
                )}`}
                dangerouslySetInnerHTML={{
                    __html: Object.values(cache.inserted).join(" "),
                }}
            />
        );
    });

    return <CacheProvider value={cache}>{children}</CacheProvider>;
}

// Mega Provider
export const MegaProvider = ({ children }: Props) => {
    return (
        <NextAuthProvider>
            <RootStyleRegistry>
                <StylingProvider>
                    <LayoutProvider>{children}</LayoutProvider>
                </StylingProvider>
            </RootStyleRegistry>
        </NextAuthProvider>
    );
};

export default MegaProvider;
