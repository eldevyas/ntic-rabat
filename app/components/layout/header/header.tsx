import React from "react";
import Image from "next/image";

// MUI Button
import Button from "@mui/material/Button";
import { DefaultButton } from "../../core/button";
import Link from "./utils/MiddleLink";

const MiddleLinks: {
    href: String;
    text: String;
}[] = [
        {
            href: "/",
            text: "Accueil",
        },
        {
            href: "/emplois",
            text: "Emplois",
        },
        {
            href: "/forum",
            text: "Forum",
        },
        {
            href: "/contact",
            text: "Contact",
        },
    ];

function Header() {
    return (
        <>
            {/* Tailwind header, logo Image, 4 middle button links, and 2 buttons in the end */}
            <header className="Header">
                <div className="Start Logo">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        alt="Logo"
                        priority
                    />
                </div>
                <div className="Middle">
                    {MiddleLinks.map((middleLink, index) => (
                        <Link
                            key={index}
                            href={middleLink.href}
                            text={middleLink.text}
                        >
                            {middleLink.text}
                        </Link>
                    ))}
                </div>
                <div className="End">
                    <a href="/connexion">
                        <DefaultButton bgColor="LightGreen">
                            {"S'inscrire"}
                        </DefaultButton>
                    </a>
                    <DefaultButton bgColor="Green">Se Connecter</DefaultButton>
                </div>
            </header>
        </>
    );

}
function DarkHeader() {
    return (
        <>
            {/* Tailwind header, logo Image, 4 middle button links, and 2 buttons in the end */}
            <header className="DarkHeader">
                <div className="Start Logo">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        alt="Logo"
                        priority
                    />
                </div>
                <div className="End">
                    {MiddleLinks.map((middleLink, index) => (
                        <Link
                            key={index}
                            href={middleLink.href}
                            text={middleLink.text}
                        >
                            {middleLink.text}
                        </Link>
                    ))}
                </div>
            </header>
        </>
    );
}

export { DarkHeader, Header };
