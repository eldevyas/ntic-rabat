import "react-toastify/dist/ReactToastify.css";
import "./../styles/main.scss";
import { useState, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import type { NextComponentType } from "next"; //Import Component type

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps & {
    Component: NextComponentType & { auth?: boolean }; // add auth type
};

import {
    ProgressIndicator,
    CustomToastContainer,
    motion,
    AnimatePresence,
} from "./../components/components";
import Loading from "../components/core/Loading";
import Background from "../components/core/Background";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps, router }: CustomAppProps) {
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
            <SessionProvider session={session}>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                    />
                </Head>

                <ProgressIndicator />
                <CustomToastContainer />

                <Layout {...pageProps} session={session} key={router.route}>
                    <AnimatePresence
                        mode="sync"
                        initial={true}
                        // onExitComplete={() => window.scrollTo(0, 0)}
                    >
                        <motion.div
                            className={"Container"}
                            key={router.route}
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={pageTransition}
                            transition={{ type: "ease" }}
                        >
                            {Component.auth ? (
                                <Auth>
                                    <Component
                                        {...pageProps}
                                        session={session}
                                        key={router.route}
                                    />{" "}
                                </Auth>
                            ) : (
                                <Component
                                    {...pageProps}
                                    session={session}
                                    key={router.route}
                                />
                            )}

                            {/* <Loading /> */}
                        </motion.div>
                    </AnimatePresence>
                </Layout>
            </SessionProvider>
        </>
    );
}

function Auth({ children }: any) {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession({ required: true });

    if (status === "loading") {
        return <Loading />;
    }

    return children;
}
