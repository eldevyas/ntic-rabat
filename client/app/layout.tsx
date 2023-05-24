import React, { Suspense } from "react";
import "@/app/global/Global.scss";
import "react-toastify/dist/ReactToastify.css";
import MegaProvider from "./providers";
import Loading from "./core/Loading";

export const metadata = {
    title: "NTIC Rabat - Site Internet Officiel",
    description: "",
};

export default async function RootLayout({ children }: any) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body>
                <MegaProvider>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </MegaProvider>
            </body>
        </html>
    );
}
