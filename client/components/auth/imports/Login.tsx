import React, { useState, useRef, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityOn from "@mui/icons-material/Visibility";

import * as Display from "../../../services/displayAlert";
import { redirect } from "react-router";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

import CryptoJS from "crypto-js";

const LoginComponent = () => {
    const Router = useRouter();
    const emailRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();
    const rememberMeRef = React.createRef<HTMLInputElement>();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [Error, setError] = useState<{}>({
        variant: "Error",
        message:
            "Une erreur s'est produite lors de la connexion. Veuillez réessayer.",
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        const username = emailRef?.current?.value;
        const password = passwordRef?.current?.value;
        const isRememberMe = rememberMeRef?.current?.checked;
        if (username && password) {
            const Credentials = {
                email: username,
                password: password,
                rememberMe: isRememberMe,
            };

            try {
                setLoading(true);
                const res: any = await signIn("credentials", {
                    email: Credentials.email,
                    password: Credentials.password,
                    redirect: false,
                });
                console.log(res);
                if (res.status !== 200 && !res.ok) {
                    // Inspect Error codes
                    if (res.status === 401) {
                        return Display.pushFailure(
                            "Nom d'utilisateur ou mot de passe incorrect."
                        );
                    }
                    if (res.status === 500) {
                        return Display.pushFailure(
                            "Une erreur s'est produite lors de la connexion. Veuillez réessayer."
                        );
                    }
                    // 403
                    if (res.status === 403) {
                        // redirect to email confirmation page with email as a parameter

                        // hash the parameter email
                        const hash = CryptoJS.SHA256(
                            Credentials.email
                        ).toString();
                        Router.push({
                            pathname: "/auth/confirm-email",
                            query: { email: hash },
                        });
                        // Should confirm his email adresse
                        return Display.pushFailure(
                            "Veuillez confirmer votre adresse e-mail."
                        );
                    }

                    // 404
                    if (res.status === 404) {
                        return Display.pushFailure(
                            "Nom d'utilisateur ou mot de passe incorrect."
                        );
                    }

                    return Display.pushFailure(
                        "Nom d'utilisateur ou mot de passe incorrect."
                    );
                } else {
                    Display.pushSuccess("Connexion réussie!");
                }
            } finally {
                setLoading(false);
            }
        } else {
            if (!username && !password) {
                Display.pushWarning(
                    "Veuillez entrer votre nom d'utilisateur et votre mot de passe."
                );
            } else if (!username) {
                Display.pushWarning("Veuillez entrer votre nom d'utilisateur.");
                return;
            } else if (!password) {
                Display.pushWarning("Veuillez entrer votre mot de passe.");
                return;
            }
        }
    };

    return (
        <div className="Form">
            <div className="FormTitle">
                <h1>
                    Connexion sur <span>NTIC Connect</span>
                </h1>
                <p>
                    Connectez-vous à votre compte pour accéder à votre tableau
                    de bord et à vos données.
                </p>
            </div>
            <form className="Form-group">
                <div className="Input Username">
                    <div className="Input-icon">
                        <AccountCircleIcon />
                    </div>
                    <input
                        ref={emailRef}
                        type="username"
                        className="form-control"
                        placeholder="Nom d'utilisateur"
                        required
                    ></input>
                </div>
                <div className="Input Password">
                    <div className="Input-icon">
                        <LockIcon />
                    </div>
                    <input
                        ref={passwordRef}
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Mot de passe"
                        required
                    ></input>
                    <div
                        className="Visibility"
                        onClick={handleClickShowPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <VisibilityOn />}
                    </div>
                </div>
            </form>
            <div className="RememberMe">
                <label className="cont">
                    <input type="checkbox" ref={rememberMeRef} />
                    <span></span>
                </label>
                Se souvenir de moi
            </div>

            {isLoading ? (
                <LoadingButton
                    variant="text"
                    className="btnPrimary Loading"
                    loadingPosition="center"
                    loading
                    sx={{
                        cursor: "default !important",
                    }}
                />
            ) : (
                <Button
                    variant="text"
                    className="btnPrimary"
                    onClick={() => {
                        handleLogin();
                    }}
                >
                    Se Connecter
                </Button>
            )}
            <Button
                variant="text"
                className="btnSecondary"
                onClick={() => {
                    Router.push("/auth/forgot-password");
                }}
            >
                Mot de passe oublié ?
            </Button>
            <div className="FormFooter">
                <p>
                    Vous n'avez pas un compte ?{" "}
                    <Link href="/auth/register">Inscrivez-vous</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;
