import React from "react";

import Header from "../layout/header/header";
import Footer from "../layout/footer";
import Head from "next/head";
import InscriptionForm from "./imports/InscriptionForm";
const InscriptionPage = () => {
    return (
        <>
            <Head>
                <title>NTIC Rabat - Connexion</title>
                <meta
                    name="description"
                    content="Depuis son ouverture en 2007, l'ISTA NTIC Hay Riad a formé plus de 3 600 techniciens dans les secteurs Informatiques."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/dark-favicon.ico" />
            </Head>

            <div className="InscriptionPage">
                <Header data-theme="dark" />
                <InscriptionForm />
            </div>
        </>
    );
};

export default InscriptionPage;
