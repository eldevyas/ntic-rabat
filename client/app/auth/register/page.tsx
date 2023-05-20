"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/app/core/Loading";
import "./Register.scss";
import RegisterComponent from "./components/Register";

const Register = () => {
    const { data: session, status }: any = useSession();
    const Router = useRouter();

    useEffect(() => {
        if (
            status === "authenticated" &&
            session?.user?.email_verified === true
        ) {
            Router.push("/connect");
        }

        if (
            status === "authenticated" &&
            session?.user?.email_verified === false
        ) {
            Router.push("/auth/confirm-email");
        }
    }, [status]);

    return (
        <>
            {status === "authenticated" || session || status === "loading" ? (
                <Loading />
            ) : (
                <div className="Register">
                    <div className="RegisterContainer">
                        <div className="wrapper">
                            <RegisterComponent />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;
