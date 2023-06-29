"use client";

import React, { useState, useEffect, useRef } from "react";
import { DefaultButton, OutlinedButton } from "@/app/core/Button";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import LoadingButton from "@mui/lab/LoadingButton";
//
//
// Services
import AuthService from "@/services/authServices";
import * as Display from "@/services/displayAlert";
//
// Styling
import "./Style.scss";
import { Box, Button, Typography } from "@mui/material";
import { Check, DirectInbox, DirectboxSend, Logout } from "iconsax-react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function VerificationPage() {
    // Auth Session
    const { data: session, status, update } = useSession();
    const Router = useRouter();

    // ...
    const CodeInputRef = useRef<HTMLInputElement>(null);
    const [Code, setCode] = useState<string[]>(["-", "-", "-", "-", "-"]);
    // Email
    const [Email, setEmail] = useState<string>(session?.user?.email || "");
    const [isLoading, setLoading] = useState(false);
    const [isLoadingRequest, setLoadingRequest] = useState(false);

    useEffect(() => {
        CodeInputRef.current?.focus();
        // Email from session
        if (session?.user?.email) {
            setEmail(session?.user?.email);
        }
        console.clear();
    }, [Code]);

    useEffect(() => {
        // Prefetch Connect Page
        Router.prefetch("/connect");
    }, []);

    const getCode = (value: string) => {
        const code = value.split("");
        if (code.length === 5) {
            return code;
        } else if (code.length > 5) {
            return code.slice(0, 5);
        } else {
            return code.concat(Array(5 - code.length).fill("-"));
        }
    };

    const handleCodeInput = () => {
        if (CodeInputRef.current) {
            CodeInputRef.current.value = CodeInputRef.current.value.replace(
                /[^0-9]/g,
                ""
            );
            if (CodeInputRef.current.value.length > 5) {
                CodeInputRef.current.value = CodeInputRef.current.value.slice(
                    0,
                    5
                );
            }
            setCode(getCode(CodeInputRef.current.value));
        } else {
            setCode(["-", "-", "-", "-", "-"]);
        }
    };

    const handleCodeConfirmation = async () => {
        if (CodeInputRef.current?.value.length !== 5) {
            return Display.pushFailure(
                "Veuillez entrer un code de confirmation valide."
            );
        }

        if (Email === "") {
            // Email from session
            if (session?.user?.email) {
                setEmail(session?.user?.email);
            }
            return Display.pushWarning("Aucun e-mail n'a été trouvé.");
        }

        setLoadingRequest(true);
        await fetch("/api/auth/confirm-email", {
            method: "POST",
            body: JSON.stringify({
                code: CodeInputRef.current.value,
                email: Email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((Result) => {
                setLoadingRequest(true);
                if (Result.status === 200) {
                    Display.pushSuccess(
                        "Votre adresse e-mail a été confirmée avec succès."
                    );
                    update({
                        user: {
                            email_verified: true,
                        },
                    });
                    setLoadingRequest(false);
                    Router.push('/connect');
                    
                } else {
                    setLoadingRequest(false);
                    Display.pushFailure(
                        "Le code de confirmation est invalide. Veuillez réessayer."
                    );
                }
            })
            .catch(() => {
                setLoadingRequest(false);
                Display.pushFailure(
                    "Une erreur s'est produite lors de la confirmation de votre adresse e-mail. Veuillez réessayer."
                );
            });
    };

    // Function to handle code re-sending

    const handleCodeResending = async () => {
        try {
            setLoading(true);
            const res: any = await fetch(
                `${process.env.SERVER_PUBLIC_API_URL}/auth/resend-confirmation`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: Email,
                    }),
                }
            );
            if (res.status === 200) {
                Display.pushSuccess("Code de confirmation envoyé avec succès.");
            } else {
                Display.pushFailure(
                    "Une erreur s'est produite lors de l'envoi du code de confirmation."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="VerificationPage">
            <Head>
                <title>NTIC Rabat - Confirmez votre e-mail</title>
                <meta
                    name="description"
                    content="Confirmez votre e-mail pour accéder à votre compte."
                />
            </Head>

            <div className="Content">
                <Box
                    sx={{
                        textAlign: "center",
                    }}
                >
                    <DirectInbox
                        size="64"
                        color="var(--mui-palette-primary-main)"
                        variant="Bulk"
                    />
                    <Typography
                        variant="h4"
                        component="h1"
                        color="primary.main"
                        fontWeight={"bold"}
                        textAlign={"center"}
                        alignItems="center"
                        gutterBottom
                    >
                        Confirmez votre Email{" "}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        color="text.secondary"
                        gutterBottom
                    >
                        Veuillez confirmer votre adresse e-mail en vérifiant
                        votre boîte de réception sur{" "}
                        <a
                            href="https://login.microsoftonline.com/"
                            className="Bold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Typography
                                variant="body1"
                                component="span"
                                color="secondary.main"
                                fontWeight={"bold"}
                            >
                                Microsoft
                            </Typography>
                        </a>{" "}
                        à l'adresse{" "}
                        <Typography
                            variant="body1"
                            component="span"
                            color="secondary.main"
                            fontWeight={"bold"}
                        >
                            {Email}
                        </Typography>
                        .
                    </Typography>

                    <Typography
                        variant="body1"
                        component="p"
                        color="text.secondary"
                        gutterBottom
                    >
                        Nous avons envoyé votre code d'accès à cette adresse. Si
                        vous ne trouvez pas notre message dans votre boîte de
                        réception, veuillez vérifier vos dossiers de courrier
                        indésirable. Merci!
                    </Typography>
                </Box>
                <div className="CodeContainer">
                    <div className="Code">
                        {Code.map((code, index) => (
                            <span
                                key={index}
                                className={
                                    "CodeNumber " +
                                    (code === "-" ? "Empty" : "Filled") +
                                    // Current index
                                    (index ===
                                        CodeInputRef.current?.value.length
                                        ? " Current"
                                        : "")
                                }
                                onClick={() => {
                                    console.log(
                                        "Clicked Code with index [" +
                                        index +
                                        "]."
                                    );
                                    CodeInputRef.current?.focus();
                                }}
                                onFocus={() => {
                                    CodeInputRef.current?.focus();
                                }}
                            >
                                {code}
                            </span>
                        ))}
                    </div>
                    <input
                        type="text"
                        className="CodeInput"
                        ref={CodeInputRef}
                        onChange={() => {
                            handleCodeInput();
                            // select last
                            CodeInputRef.current?.setSelectionRange(
                                CodeInputRef.current?.value.length,
                                CodeInputRef.current?.value.length
                            );
                        }}
                    />
                </div>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {isLoadingRequest ? (
                        <LoadingButton
                            variant="contained"
                            loadingPosition="center"
                            loading
                            sx={{
                                cursor: "loading !important",
                                minHeight: "50px",
                                backgroundColor:
                                    "var(--mui-palette-primary-main) !important",
                                background:
                                    "var(--mui-palette-primary-main) !important",
                                width: "100%",
                                marginBottom: "0.75rem",
                                color: "white",
                                svg: {
                                    color: "white",
                                    fill: "white",
                                },
                            }}
                        />
                    ) : (
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleCodeConfirmation}
                            startIcon={
                                <Check variant="Bulk" size="28" color="white" />
                            }
                            sx={{
                                width: "100%",
                                marginBottom: "0.75rem",
                            }}
                        >
                            Confirmer
                        </Button>
                    )}
                    {isLoading ? (
                        <LoadingButton
                            variant="contained"
                            loadingPosition="center"
                            loading
                            sx={{
                                cursor: "loading !important",
                                minHeight: "50px",
                                backgroundColor:
                                    "var(--mui-palette-primary-main) !important",
                                background:
                                    "var(--mui-palette-primary-main) !important",
                                width: "100%",
                                marginBottom: "0.75rem",
                                color: "white",
                                svg: {
                                    color: "white",
                                    fill: "white",
                                },
                            }}
                        />
                    ) : (
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={handleCodeResending}
                            sx={{
                                width: "100%",
                                marginBottom: "0.75rem",
                            }}
                            startIcon={
                                <DirectboxSend
                                    variant="Bulk"
                                    size="28"
                                    color="var(--mui-palette-primary-main)"
                                />
                            }
                        >
                            Re-envoyer le code
                        </Button>
                    )}
                    <Button
                        color="primary"
                        variant="outlined"
                        startIcon={
                            <Logout
                                variant="Bulk"
                                size="28"
                                color="var(--mui-palette-primary-main)"
                            />
                        }
                        onClick={() => {
                            signOut();
                        }}
                        sx={{
                            width: "100%",
                            marginBottom: "0.75rem",
                        }}
                    >
                        Se déconnecter
                    </Button>
                </Box>
            </div>
        </div>
    );
}

VerificationPage.auth = true;
