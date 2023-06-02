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
import { Flip } from "react-toastify";
//
//
// Framer Motion Page Transitions
import { motion, AnimatePresence } from "framer-motion";
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
//
// Components
import { ToastContainer } from "react-toastify";
import ProgressBar from "next-nprogress-bar";

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
    const { mode, setMode }: any = useColorScheme();

    useEffect(() => {
        const Mode: () => string = () => {
            const savedMode = localStorage.getItem("colorMode");
            return savedMode ? savedMode : prefersDarkMode ? "dark" : "light";
        };
        setMode(Mode);
    }, []);

    const toggleColorMode = () => {
        setMode((prevMode: string) => {
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
            <NextProvider theme={nextTheme}>
                <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
            </NextProvider>
        </ColorModeContext.Provider>
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

const ProgressIndicator = () => {
    return (
        <>
            <ProgressBar
                color="#39b54a"
                height="5px"
                options={{ showSpinner: false }}
                appDirectory
            />
        </>
    );
};

const CustomToastContainer = () => {
    return (
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={true}
            pauseOnHover
            transition={Flip}
            limit={3}
        />
    );
};

// Mega Provider
export const MegaProvider = ({ children }: Props) => {
    return (
        <NextAuthProvider>
            {getInitColorSchemeScript()}
            <RootStyleRegistry>
                <CssVarsProvider>
                    <StylingProvider>
                        {/* Progress Bar on Top of the Page */}
                        <ProgressIndicator />
                        {/* Notifications Container */}
                        <CustomToastContainer />
                        {children}
                    </StylingProvider>
                </CssVarsProvider>
            </RootStyleRegistry>
        </NextAuthProvider>
    );
};

export default MegaProvider;
