import React, { useEffect } from "react";
import LoginPage from "../../components/auth/loginPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
    const { data: session, status }: any = useSession();
    const Router = useRouter();

    useEffect(() => {
        console.table({
            session,
            status,
        });
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

    return <LoginPage />;
};

export default login;
