import React, { useEffect } from "react";
import LoginPage from "../../components/auth/loginPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
    const { data: session, status } = useSession();
    const Router = useRouter();

    useEffect(() => {
        console.table({
            session,
            status,
        });
        if (status === "authenticated") {
            Router.push("/connect");
        }
    }, [status]);

    return <LoginPage />;
};

export default login;
