import React from "react";

import Header from "../layout/header/header";
import Footer from "../layout/footer";
import Head from "next/head";
import ConnexionForm from "./imports/ConnexionForm";
import LoginComponent from "./imports/Login";
import Background from "../core/Background";
const ConnexionPage = () => {
    return (
        <div className="Login">
            <Head>
                <title>NTIC Rabat - Connexion Admin</title>
            </Head>

            <Header />
            <Background />
            <div className="LoginContainer">
                <div className="wrapper">
                    <LoginComponent />
                </div>
            </div>
        </div>
    );
};

export default ConnexionPage;
