import "../styles/main.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
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

            <Component {...pageProps} />
        </>
    );
}
