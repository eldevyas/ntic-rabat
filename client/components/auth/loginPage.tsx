import React from "react";

import Header from "../layout/header/header";
import Footer from "../layout/footer";
import Head from "next/head";
import LoginComponent from "./imports/Login";
import Background from "../core/Background";
const LoginPage = () => {
    return (
        <div className="Login">
            <Head>
                <title>NTIC Rabat - Connexion</title>
            </Head>

            <Header />

            <div className="LoginContainer">
                <div className="wrapper">
                    <LoginComponent />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;
