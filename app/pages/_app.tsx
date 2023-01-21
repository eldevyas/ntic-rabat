import "react-toastify/dist/ReactToastify.css";
import "./../styles/main.scss";
import { useState, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { AuthContextProvider } from "./../contexts/authContext";

import {
    ProgressIndicator,
    CustomToastContainer,
    motion,
    AnimatePresence,
} from "./../components/components";

export default function App({ Component, pageProps, router }: AppProps) {
    const [session, setSession] = useState(pageProps.session);
    //
    //
    const pageTransition = useMemo(() => {
        return {
            hidden: { opacity: 0, x: -400, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, y: 0, x: -400 },
        };
    }, []);
    //
    return (
        <>
            <AuthContextProvider>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                    />
                </Head>

                <ProgressIndicator />
                <CustomToastContainer />

                <AnimatePresence
                    mode="sync"
                    initial={true}
                    // onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <motion.div
                        className={"container"}
                        key={router.route}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ type: "ease" }}
                    >
                        <Component
                            {...pageProps}
                            session={session}
                            key={router.route}
                        />
                    </motion.div>
                </AnimatePresence>
            </AuthContextProvider>
        </>
    );
}