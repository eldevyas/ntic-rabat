import React from "react";
import Image from "next/image";
import MobileMenu from "./../utils/MobileMenu";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { MobileUser } from "../../../core/auth/User";

export interface IOpenMenu {
    isOpen: boolean;
}

export default function MobileHeader(props: any) {
    const { data: session, status }: any = useSession();

    const Router = useRouter();
    var { links, ...other } = props;

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
                        onClick={() => Router.push("/")}
                    />
                </div>

                {status != "authenticated" && (
                    <div className="MenuButton">
                        <MobileMenu />
                    </div>
                )}
                {status == "authenticated" && (
                    <div className="MenuButton">
                        <MobileUser />
                    </div>
                )}
            </div>
        </>
    );
}
