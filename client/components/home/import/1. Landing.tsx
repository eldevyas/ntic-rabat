import React from "react";
import { DefaultButton, OutlinedButton } from "../../core/button";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Router, { useRouter } from "next/router";
import Schedule from "../../emplois/imports/Schedule";
import SelectGroup from "./utils/SelectGroup";
import Announces from "./posts/Announces";
import * as Display from "../../../services/displayAlert";

export default function Landing() {
    const Router = useRouter();
    return (
        <div className="Landing">
            <div className="Title">
                <h3>
                    Institut Spécialisée de Technologies Appliquées
                    <span> NTIC Rabat</span>
                </h3>
                <p>
                    Depuis son ouverture en 2007, l&apos;ISTA NTIC Hay Riad a
                    formé plus de 3 600 techniciens dans les secteurs
                    Informatiques.
                </p>
            </div>
            <div className="APIs">
                <SelectGroup />
                <OutlinedButton
                    startIcon={<GroupsOutlinedIcon />}
                    color="LightBlue"
                    onClick={() => {
                        Router.push(`/connect`);
                    }}
                >
                    Consultez NTIC Connect
                </OutlinedButton>
            </div>
            <Announces />
            <div className="HomeCards">
                <div className="HomeCard">
                    <h3>+30</h3>
                    <h5>Formateurs Certifiés</h5>
                </div>
                <div className="HomeCard">
                    <h3>+3600</h3>
                    <h5>Techniciens spécialisés</h5>
                </div>
                <div className="HomeCard">
                    <h3>+12</h3>
                    <h5>Formations</h5>
                </div>
                <div className="HomeCard">
                    <h3>2005</h3>
                    <h5>Ouvert à enseigner depuis</h5>
                </div>
            </div>
        </div>
    );
}
