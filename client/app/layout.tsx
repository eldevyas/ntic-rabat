import React from "react";
import "@/app/global/Global.scss";
import "react-toastify/dist/ReactToastify.css";
import MegaProvider from "./providers";

export const metadata = {
    title: "NTIC Rabat - Site Internet Officiel",
    description: "",
};

export default async function RootLayout({ children }: any) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body>
                <MegaProvider>{children}</MegaProvider>
            </body>
        </html>
    );
}
