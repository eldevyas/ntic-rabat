import "../styles/main.scss";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer, toast } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
    router,
}: AppProps) {
    const url = `http://localhost:3000${router.route}`;

    const MainVariants = {
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, y: 0, x: -200 },
    };
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
            </Head>

            <NextNProgress
                color="#39b54a"
                startPosition={0.3}
                stopDelayMs={500}
                height={5}
                showOnShallow={true}
                options={{ showSpinner: false, easing: "ease", speed: 500 }}
                transformCSS={(css) => {
                    // css is the default css string. You can modify it and return it or return your own css.
                    return <style>{css}</style>;
                }}
            />

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

            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    className={"container"}
                    key={router.route}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={MainVariants}
                    transition={{ type: "linear" }}
                >
                    <Component {...pageProps} canonical={url} key={url} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}
