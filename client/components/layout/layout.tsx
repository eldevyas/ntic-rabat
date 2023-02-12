import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import SideBar from "./sidebar/SideBar";
import Background from "../core/Background";
import ConnectHeader from "./sidebar/ConnectHeader";
import Image from "next/image";

const Layout = (props: any) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    return (
        <>
            {/* Layout for all pages except connect page  */}
            {router.pathname !== "/connect" && <Background />}

            {router.pathname !== "/connect" && status != "loading" && (
                <Header />
            )}
            {router.pathname !== "/connect" && <>{props.children}</>}
            {router.pathname !== "/connect" && status != "loading" && (
                <Footer />
            )}

            {/* Layout for connect page  */}
            {router.pathname === "/connect" && status != "loading" && (
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
                                    <div className="Input"></div>
                                    <div className="Actions"></div>
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
