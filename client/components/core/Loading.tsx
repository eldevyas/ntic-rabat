import Head from "next/head";
import Background from "./Background";
import Image from "next/image";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function LinearIndeterminate() {
    return (
        <Box sx={{ width: "100%" }}>
            <LinearProgress />
        </Box>
    );
}

export default function Loading() {
    return (
        <div className="LoadingPage">
            <Head>
                <title>NTIC Rabat - Chargement...</title>
            </Head>
            <Box>
                <Image
                    src="/Logo.png"
                    width={150}
                    height={150}
                    alt="Logo"
                    priority
                />
                <LinearIndeterminate />
            </Box>
        </div>
    );
}
