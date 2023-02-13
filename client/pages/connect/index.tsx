import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Background from "../../components/core/Background";
import Header from "../../components/layout/header/header";
import Footer from "../../components/layout/footer/footer";
import { DefaultButton, OutlinedButton } from "../../components/core/button";
import Loading from "../../components/core/Loading";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";

const Connect = () => {
    const { data: session, status } = useSession();

    const router = useRouter();

    useEffect(() => {
        console.table({
            session,
            status,
        });
        if (status === "loading") return;
        if (!session || status === ("unauthenticated" as string)) {
            router.push("/auth/login");
        }
        // This is added to return undefined if there is no cleanup to be performed
        return undefined;
    }, [status, session]);

    return (
        <>
            {session && (
                <>
                    <Head>
                        <title>NTIC Connect - Accueil</title>
                    </Head>

                    <div className="Main">
                        <div className="CreatePost">
                            <div className="Profile">
                                <Image
                                    src="/assets/img/pp/pp1.png"
                                    className="Avatar"
                                    alt="profile"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="Form">
                                <div className="Input">
                                    <textarea
                                        placeholder={`Que pensez-vous ? ${
                                            session?.user?.name?.split(" ")[0]
                                        }.`}
                                    ></textarea>
                                </div>
                                <div className="Actions">
                                    <DefaultButton type="primary">
                                        <Image
                                            src="/assets/svg/Design.svg"
                                            alt="Design"
                                            width={20}
                                            height={20}
                                        />
                                        Projet / Réalisation
                                    </DefaultButton>
                                    <DefaultButton type="primary">
                                        <Image
                                            src="/assets/svg/Catalog.svg"
                                            alt="Photo"
                                            width={20}
                                            height={20}
                                        />
                                        Photo / Video
                                    </DefaultButton>
                                    <DefaultButton
                                        type="primary"
                                        size="small"
                                        className="Publish"
                                    >
                                        Publier
                                        <SendIcon fontSize="small" />
                                    </DefaultButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {
                // Show spinner in case
                // the session is loading
                status === "loading" || (!session && <Loading />)
            }
        </>
    );
};

export default Connect;
