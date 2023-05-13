import React, { useEffect, useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Background from "../core/Background";
import Navigation from "./interface/Navigation";

const HeaderWrapper = () => {
    const { status } = useSession();
    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        setPageTitle(document.title);
    }, []);

    // use the title to conditionally render the footer
    const showElement = pageTitle !== "NTIC Rabat - Chargement...";

    if ((showElement && status === "loading") || status === "authenticated") {
        return null;
    }

    return <Header />;
};

const FooterWrapper = () => {
    const { status } = useSession();
    const [pageTitle, setPageTitle] = useState("");

    useEffect(() => {
        setPageTitle(document.title);
    }, []);

    // use the title to conditionally render the footer
    const showElement = pageTitle !== "NTIC Rabat - Chargement...";

    if ((showElement && status === "loading") || status === "authenticated") {
        return null;
    }

    return <Footer />;
};

const Layout = (props: any) => {
    const router = useRouter();
    const { data: session, status }: any = useSession();

    return (
        <>
            {/* Layout for all pages except connect page  */}
            {!router.pathname.startsWith("/connect") && <Background />}

            {!router.pathname.startsWith("/connect") &&
                status !== "loading" && <HeaderWrapper />}

            {!router.pathname.startsWith("/connect") && <>{props.children}</>}

            {!router.pathname.startsWith("/connect") &&
                status !== "loading" && <FooterWrapper />}

            {/* Layout for connect page  */}
            {router.pathname.startsWith("/connect") && status !== "loading" && (
                <Navigation>{props.children}</Navigation>
            )}
        </>
    );
};

export default Layout;
