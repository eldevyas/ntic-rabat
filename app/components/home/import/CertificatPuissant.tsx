import React from "react";
import Image from "next/image";
import { DefaultButton } from "../../core/button";
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
const CertificatPuissant = () => {
    return (
        <div className="CertificatPuissant">
            <div className="Image">
                <Image src="/assets/img/Table.png" width={100} height={100} alt="Certificat Puissant" object-fit="contain" />
            </div>
            <div className="Text">
                <div className="Title">
                    <h3>Certificat Puissant</h3>
                    <h2>Un taux d'insertion élevé dans le monde professionnel</h2>
                </div>
                <p>L&apos;un des facteurs de succés de notre établissement est la facilité d'insertion des lauréats dans l&apos;entreprise. Ceci est rendu possible à travers :
                </p>
                <div className="Factors">
                    <div className="Factor">
                        <DefaultButton bgColor="Green" startIcon={<ModelTrainingOutlinedIcon />}>

                            <span>
                                Formation altérnée
                            </span>
                        </DefaultButton>
                    </div>
                    <div className="Factor">
                        <DefaultButton bgColor="Green" startIcon={<WorkOutlineOutlinedIcon />}>

                            <span>
                                Stage de fin d'études

                            </span>
                        </DefaultButton>
                    </div>
                    <div className="Factor">
                        <DefaultButton bgColor="Green" startIcon={<ApartmentOutlinedIcon />}>
                            <span>
                                Partenariats avec les professionnels
                            </span>
                        </DefaultButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatPuissant;
