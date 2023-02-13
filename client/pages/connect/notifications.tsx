import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Background from "../../components/core/Background";
import Header from "../../components/layout/header/header";
import Footer from "../../components/layout/footer/footer";
import { DefaultButton, OutlinedButton } from "../../components/core/button";
import Loading from "../../components/core/Loading";

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
                        <title>NTIC Connect - Notifications</title>
                    </Head>
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
