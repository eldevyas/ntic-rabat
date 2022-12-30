import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

// Importing Home Page Component from Components folder:
import App from "../components/home/homePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <App />
        </>
    );
}
