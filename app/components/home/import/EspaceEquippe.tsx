import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Image from "next/image";
import Router, { useRouter } from "next/router";
const EspaceEquippe = () => {
    const Router = useRouter();
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
                        <DefaultButton bgColor="Black"
                            onClick={() => Router.push('/inscription')}

                        >
                            S&apos;inscrire maintenant
                        </DefaultButton>
                    </div>
                    <div className="Button">
                        <DefaultButton
                            bgColor="White"
                            startIcon={<ExpandCircleDownOutlinedIcon />}
                        >
                            Lire Plus
                        </DefaultButton>
                    </div>
                </div>
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

export default EspaceEquippe;
