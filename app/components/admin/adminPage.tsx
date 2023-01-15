import React from "react";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Head from "next/head";

import Sidebar from "./layout/Sidebar";
const AdminPage = () => {
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
