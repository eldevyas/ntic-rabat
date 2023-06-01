"use client";
// Importing Required modules for this page's functionnalities.
import React from "react";
import Landing from "@/app/components/1. Landing";
import Service from "@/app/components/2. Service";
import EspaceEquippe from "@/app/components/3. Espace Equippé";
import CertificatPuissant from "@/app/components/4. Certificat Puissant";
import LaPenseCreative from "@/app/components/6. La Pensée Creative";
import FormateursProfessionnels from "@/app/components/5. Formateurs Professionnels";
import ContactSection from "@/app/components/7. Contact Section";

// Styling Required
import "@/app/Page.scss";

export default class App extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <Landing />
                <Service />
                <EspaceEquippe />
                <CertificatPuissant />
                <FormateursProfessionnels />
                <LaPenseCreative />
                <ContactSection />
            </div>
        );
    }
}
