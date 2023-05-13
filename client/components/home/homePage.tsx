// Importing Required modules for this page's functionnalities.
import React from "react";
import Head from "next/head";
// Next Image - Optimizing cache and loading delay.
import Image from "next/image";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import Landing from "./import/1. Landing";
import Service from "./import/2. Service";
import EspaceEquippe from "./import/3. EspaceEquippe";
import CertificatPuissant from "./import/4. CertificatPuissant";
import LaPenseCreative from "./import/6. LaPenseCreative";
import FormateursProfessionnels from "./import/5. FormateursProfessionnels";
import ContactSection from "./import/7. ContactSection";
import Background from "../core/Background";

export default class App extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>NTIC Rabat - Accueil</title>
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

                <div className="HomePage">
                    <Landing />
                    <Service />
                    <EspaceEquippe />
                    <CertificatPuissant />
                    <FormateursProfessionnels />
                    <LaPenseCreative />
                    <ContactSection />
                </div>
            </>
        );
    }
}
