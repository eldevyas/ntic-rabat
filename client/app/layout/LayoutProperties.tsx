"use client";

import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Background from "@/app//core/Background";
import Navigation from "./interface/Navigation";
import { ToastContainer } from "react-toastify";
import { Flip } from "react-toastify";
import ProgressBar from "next-nprogress-bar";

const ProgressIndicator = () => {
    return (
        <>
            <ProgressBar
                color="#39b54a"
                height="5px"
                options={{ showSpinner: false }}
                appDirectory
            />
        </>
    );
};

const CustomToastContainer = () => {
    return (
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={true}
            pauseOnHover
            transition={Flip}
            limit={3}
        />
    );
};

const Layout = (props: any) => {
    const Pathname: string = usePathname() as string;
    const { data: status }: any = useSession();

    return (
        <>
            {/* Progress Bar on Top of the Page */}
            <ProgressIndicator />
            {/*  */}
            {/*  */}
            {/* Notifications Container */}
            <CustomToastContainer />
            {/*  */}
            {/*  */}
            {/* Layout for all pages except connect page  */}
            {!Pathname.startsWith("/connect") && <Background />}
            {/*  */}
            {!Pathname.startsWith("/connect") && status !== "loading" && (
                <Header />
            )}
            {/*  */}
            {!Pathname.startsWith("/connect") && <>{props.children}</>}
            {/*  */}
            {!Pathname.startsWith("/connect") && status !== "loading" && (
                <Footer />
            )}
            {/*  */}
            {/*  */}
            {/* Layout for connect page  */}
            {Pathname.startsWith("/connect") && status !== "loading" && (
                <Navigation>{props.children}</Navigation>
            )}
        </>
    );
};

export default Layout;
