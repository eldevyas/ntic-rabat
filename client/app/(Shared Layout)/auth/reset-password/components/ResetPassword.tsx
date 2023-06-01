"use client";
import React, { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityOn from "@mui/icons-material/Visibility";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import "../Login.scss";
import * as Display from "@/services/displayAlert";

import Link from "next/link";

export default function ResetPassword(props: any) {
    // Query
    const token = props.token;
    const Router = useRouter();
    if (!token) {
        Router.push("/auth/login");
    }
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleResetPassword = async () => {
        setLoading(true);
        const password = passwordRef.current?.value;
        const confirmPassword = confirmPasswordRef.current?.value;
        if (password !== confirmPassword) {
            setLoading(false);
            return Display.pushFailure(
                "Les mots de passe ne correspondent pas"
            );
        }
        try {
            const res = await fetch(
                "http://localhost:8000/api/reset-password",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        password,
                        token: token,
                    }),
                }
            );
            const data = await res.json();
            if (data.error) {
                setLoading(false);
                return Display.pushFailure(data.error);
            }
            if (res.status === 404) {
                setLoading(false);
                return Display.pushFailure("Le token est invalide");
            }
            if (res.status === 200) {
                setLoading(false);
                Display.pushSuccess("Mot de passe réinitialisé avec succès");
                Router.push("/auth/login");
            }
        } catch (err: any) {
            setLoading(false);
            Display.pushFailure(err.message);
        }
    };

    return (
        <div className="Login">
            <div className="LoginContainer">
                <form className="Form">
                    <div className="FormTitle">
                        <Typography
                            variant="h5"
                            component="h5"
                            align="center"
                            fontWeight={600}
                            gutterBottom
                            color={"text.primary"}
                        >
                            Connexion sur{" "}
                            <Typography
                                variant="h5"
                                component="span"
                                align="center"
                                fontWeight={600}
                                color={"primary"}
                            >
                                NTIC Connect
                            </Typography>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            align="center"
                            fontWeight={400}
                            gutterBottom
                            color={"text.secondary"}
                        >
                            Connectez-vous à votre compte pour accéder à votre
                            tableau de bord et à vos données.
                        </Typography>
                    </div>
                    <div className="Form-group">
                        <div className="Input Username">
                            <div className="Input-icon">
                                <LockIcon />
                            </div>
                            <input
                                ref={passwordRef}
                                // type="password"
                                className="form-control"
                                placeholder="Mot de pass"
                                type={showPassword ? "text" : "password"}
                                // autoComplete={"username"}
                                required
                            ></input>
                        </div>
                        <div className="Input Password">
                            <div className="Input-icon">
                                <LockIcon />
                            </div>
                            <input
                                ref={confirmPasswordRef}
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Confirmer le mot de passe"
                                autoComplete={"current-password"}
                                required
                            ></input>
                            <div
                                className="Visibility"
                                onClick={handleClickShowPassword}
                            >
                                {/* {showPassword ? <VisibilityOff /> : <VisibilityOn />} */}
                            </div>
                        </div>
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
                                handleResetPassword();
                            }}
                        >
                            Réinitialiser le mot de passe
                        </Button>
                    )}
                    <div className="FormFooter">
                        <Typography
                            variant="body2"
                            component="p"
                            align="center"
                            fontWeight={400}
                            gutterBottom
                            color={"text.secondary"}
                        >
                            Vous n'avez pas un compte ?{" "}
                            <Link href="/auth/register">Inscrivez-vous</Link>
                        </Typography>
                    </div>
                </form>
            </div>
        </div>
    );
}
