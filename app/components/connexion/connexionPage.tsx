import React from 'react'

import { DarkHeader } from '../layout/header/header';
import Footer from '../layout/footer';
import Head from "next/head";
import ConnexionForm from './imports/ConnexionForm';
const ConnexionPage = () => {


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

            <div className="ConnexionPage">
                <DarkHeader />
                <ConnexionForm />
            </div>
        </>
    )
}


export default ConnexionPage