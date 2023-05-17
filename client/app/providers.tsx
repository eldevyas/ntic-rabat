"use client";

// Next Auth Session Provider
import { SessionProvider } from "next-auth/react";
//
//
// Next UI Provider
import { NextUIProvider as NextProvider } from "@nextui-org/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme as NextUITheme } from "@/themes/NexUI";
import { theme as MUITheme } from "@/themes/MUI";
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

type Props = {
    children?: React.ReactNode;
};

// NextAuth
export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

// NextUI
export const NextUIProvider = ({ children }: Props) => {
    return <NextProvider theme={NextUITheme}>{children}</NextProvider>;
};

// NextUI
export const MUIProvider = ({ children }: Props) => {
    return <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>;
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
                <MUIProvider>
                    <NextUIProvider>
                        <LayoutProvider>{children}</LayoutProvider>
                    </NextUIProvider>
                </MUIProvider>
            </RootStyleRegistry>
        </NextAuthProvider>
    );
};

export default MegaProvider;
