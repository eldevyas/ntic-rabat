import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Image from "next/image";
const FormateursProfessionnels = () => {
    return (
        <div className="FormateursProfessionnels" id="FormateursProfessionnels">
            <div className="Text">
                <div className="Title">
                    <h3>Formateurs professionnels</h3>
                    <h2>
                        Nos formateurs passionnés jouent un rôle dans la
                        réussite de nos stagiaires
                    </h2>
                </div>
                <p>
                    Nous avons amené les meilleurs formateurs dans notre
                    institut, non seulement pour améliorer la qualité de
                    l&apos;enseignement, mais aussi la qualité de
                    l&apos;apprentissage des stagiaires. La façon dont
                    l&apos;information leur est envoyée est la clé de leur
                    compréhension et de leur amour pour leur domaine de travail.
                </p>
            </div>
            <div className="ImageContainer">
                <Image
                    alt=""
                    src="/assets/img/Man.png"
                    layout="fill"
                    className="Image"
                />
            </div>
        </div>
    );
};

export default FormateursProfessionnels;
