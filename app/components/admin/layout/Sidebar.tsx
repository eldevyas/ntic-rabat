import React from "react";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Button from "@mui/material/Button";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PagesIcon from "@mui/icons-material/Pages";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
const Sidebar = () => {
    const Router = useRouter();
    const handleLogout = () => {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        Router.push("/connexion"); // redirect the user to the login page
        setCookie("token", "", { expires: date });
    };
    return (
        <div className="SideBar">
            <div className="ImageContainer">
                <div className="Logo">
                    <Image
                        src="/Logo.png"
                        width={100}
                        height={100}
                        alt="Logo"
                        priority
                    />
                </div>
                <div className="NavButtons">
                    <Button variant="text" className="NavButton Active">
                        <HomeOutlinedIcon className="BtnIcon" />
                        Vue d'ensemble
                    </Button>
                    <Button variant="text" className="NavButton Inactive">
                        <NotificationsNoneOutlinedIcon className="BtnIcon" />
                        Annonces
                    </Button>
                    <Button variant="text" className="NavButton Main">
                        <PagesIcon className="BtnIcon" />
                        Ajouter une annonce
                    </Button>
                </div>
            </div>
            <div className="Logout">
                <Button
                    variant="text"
                    className="NavButton Deconnexion"
                    onClick={handleLogout}
                >
                    <LogoutOutlinedIcon className="BtnIcon" />
                    Se déconnecter
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
