import React, { useEffect, useState } from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer";
import Head from "next/head";
import SelectClass from "./imports/SelectClass";
import Schedule from "./imports/Schedule";
import axios from "axios";
import Emploi from "./imports/Emploi";
import Background from "../core/Background";

// Group Context

// Configure Group Context

const EmploisPage = (props: any) => {
    // state
    const [GroupID, setGroup] = useState(props["data-GroupID"]);
    const [Schedule, setSchedule] = useState(props["data-Schedule"]);
    const [Weather, setWeather] = useState(props["data-Weather"]);

    return (
        <>
            <Head>
                <title>NTIC Rabat - Emplois</title>
                <meta
                    name="description"
                    content="Consultez les emplois de tous les groupes de l'institut sur notre page dédiée. Restez informé des horaires de cours, des examens et des activités en un seul endroit."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/dark-favicon.ico" />
            </Head>

            <div className="EmploisPage">
                <Header />

                <Emploi
                    data-GroupID={GroupID}
                    data-Schedule={Schedule}
                    data-Weather={Weather}
                />
                <Footer />
            </div>
        </>
    );
};

export default EmploisPage;
