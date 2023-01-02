import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// MUI Button
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
    const Router = useRouter();
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
                    <DefaultButton bgColor="LightGreen" onClick={() => { Router.push('/inscription') }}>
                        {"S'inscrire"}
                    </DefaultButton>

                    <DefaultButton bgColor="Green" onClick={() => { Router.push('/connexion') }}>Se Connecter</DefaultButton>
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



// Katsm3?


export { DarkHeader, Header };
