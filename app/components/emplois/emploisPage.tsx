import React, { useState } from "react";
import { Header } from "../layout/header/header";
import Footer from "../layout/footer";
import Head from "next/head";
import SelectClass from "./imports/SelectClass";
import Schedule from "./imports/Schedule";
import axios from "axios";
import Emploi from "./imports/Emploi";

// Group Context

// Configure Group Context

const EmploisPage = () => {
    return (
        <>
            <Head>
                <title>NTIC Rabat - Emplois</title>
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

            <div className="EmploisPage">
                <Header />
                <Emploi />
                <Footer />
            </div>
        </>
    );
};

export default EmploisPage;
