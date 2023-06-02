"use client";

// Next Auth Session Provider
import { SessionProvider } from "next-auth/react";
("@nextui-org/react");
import { Flip } from "react-toastify";
import React from "react";
//
//
// Components
import { ToastContainer } from "react-toastify";
import ProgressBar from "next-nprogress-bar";
import { ThemingProvider } from "./layout/Theming.provider";

type Props = {
    children?: React.ReactNode;
};

// NextAuth
export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

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

// Mega Provider
export const MegaProvider = ({ children }: Props) => {
    return (
        <NextAuthProvider>
            {/* Progress Bar on Top of the Page */}
            <ProgressIndicator />
            {/* Notifications Container */}
            <CustomToastContainer />
            <ThemingProvider>{children}</ThemingProvider>
        </NextAuthProvider>
    );
};
export default MegaProvider;
