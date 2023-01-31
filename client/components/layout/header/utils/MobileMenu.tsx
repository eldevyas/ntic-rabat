import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
// Items Icons
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupsIcon from "@mui/icons-material/Groups";
import PhoneIcon from "@mui/icons-material/Phone";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
//
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function MobileMenu(props: any) {
    const Items: {
        href: String;
        icon: any;
        title: String;
        positionLeft: String;
        positionTop: String;
        pages?: {
            title: string;
            href: string;
        }[];
    }[] = [
        {
            href: "/",
            icon: <HomeIcon />,
            title: "Accueil",
            positionLeft: "0%",
            positionTop: "0%",
        },
        {
            href: "/emplois",
            icon: <CalendarTodayIcon />,
            title: "Emplois",
            positionLeft: "50%",
            positionTop: "0%",
        },
        {
            href: "/forum",
            icon: <GroupsIcon />,
            title: "Forum",
            positionLeft: "0%",
            positionTop: "calc(100%/3 * 1)",
        },
        {
            href: "/#contact",
            icon: <PhoneIcon />,
            title: "Contact",
            positionLeft: "50%",
            positionTop: "calc(100%/3 * 1)",
        },
        {
            href: "/register",
            icon: <ExitToAppIcon />,
            title: "S'inscrire",
            positionLeft: "0%",
            positionTop: "calc(100%/3 * 2)",
        },
        {
            href: "/login",
            icon: <LoginIcon />,
            title: "Se Connecter",
            positionLeft: "50%",
            positionTop: "calc(100%/3 * 2)",
        },
    ];

    const Router = useRouter();
    const { pathname, asPath, query } = Router;
    const handleClicked = props.handleClicked;
    const [positionX, setPositionX] = useState("");
    const [positionY, setPositionY] = useState("");

    const Container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let CurrentURL = "/" + Router.pathname.split("/")[1];

        Items.forEach((item) => {
            if (item.href == CurrentURL) {
                ChangePosition(item.positionLeft, item.positionTop);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const ChangeRoute = (Link: any) => {
        Router.push(Link);
        props.handleClicked();
    };

    const ChangePosition = (X: String, Y: String) => {
        if (Container.current != null) {
            // 👉️ TypeScript knows that ref is not null here
            let Width = Container.current.offsetWidth;
            let Height = Container.current.offsetHeight;

            switch (X) {
                case "0%":
                    setPositionX("0px");
                    break;
                case "50%":
                    setPositionX(String(Width / 2) + "px");
                    break;
            }

            switch (Y) {
                case "0%":
                    setPositionY("0px");
                    break;
                case "calc(100%/3 * 1)":
                    setPositionY(String((Height / 3) * 1) + "px");
                    break;
                case "calc(100%/3 * 2)":
                    setPositionY(String((Height / 3) * 2) + "px");
                    break;
            }
        }
    };

    const handleClickItem = (e: any) => {
        const TargetData: {
            id: String;
            href: String;
            positionLeft: String;
            positionTop: String;
        } = {
            id: e.target.id,
            href: e.target.getAttribute("data-href"),
            positionLeft: e.target.getAttribute("data-positionleft"),
            positionTop: e.target.getAttribute("data-positiontop"),
        };

        // Get all the Items and remove their red color
        const itemDivs = document.querySelectorAll(".Items .Item");

        for (let i = 0; i < itemDivs.length; i++) {
            const item: any = itemDivs[i];
            item.style.color = "#fff";
        }

        // Add the red color to the current item
        setTimeout(() => {
            e.target.style.color = "#fff";
        }, 100);

        let X = TargetData.positionLeft;
        let Y = TargetData.positionTop;
        ChangePosition(X, Y);
        ChangeRoute(TargetData.href);
    };

    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const exit = { opacity: 0 };

    return (
        <>
            <div key="modal" className="MobileMenu">
                <div className="Main">
                    <div className="Logo">
                        <Image
                            src="/Logo.png"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <Button
                        variant="outlined"
                        className="CloseButton"
                        onClick={handleClicked}
                    >
                        <CloseIcon className="MenuIcon" />
                    </Button>
                </div>

                <AnimatePresence>
                    <div className="Items" ref={Container} dir="ltr">
                        {Items.map((Item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="Item"
                                    id={`${index}`}
                                    data-href={Item.href}
                                    onClick={(e: any) => {
                                        handleClickItem(e);
                                    }}
                                    data-positionleft={Item.positionLeft}
                                    data-positiontop={Item.positionTop}
                                >
                                    {Item.icon}
                                    {Item.title}
                                </div>
                            );
                        })}

                        <motion.div
                            className="Current"
                            id="Current"
                            initial="false"
                            animate={{ x: positionX, y: positionY }}
                        ></motion.div>
                    </div>
                </AnimatePresence>
            </div>
        </>
    );
}
