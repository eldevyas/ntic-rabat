"use client";

import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import * as Display from "@/services/displayAlert";
import LoadingButton from "@mui/lab/LoadingButton";
import EmailIcon from "@mui/icons-material/Email";
import { Typography } from "@mui/material";

// Styling
import "./Style.scss";

const ForgotPassword = () => {
    const email = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const handleResetPassword = async () => {
        try {
            setLoading(true);
            const link = process.env.SERVER_PUBLIC_API_URL;
            const res: any = await fetch(`${link}/auth/forget-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.current?.value,
                }),
            });
            if (res.status === 200) {
                Display.pushSuccess("Un email vous a été envoyé");
                setLoading(false);
            } else if (res.status === 401) {
                Display.pushFailure("Email introuvable");
                setLoading(false);
            } else {
                Display.pushFailure("Une erreur est survenue");
                setLoading(false);
            }
        } catch (err: any) {
            Display.pushFailure("Une erreur est survenue " + err.message);
            setLoading(false);
        }
    };
    return (
        <div className="ForgotPassword">
            <div className="Container">
                <div className="Form">
                    <div className="FormTitle">
                        <Typography
                            variant="h4"
                            component="h4"
                            align="center"
                            fontWeight={600}
                            gutterBottom
                            color={"text.primary"}
                        >
                            Récupérez votre accès à{" "}
                            <Typography
                                variant="h4"
                                component="h4"
                                align="center"
                                fontWeight={600}
                                gutterBottom
                                color={"primary"}
                            >
                                Ntic Connect
                            </Typography>
                        </Typography>

                        {/* <p> */}
                        <Typography
                            variant="body1"
                            component="p"
                            align="center"
                            fontWeight={400}
                            gutterBottom
                            color={"text.secondary"}
                        >
                            Entrez votre adresse email enregistrée avec votre
                            compte Ntic Rabat pour recevoir un lien de
                            réinitialisation de mot de passe. Nous vous aiderons
                            à retrouver l'accès à votre compte en toute
                            sécurité.
                        </Typography>
                        {/* </p> */}
                    </div>
                    <div className="Form-group">
                        <div className="Input Username">
                            <div className="Input-icon">
                                <EmailIcon />
                            </div>
                            <input
                                type="email"
                                ref={email}
                                className="form-control"
                                placeholder="Addresse Email"
                                required
                                // if the user taps on enter, the form will be submitted
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        handleResetPassword();
                                    }
                                }}
                            ></input>
                        </div>
                    </div>
                    {loading ? (
                        <LoadingButton
                            variant="contained"
                            loading
                            loadingPosition="center"
                            className="btnPrimary Loading"
                        />
                    ) : (
                        <Button
                            variant="text"
                            className="btnPrimary"
                            onClick={handleResetPassword}
                        >
                            Réinitialiser le mot de passe
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
