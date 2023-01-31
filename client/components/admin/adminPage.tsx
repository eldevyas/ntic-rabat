import React, { useEffect } from "react";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Head from "next/head";
import { getCookie } from "cookies-next";
import Sidebar from "./layout/Sidebar";
import { useRouter } from "next/router";
const AdminPage = () => {
    const Router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    useEffect(() => {
        const token = getCookie("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            // Router.push("/login");
            console.log("not logged in");
        }
    }, []);
    return (
        <>
            <Head>
                <title>NTIC Rabat - Administration</title>
            </Head>

            <Sidebar />
            <div className="Main">
                <Header />
                <Content />
            </div>
        </>
    );
};

export default AdminPage;
