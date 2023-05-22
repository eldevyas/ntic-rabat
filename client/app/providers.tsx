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
import { CssBaseline as NextCssBaseline } from "@nextui-org/react";

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

const StylingProvider = ({ children }: Props) => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem("colorMode");
        return savedMode ? savedMode : prefersDarkMode ? "dark" : "light";
    });

    const toggleColorMode = () => {
        setMode((prevMode) => {
            const newMode = prevMode === "light" ? "dark" : "light";
            localStorage.setItem("colorMode", newMode);
            setTheme(newMode);
            return newMode;
        });
    };

    useEffect(() => {
        const savedMode = localStorage.getItem("colorMode");
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleMediaQueryChange = (e: { matches: any }) => {
            setMode(e.matches ? "dark" : "light");
        };
        mediaQuery.addListener(handleMediaQueryChange);
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const colorMode = useMemo(() => ({ toggleColorMode }), []);

    const muiTheme = useMemo(
        () => (mode === "light" ? MUI_Theme.Light : MUI_Theme.Dark),
        [mode, isDark, type]
    );

    const nextTheme = useMemo(
        () => (mode === "light" ? NextUI_Theme.Light : NextUI_Theme.Dark),
        [mode, isDark, type]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <CssBaseline />
            {/* <NextCssBaseline /> */}
            <NextProvider theme={nextTheme}>
                <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
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
            <>
                {/* {NextCssBaseline.flush()} */}
                <style
                    data-emotion={`${cache.key} ${Object.keys(
                        cache.inserted
                    ).join(" ")}`}
                    dangerouslySetInnerHTML={{
                        __html: Object.values(cache.inserted).join(" "),
                    }}
                />
            </>
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
