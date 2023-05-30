import React, { Suspense } from "react";
import "@/app/global/Global.scss";
import "react-toastify/dist/ReactToastify.css";
import MegaProvider from "./providers";
import Loading from "./core/Loading";
import { Outfit } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const OutfitFont = Outfit({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "NTIC Rabat - Site Internet Officiel",
    description: "",
};

export default async function RootLayout({ children }: any) {
    return (
        <html
            lang="fr"
            className={OutfitFont.className}
            suppressHydrationWarning
        >
            <body>
                <MegaProvider>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </MegaProvider>
            </body>
        </html>
    );
}
