import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Image from "next/image";
const CertificatPuissant = () => {
    return (
        <div className="CertificatPuissant">
            <div className="Text">
                <div className="Title">
                    <h3>Certificat Puissant</h3>
                    <h2>
                        Un taux d&apos;insertion élevé dans le monde
                        professionnel
                    </h2>
                </div>
                <p>
                    L&apos;un des facteurs de succés de notre établissement est
                    la facilité d&apos;insertion des lauréats dans
                    l&apos;entreprise. Ceci est rendu possible à travers:
                </p>
                <DefaultButton bgColor="Green">
                    Formation altérnée
                </DefaultButton>
                <DefaultButton bgColor="Green">
                    Stage de fin d'études
                </DefaultButton>
                <DefaultButton bgColor="Green">
                    Partenariats avec les professionnels
                </DefaultButton>
            </div>
            <div className="ImageContainer">
                <Image
                    alt=""
                    src="/assets/img/Workspace.png"
                    layout="fill"
                    className="Image"
                />
            </div>
        </div>
    );
};

export default CertificatPuissant;
