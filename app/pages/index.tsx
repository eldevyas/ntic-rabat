import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

// Importing Home Page Component from Components folder:
import App from "../components/home/homePage";

export default function Home() {
    return (
        <>
            <App />
        </>
    );
}
