import React, { useEffect } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PagesTwoToneIcon from "@mui/icons-material/PagesTwoTone";
// import nextjs button
import Button from "@mui/material/Button";
// import card
import Card from "./utils/Card";
import Annonces from "../pages/Annonces";
// import InfoCard from "./utils/InfoCard";
const Content = (props: any) => {
    // switch pages
    const Page = props.page;
    let className = "";

    switch (Page) {
        case "Dashboard":
            className = "Content Dashboard";
        case "Annonces":
            className = "Content Annonces";
            break;
        case "AjouterAnnonce":
            className = "Content AjouterAnnonce";
            break;
        default:
            className = "Content Default";
            break;
    }

    // Get cards from annonces api

    return (
        <>
            <div className={className}>
                <Annonces />
            </div>
        </>
    );
};

export default Content;
