import React, { useEffect } from "react";
import RegisterPage from "../../components/auth/registerPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loading from "../../components/core/Loading";

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
                <RegisterPage />
            )}
        </>
    );
};

export default Register;
