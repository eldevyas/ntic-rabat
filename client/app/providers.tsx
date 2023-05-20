"use client";

// Next Auth Session Provider
import { SessionProvider } from "next-auth/react";
//
//
// Next UI Provider
import { NextUIProvider as NextProvider } from "@nextui-org/react";
import { ThemeProvider } from "@mui/material/styles";
import { NextUI_Theme } from "@/themes/NexUI";
import { MUI_Theme } from "@/themes/MUI";
//
//
// Framer Motion Page Transitions
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/app/layout/LayoutProperties";
import { useMemo } from "react";
//
//
// Emotion
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import React from "react";

type Props = {
    children?: React.ReactNode;
};

// NextAuth
export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

// Themes
export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

export const StylingProvider = ({ children }: Props) => {
    const [Mode, setMode] = React.useState<"Light" | "Dark">("Light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "Light" ? "Dark" : "Light"
                );
            },
        }),
        []
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            {children}
            <ThemeProvider
                theme={Mode == "Light" ? MUI_Theme.Light : MUI_Theme.Dark}
            >
                <NextProvider
                    theme={
                        Mode == "Light" ? NextUI_Theme.Light : NextUI_Theme.Dark
                    }
                >
                    {children}
                </NextProvider>
            </ThemeProvider>
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
