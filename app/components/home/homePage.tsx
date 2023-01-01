// Importing Required modules for this page's functionnalities.
import React from "react";
import Head from "next/head";
// Next Image - Optimizing cache and loading delay.
import Image from "next/image";
import { Header } from "../layout/header/header";
import Footer from "../layout/footer";
import Landing from "./import/Landing";
import Service from "./import/Service";
import EspaceEquippe from "./import/EspaceEquippe";
import CertificatPuissant from "./import/CertificatPuissant";
import LaPenseCreative from "./import/LaPenseCreative";
import FormateursProfessionnels from "./import/FormateursProfessionnels";
import ContactSection from "./import/ContactSection";

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
                    <Header />
                    <Landing />
                    <Service />
                    <EspaceEquippe />
                    <CertificatPuissant />
                    <FormateursProfessionnels />
                    <LaPenseCreative />
                    <ContactSection />
                    <Footer />
                </div>
            </>
        );
    }
}
