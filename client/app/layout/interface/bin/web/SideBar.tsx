import React, { useEffect, useState, useRef } from "react";
import { DefaultButton, IconButton } from "@/app/core/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import "./SideBar.scss";

const SideBar = () => {
    const { data: session, status }: any = useSession();
    const Router = useRouter();
    const Pathname: string = usePathname() as string;

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
                    <IconButton
                        color={
                            Pathname.startsWith("/connect")
                                ? "Blue"
                                : "LightBlue"
                        }
                        onClick={() => {
                            if (!Pathname.startsWith("/connect")) {
                                Router.push("/connect");
                            }
                        }}
                    >
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
                            <p className="UserName">
                                {session?.user?.name?.split(" ")[0]}{" "}
                                {session?.user?.name?.split(" ")[1][0]}.
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>

                <NaviationItems />

                <div className="UploadContainer">
                    <div className="Upload">
                        <Image
                            alt=""
                            src="/assets/svg/Plus.svg"
                            width={60}
                            height={60}
                        />
                        <p className="AddProject">Ajouter un projet</p>
                        <p className="SharePotential">
                            Partagez votre potentiel
                        </p>

                        <Button variant="text" className="Hover"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

const NaviationItems = () => {
    // Button Ref
    const Router = useRouter();
    const Pathname = usePathname();

    // Links and Icons
    const Items = [
        { name: "Accueil", icon: "/assets/svg/Accueil.svg", link: "/connect" },
        {
            name: "Messages",
            icon: "/assets/svg/Message.svg",
            link: "/connect/messages",
        },
        {
            name: "Notifications",
            icon: "/assets/svg/Notification.svg",
            link: "/connect/notifications",
        },
    ];

    const [currentLink, setCurrentLink] = useState(Pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentLink(Pathname);
        };
        window.addEventListener("popstate", handleLocationChange);
        return () => {
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);

    return (
        <>
            <div className="Navigation">
                {Items.map((Item, Index) => {
                    return (
                        <div
                            key={Index}
                            className={
                                "NavigationItem " +
                                (Item.link == Pathname ? "Active" : "Inactive")
                            }
                        >
                            <DefaultButton
                                color="white"
                                className={"NavigationName "}
                                onClick={() => {
                                    setCurrentLink(Item.link);
                                    Router.push(Item.link);
                                }}
                            >
                                <Image
                                    alt=""
                                    src={Item.icon}
                                    width={20}
                                    height={20}
                                />
                                {Item.name}
                            </DefaultButton>
                        </div>
                    );
                })}
                <AnimatePresence mode="wait" initial={true}>
                    {Items.map((Item, Index) => {
                        if (currentLink === Item.link) {
                            return (
                                <motion.svg
                                    key={Index}
                                    className="Current"
                                    initial={{ width: 0, y: 57 * Index }}
                                    animate={{
                                        y: 57 * Index,
                                        width: 27,
                                    }}
                                    exit={{ width: 0, y: 57 * Index }}
                                    width="27"
                                    // height={ButtonRef?.current?.height}
                                    viewBox="0 0 27 74"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_d_786_1620)">
                                        <path
                                            d="M9.00213 66C8.44867 66 8 65.5513 8 64.9979L8 9.01217C8 8.45317 8.45316 8.00002 9.01215 8.00002V8.00002C9.38002 8.00002 9.72298 8.20635 9.90007 8.52879C21.8281 30.2459 21.6143 42.9053 9.89244 65.4556C9.72057 65.7863 9.37478 66 9.00213 66V66Z"
                                            fill="url(#paint0_linear_786_1620)"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_786_1620"
                                            x="0"
                                            y="0"
                                            width="26.7656"
                                            height="74"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feMorphology
                                                radius="2"
                                                operator="dilate"
                                                in="SourceAlpha"
                                                result="effect1_dropShadow_786_1620"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="3" />
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="out"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0.160784 0 0 0 0 0.670588 0 0 0 0 0.886275 0 0 0 0.3 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_786_1620"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_786_1620"
                                                result="shape"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_786_1620"
                                            x1="8"
                                            y1="66"
                                            x2="28.8133"
                                            y2="62.1369"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#29ABE2" />
                                            <stop
                                                offset="1"
                                                stop-color="#4BB8E7"
                                            />
                                        </linearGradient>
                                    </defs>
                                </motion.svg>
                            );
                        }
                    })}
                </AnimatePresence>
            </div>
        </>
    );
};
