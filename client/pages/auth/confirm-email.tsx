import React, { useState, useEffect, useRef } from "react";
import { GetServerSideProps } from "next";
import Header from "../../components/layout/header/header";
import Background from "../../components/core/Background";
import Footer from "../../components/layout/footer";
import Link from "next/link";
import { DefaultButton, OutlinedButton } from "../../components/core/button";
import Head from "next/head";
import * as Display from "../../services/displayAlert";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import AuthService from "../../services/authServices";

export default function VerificationPage() {
    const router = useRouter();

    const { data: session, status } = useSession();

    const CodeInputRef = useRef<HTMLInputElement>(null);
    const [Code, setCode] = useState<string[]>(["-", "-", "-", "-", "-"]);
    // Email
    const [Email, setEmail] = useState<string>(session?.user?.email || "");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        CodeInputRef.current?.focus();
        // Email from session
        if (session?.user?.email) {
            setEmail(session?.user?.email);
        }
        console.clear();
    }, [Code]);

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
        if (CodeInputRef.current?.value.length === 5) {
            let ConfirmationValidated = await AuthService.ConfirmEmailAddress(
                CodeInputRef.current.value,
                Email
            );
            if (ConfirmationValidated == true) {
                Display.pushSuccess(
                    "Votre adresse e-mail a été confirmée avec succès."
                );
                router.push("/connect");
            } else {
                Display.pushFailure(
                    "Le code de confirmation est invalide. Veuillez réessayer."
                );
            }
        }
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
            console.log(res);
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
            <Header />

            <div className="Content">
                <div className="Text">
                    <h1 className="Title">Confirmez votre e-mail.</h1>
                    <p className="Paragraph">
                        Veuillez confirmer votre adresse e-mail en vérifiant
                        votre boîte de réception sur{" "}
                        <a
                            href="https://login.microsoftonline.com/"
                            className="Bold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Microsoft
                        </a>{" "}
                        à l'adresse <span className="Bold">{Email}</span>.
                    </p>

                    <p className="Paragraph">
                        Nous avons envoyé votre code d'accès à cette adresse. Si
                        vous ne trouvez pas notre message dans votre boîte de
                        réception, veuillez vérifier vos dossiers de courrier
                        indésirable. Merci!
                    </p>
                </div>
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

                <div className="Buttons">
                    <OutlinedButton color="LightBlue" onClick={signOut}>
                        Se déconnecter
                    </OutlinedButton>
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
                        <>
                            <OutlinedButton
                                color="LightBlue"
                                onClick={handleCodeResending}
                            >
                                Re-envoyer le code
                            </OutlinedButton>
                        </>
                    )}

                    <DefaultButton
                        color="Blue"
                        onClick={handleCodeConfirmation}
                    >
                        Confirmer
                    </DefaultButton>
                </div>
            </div>
            <Footer />
        </div>
    );
}
VerificationPage.auth = true;
