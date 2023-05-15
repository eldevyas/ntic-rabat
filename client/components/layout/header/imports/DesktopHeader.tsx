import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "./../utils/MiddleLink";
import { DefaultButton } from "./../../../core/button";
import * as Display from "../../../../services/displayAlert";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import User from "../../../core/auth/User";

export default function DesktopHeader(props: any) {
    const { data: session, status }: any = useSession();

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
            {/* Hidden on Login and Register Pages */}
            {Router.pathname !== "/auth/login" &&
                Router.pathname !== "/auth/register" && (
                    <div className="End">
                        {
                            // if user is connected
                            session ? (
                                <User
                                    role={session?.user?.role as string}
                                    name={session?.user?.name as string}
                                    email={session?.user?.email as string}
                                    image={session?.user?.image as string}
                                    token={session?.user?.token as string}
                                />
                            ) : (
                                <>
                                    <DefaultButton
                                        color="LightGreen"
                                        onClick={() => {
                                            Router.push("/auth/register");
                                        }}
                                    >
                                        {"S'inscrire"}
                                    </DefaultButton>
                                    <DefaultButton
                                        color="Green"
                                        onClick={() => {
                                            Router.push("/auth/login");
                                        }}
                                    >
                                        Se Connecter
                                    </DefaultButton>
                                </>
                            )
                        }
                    </div>
                )}
        </header>
    );
}
