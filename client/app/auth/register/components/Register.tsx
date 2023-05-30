import React, { useState } from "react";
import BasicInformation from "./base/A. Basic Information";
import Link from "next/link";
import Auth from "@/services/authServices";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Box, Typography } from "@mui/material";

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
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    fontWeight={800}
                    // gutterBottom
                    color={"text.primary"}
                >
                    Inscription à{" "}
                    <Box sx={{ color: "primary.main" }} component={"span"}>
                        {" "}
                        NTIC Rabat
                    </Box>
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    align="center"
                    fontWeight={400}
                    gutterBottom
                    color={"text.secondary"}
                >
                    Inscrivez-vous pour accéder à votre tableau de bord et à vos
                    données.
                </Typography>
            </div>
            <BasicInformation
                confirmStep={handleRegistration}
                isLoading={isLoading}
            />

            <div className="FormFooter">
                <Typography
                    variant="body1"
                    component="p"
                    align="center"
                    fontWeight={500}
                    gutterBottom
                    color={"text.primary"}
                >
                    Vous avez déjà un compte ?{" "}
                    <Box
                        sx={{ color: "primary.main" }}
                        fontWeight={700}
                        component={"span"}
                    >
                        <Link href="/auth/login">Connectez-vous</Link>
                    </Box>
                </Typography>
            </div>
        </form>
    );
}
