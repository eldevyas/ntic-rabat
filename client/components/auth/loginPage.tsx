import React from "react";

import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import Head from "next/head";
import LoginComponent from "./imports/Login";
import Background from "../core/Background";
const LoginPage = () => {
    return (
        <div className="Login">
            <Head>
                <title>NTIC Rabat - Connexion</title>
            </Head>
            <div className="LoginContainer">
                <div className="wrapper">
                    <LoginComponent />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
