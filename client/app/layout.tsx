import React, { Suspense } from "react";
import "@/app/global/Global.scss";
import "react-toastify/dist/ReactToastify.css";
import MegaProvider from "./providers";
import Loading from "./core/Loading";
import { Outfit, Cairo } from "next/font/google";
import { getInitColorSchemeScript } from "@mui/material/styles";

// If loading a variable font, you don't need to specify the font weight
const OutfitFont = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const CairoFont = Cairo({
    subsets: ["latin"],
    variable: "--font-cairo",
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
            // className={OutfitFont.className}
            className={`${OutfitFont.variable} ${CairoFont.variable}`}
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
