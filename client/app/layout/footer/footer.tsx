import React from "react";
import Image from "next/image";
import { DefaultButton, IconButton } from "../../core/Button";
import "./Footer.scss";
// Icons
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
export default function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="Infos">
                    <Image
                        src="/Logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                    ></Image>
                    <div className="Text">
                        <h3>
                            Institut Spécialisée en Technologies Appliquées -
                            NTIC Rabat
                        </h3>
                        <p>
                            Un institut spécialisé dans les nouvelles
                            technologies de l&apos;nformation. Depuis son
                            ouverture en 2007, l&apos;ISTA NTIC Hay riad a formé
                            plus de 3600 techniciens spécialisées.
                        </p>
                        <DefaultButton className="DefaultButtonWhite">
                            Contactez-nous
                        </DefaultButton>
                    </div>
                </div>
                <div className="Team">
                    <h3>Les développeurs de ce site web</h3>
                    <p>
                        Clickez sur les liens pour savoir plus
                        d&apos;informations de contact
                    </p>
                    <div className="Informations">
                        <div
                            className="Developer"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/yassinechettouch"
                                )
                            }
                        >
                            <IconButton color="Green">
                                <AccountTreeOutlinedIcon className="Icon" />
                            </IconButton>
                            <div className="Name">Yassine Chettouch</div>
                        </div>
                        <div
                            className="Developer"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/yassineatik"
                                )
                            }
                        >
                            <IconButton color="Green">
                                <AccountTreeOutlinedIcon className="Icon" />
                            </IconButton>
                            <div className="Name">Yassine Atik</div>
                        </div>
                    </div>
                </div>

                <div className="Contact">
                    <h3>Coordonnées</h3>
                    <div className="Informations">
                        <div className="Row">
                            <IconButton color="White">
                                <LocationOnOutlinedIcon className="Icon" />
                            </IconButton>
                            <div className="Text">
                                X489+MGW, Av. Hassan II, Rabat
                            </div>
                        </div>
                        <div className="Row">
                            <IconButton color="White">
                                <LocalPhoneOutlinedIcon className="Icon" />
                            </IconButton>
                            <div className="Text">+212 6 64 09 38 60</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
