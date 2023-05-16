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
import Layout from "../components/layout/layout";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors

            // Primary
            primary: "#29abe2",
            primaryLight: "#C4E6F4",
            primaryLightHover: "#A2D7EF",
            primaryLightActive: "#7BC5E7",
            primaryLightContrast: "#0072F5",
            primaryBorder: "#4FBEDA",
            primaryBorderHover: "#33A7D5",
            primarySolidHover: "#1E8DBF",
            primarySolidContrast: "#FFFFFF",
            primaryShadow: "#4FBEDA",
            // Secondary
            secondary: "#39b54a",
            secondaryLight: "#D5F4D8",
            secondaryLightHover: "#BEEBBD",
            secondaryLightActive: "#A8D88D",
            secondaryLightContrast: "#303030",
            secondaryBorder: "#5FC061",
            secondaryBorderHover: "#53AB56",
            secondarySolidHover: "#44923D",
            secondarySolidContrast: "#FFFFFF",
            secondaryShadow: "#5FC061",

            // More
            gradient:
                "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            link: "#39b54a",
        },
        fonts: {
            sans: "'Outfit', 'Cairo', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
        },
    },
});

export default function App({ Component, pageProps, router }: CustomAppProps) {
    const [session, setSession] = useState(pageProps.session);

    const pageTransition = useMemo(() => {
        return {
            hidden: { opacity: 0, x: -400, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, y: 0, x: -400 },
        };
    }, []);

    return (
        <>
            <NextUIProvider theme={theme}>
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
                            </motion.div>
                        </AnimatePresence>
                    </Layout>
                </SessionProvider>
            </NextUIProvider>
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
