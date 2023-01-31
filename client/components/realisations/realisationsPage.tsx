import React, { useEffect, useState } from "react";
import Header from "../layout/header/header";
import Footer from "../layout/footer";
import Head from "next/head";
// Icons
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { DefaultButton } from "../core/button";

import RealisationsContent from "./imports/RealisationsContent";
const RealisationsPage = () => {
    const [isAdding, setIsAdding] = useState(false);
    return (
        <>
            <Head>
                <title>NTIC Rabat - Realisations</title>
                <meta
                    name="description"
                    content="Consultez les projets realisée par les stagiaires de NTIC RABAT."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/dark-favicon.ico" />
            </Head>

            <div className="RealisationsPage">
                <Header />
                <div className="RealisationsPage__content">
                    <div className="Title">
                        <p>
                            <AddBoxOutlinedIcon />
                            Realisations
                        </p>
                        <DefaultButton
                            text="Ajouter une realisation"
                            onClick={() => {
                                setIsAdding(!isAdding);
                            }}
                        >
                            <AddBoxOutlinedIcon />
                            Ajouter une realisation
                        </DefaultButton>
                    </div>
                    <RealisationsContent isAdding={isAdding} />
                </div>

                <Footer />
            </div>
        </>
    );
};

export default RealisationsPage;
