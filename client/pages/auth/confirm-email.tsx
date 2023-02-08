import React, { useState, useEffect, useRef } from "react";
import { GetServerSideProps } from "next";
import Header from "../../components/layout/header/header";
import Background from "../../components/core/Background";
import Footer from "../../components/layout/footer";
import Link from "next/link";
import { DefaultButton, OutlinedButton } from "../../components/core/button";
import Head from "next/head";
import * as Display from "../../services/displayAlert";
import { useSession } from "next-auth/react";

export default function VerificationPage() {
    const { data: session, status } = useSession();

    const CodeInputRef = useRef<HTMLInputElement>(null);
    const [Code, setCode] = useState<string[]>(["-", "-", "-", "-", "-"]);

    useEffect(() => {
        CodeInputRef.current?.focus();
        console.clear();
        console.table({
            Value: CodeInputRef.current?.value,
            Code: Code,
        });
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
            // Only numbers are allowed
            // No dots
            // No commas
            // No spaces
            // No letters
            CodeInputRef.current.value = CodeInputRef.current.value.replace(
                /[^0-9]/g,
                ""
            );
            // Value shall not bypass 5 numbers
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

    //
    //
    // Function to handle code confirmation
    //
    const handleCodeConfirmation = () => {
        //
        // Code to handle code confirmation
        //
        Display.pushInfo("Code de confirmation envoyé avec succès.");
    };

    //
    // Function to handle code re-sending
    //
    const handleCodeResending = () => {
        //
        // Code to handle code re-sending
        //
        Display.pushInfo("Code de confirmation envoyé avec succès.");
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
                {
                    // If user is not logged in
                    status
                }
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
                        à l'adresse{" "}
                        <span className="Bold">smith.john@ofppt-edu.ma</span>.
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
                    <OutlinedButton
                        color="LightBlue"
                        onClick={handleCodeResending}
                    >
                        Re-envoyer le code
                    </OutlinedButton>
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
