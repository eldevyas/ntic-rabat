import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./../utils/MobileMenu";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

export interface IOpenMenu {
    isOpen: boolean;
}

export default function DesktopHeader(props: any) {
    var { links, ...other } = props;

    const [OpenMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setOpenMenu(!OpenMenu);
        }, 200);
    };

    const initial = {
        opacity: 1,
        x: "100%",
        y: 0,
        borderRadius: "500px 0px 0px 500px",
    };
    const animate = { opacity: 1, x: 0, y: 0, borderRadius: "0px 0px 0px 0px" };
    const exit = {
        opacity: 1,
        x: "100%",
        y: 0,
        borderRadius: "500px 0px 0px 500px",
    };

    let LogoSource = props["data-theme"] === "dark" ? "/Logo.png" : "/Logo.png";

    return (
        <>
            <div className="NavBar Mobile" {...other}>
                <div className="Logo">
                    <Image
                        src={LogoSource}
                        alt="Logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="MenuButton">
                    <Button
                        variant="text"
                        className="HeaderButton"
                        onClick={handleClick}
                    >
                        <MenuIcon className="MenuIcon" />
                    </Button>
                </div>
            </div>
            <AnimatePresence>
                {OpenMenu ? (
                    <motion.div
                        className="MenuWrapper"
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={{
                            delay: 0,
                            bordeRadius: { duration: 0 },
                            default: { type: "Tween", stiffness: 100 },
                        }}
                    >
                        <MobileMenu handleClicked={handleClick} />
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
