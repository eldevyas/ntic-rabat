import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import SideBar from "./sidebar/SideBar";
import Background from "../core/Background";
import ConnectHeader from "./sidebar/ConnectHeader";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import { DefaultButton } from "../core/button";
const Layout = (props: any) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    return (
        <>
            {/* Layout for all pages except connect page  */}
            {!router.pathname.startsWith("/connect") && <Background />}

            {!router.pathname.startsWith("/connect") && status != "loading" && (
                <Header />
            )}

            {!router.pathname.startsWith("/connect") && <>{props.children}</>}

            {!router.pathname.startsWith("/connect") && status != "loading" && (
                <Footer />
            )}

            {/* Layout for connect page  */}
            {router.pathname.startsWith("/connect") && status != "loading" && (
                <div className="Connect">
                    <SideBar />
                    <div className="Content">
                        <ConnectHeader />
                        <div className="Main">
                            <div className="CreatePost">
                                <div className="Profile">
                                    <Image
                                        src="/assets/img/pp/pp1.png"
                                        alt="profile"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <div className="Form">
                                    <div className="Input">
                                        <textarea
                                            placeholder={`Que pensez-vous ? ${
                                                session?.user?.name?.split(
                                                    " "
                                                )[0]
                                            }.`}
                                        ></textarea>
                                    </div>
                                    <div className="Actions">
                                        <DefaultButton type="primary">
                                            <Image
                                                src="/assets/svg/Design.svg"
                                                alt="Design"
                                                width={20}
                                                height={20}
                                            />
                                            Projet / Réalisation
                                        </DefaultButton>
                                        <DefaultButton type="primary">
                                            <Image
                                                src="/assets/svg/Catalog.svg"
                                                alt="Photo"
                                                width={20}
                                                height={20}
                                            />
                                            Photo / Video
                                        </DefaultButton>
                                        <DefaultButton
                                            type="primary"
                                            size="small"
                                            className="Publish"
                                        >
                                            Publier
                                            <SendIcon fontSize="small" />
                                        </DefaultButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Layout;
