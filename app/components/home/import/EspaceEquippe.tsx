import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Image from "next/image";
const EspaceEquippe = () => {
    return (
        <div className="EspaceEquippe">
            <div className="Text">
                <div className="Title">
                    <h3>éspace Moderne</h3>
                    <h2>Un éspace de formation moderne et très bien équippé</h2>
                </div>
                <p>
                    L&apos;ISTA de Hay Riad est doté des salles spécialisées
                    pour permettre un apprentissage efficace et dans les
                    meilleurs conditions. L&apos;école heberge plusieurs centres
                    de certification.
                </p>
                <div className="Buttons">
                    <div className="Button">
                        <DefaultButton bgColor="Black">
                            S&apos;inscrire maintenant
                        </DefaultButton>
                    </div>
                    <div className="Button">
                        <IconButton bgColor="Black">
                            <ExpandCircleDownOutlinedIcon />
                        </IconButton>
                        <span>Lire Plus</span>
                    </div>
                </div>
            </div>
            <div className="Image">
                <Image
                    alt=""
                    src="/assets/img/Workspace.png"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
};

export default EspaceEquippe;
