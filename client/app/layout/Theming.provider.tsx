"use client";

import { NextUIProvider as NextProvider } from "@nextui-org/react";
import { ThemeProvider } from "@mui/material/styles";
import { NextUI_Theme } from "@/themes/NexUI";
import { MUI_CSS_Theme } from "@/themes/MUI";
import CssBaseline from "@mui/material/CssBaseline";
//
//
// Framer Motion Page Transitions
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
import {
    getInitColorSchemeScript,
    useColorScheme,
    Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material/styles";
//

type Props = {
    children?: React.ReactNode;
};

const StylingProvider = ({ children }: Props) => {
    const { mode }: any = useColorScheme();

    return (
        <>
            <CssBaseline />
            <NextProvider
                theme={
                    mode === "light" ? NextUI_Theme.Light : NextUI_Theme.Dark
                }
            >
                {children}
            </NextProvider>
        </>
    );
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

export const ThemingProvider = ({ children }: Props) => {
    return (
        <>
            {getInitColorSchemeScript()}
            <RootStyleRegistry>
                <CssVarsProvider defaultMode="system" theme={MUI_CSS_Theme}>
                    <StylingProvider>{children}</StylingProvider>
                </CssVarsProvider>
            </RootStyleRegistry>
        </>
    );
};

export default ThemeProvider;
