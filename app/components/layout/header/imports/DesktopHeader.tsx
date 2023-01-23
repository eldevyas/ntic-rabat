import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "./../utils/MiddleLink";
import { DefaultButton } from "./../../../core/button";
import * as Display from "../../../../services/displayAlert";
export default function DesktopHeader(props: any) {
    const Router = useRouter();

    const MiddleLinks: {
        href: String;
        text: String;
    }[] = props.links;

    // let LogoSource = props["data-theme"] === "dark" ? "/Logo.png" : "/Logo.png";

    return (
        <header className="Header Desktop" {...props}>
            <div className="Start Logo">
                <Image
                    src="/Logo.png"
                    width={100}
                    height={100}
                    alt="Logo"
                    priority
                    onClick={() => Router.push("/")}
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
                <DefaultButton
                    bgColor="LightGreen"
                    onClick={() => {
                        Display.pushDev(
                            "Fonctionnalité non disponible pour le moment."
                        );
                    }}
                >
                    {"S'inscrire"}
                </DefaultButton>
                <DefaultButton
                    bgColor="Green"
                    onClick={() => {
                        Router.push("/login");
                    }}
                >
                    Se Connecter
                </DefaultButton>
            </div>
        </header>
    );
}
