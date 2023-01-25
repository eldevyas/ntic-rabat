import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Image from "next/image";
import Router, { useRouter } from "next/router";

const LaPenseCreative = () => {
    const Router = useRouter();
    return (
        <div className="LaPenseCreative">
            <div className="Text">
                <div className="Title">
                    <h3>La pensée créative </h3>
                    <h2>
                        La créativité, l&apos;invention, la passion, et la
                        persévérance, sont les qualités de nos stagiaires
                    </h2>
                </div>
                <p>
                    Tous les stagiaires de l&apos;institut obtiennent de bonnes
                    notes, en raison de leur persévérance et de leur créativité
                    dans leur travail, ils font de leur mieux dans le domaine du
                    monde professionnel. Vous êtes une entreprise à la recherche
                    de bons employés pour votre entreprise?
                </p>
                <div className="Buttons">
                    <div className="Button">
                        <DefaultButton
                            color="Blue"
                            onClick={() => Router.push("/#contact")}
                        >
                            Contactez nous
                        </DefaultButton>
                    </div>
                    <div className="Button">
                        <DefaultButton
                            color="White"
                            startIcon={<ArrowCircleUpIcon />}
                        >
                            Faites une visite à l'institut
                        </DefaultButton>
                    </div>
                </div>
            </div>
            <div className="ImageContainer">
                <Image
                    alt=""
                    src="/assets/img/Businessman.png"
                    layout="fill"
                    className="Image"
                />
            </div>
        </div>
    );
};

export default LaPenseCreative;
