import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import GroupsIcon from "@mui/icons-material/Groups";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Image from "next/image";
const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="SideBar__Pages">
                <div className="Buttons">
                    <svg
                        width="48"
                        height="12"
                        viewBox="0 0 48 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="6" cy="6" r="6" fill="#FF4940" />
                        <circle cx="24" cy="6" r="6" fill="#FFB51F" />
                        <circle cx="42" cy="6" r="6" fill="#4DEB32" />
                    </svg>
                </div>

                <div className="Pages">
                    <IconButton color="Blue">
                        <GroupsIcon />
                    </IconButton>
                    <IconButton color="LightBlue">
                        <AdminPanelSettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="SideBar__Navigation">
                <div className="SideBar__Navigation__Header">
                    <div className="Logo">
                        <Image
                            alt=""
                            src="/Logo.png"
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="Profile">
                        <Image
                            alt=""
                            src="/assets/img/pp/pp1.png"
                            width={40}
                            height={40}
                            className="Avatar"
                        />
                        <div className="Name">
                            <p className="Greeting">Hello 👋</p>
                            <p className="UserName">John D.</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="Navigation">
                    <div className="NavigationItem">
                        <DefaultButton color="white" className="NavigationName">
                            <Image
                                alt=""
                                src="/assets/svg/Accueil.svg"
                                width={20}
                                height={20}
                            />
                            Accueil
                        </DefaultButton>
                    </div>
                    <div className="NavigationItem">
                        <DefaultButton color="white" className="NavigationName">
                            <Image
                                alt=""
                                src="/assets/svg/Message.svg"
                                width={20}
                                height={20}
                            />
                            Messages
                        </DefaultButton>
                    </div>
                    <div className="NavigationItem">
                        <DefaultButton color="white" className="NavigationName">
                            <Image
                                alt=""
                                src="/assets/svg/Notification.svg"
                                width={20}
                                height={20}
                            />
                            Projets
                        </DefaultButton>
                    </div>
                </div>
                <div className="Upload">
                    <Image
                        alt=""
                        src="/assets/svg/Plus.svg"
                        width={60}
                        height={60}
                    />
                    <p className="AddProject">Ajouter un projet</p>
                    <p className="SharePotential">Partagez votre potentiel</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
