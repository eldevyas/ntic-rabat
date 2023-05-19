import React, { useState } from "react";
import BasicInformation from "./base/A. Basic Information";
import Link from "next/link";
import Auth from "@/services/authServices";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterComponent(props: any) {
    const Router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [Credentials, setCredentials] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const handleRegistration = (Credentials: any) => {
        setCredentials(Credentials);
        let Register = Auth.Register(Credentials);
        setIsLoading(true);

        if (Register != null) {
            Register.then((res: any) => {
                // is loading
                setIsLoading(false);
                signIn(
                    "credentials",
                    {
                        email: Credentials.email,
                        password: Credentials.password,
                        redirect: false,
                    },
                    { callbackUrl: "/auth/confirm-email" }
                );
                if (res) {
                    Router.push("/auth/confirm-email");
                }
            });
        }
    };

    return (
        <form className="Form">
            <div className="FormTitle">
                <h1>
                    Inscription à <span>NTIC Connect</span>
                </h1>
                <p>
                    Inscrivez-vous pour accéder à votre tableau de bord et à vos
                    données.
                </p>
            </div>
            <BasicInformation
                confirmStep={handleRegistration}
                isLoading={isLoading}
            />

            <div className="FormFooter">
                <p>
                    Vous avez déjà un compte ?{" "}
                    <Link href="/auth/login">Connectez-vous</Link>
                </p>
            </div>
        </form>
    );
}
