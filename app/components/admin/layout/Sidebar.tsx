import React from "react";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Button from "@mui/material/Button";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const Sidebar = () => {
    return (
        <div className="SideBar">
            <div className="ImageContainer">
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    alt="Logo"
                    priority
                />
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
                        <AddBoxOutlinedIcon className="BtnIcon" />
                        Ajouter une annonce
                    </Button>
                </div>
            </div>
            <div className="Logout">
                <Button variant="text" className="NavButton Deconnexion">
                    <LogoutOutlinedIcon className="BtnIcon" />
                    Se déconnecter
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
