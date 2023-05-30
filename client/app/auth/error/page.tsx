"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DefaultButton, OutlinedButton } from "@/app/core/Button";
//
//
// Style
import "./Style.scss";

export default function error() {
    // Get error from URL query
    //
    const searchParams = useSearchParams();
    const QueryError = searchParams?.get("error");
    const Router = useRouter();

    const error = QueryError ? QueryError : "Erreur!";
    return (
        <>
            <div className="ErrorPage">
                <div className="ErrorPage__Title">Erreur</div>
                <div className="ErrorPage__Message">{error}</div>
                {/* Button */}
                <div className="ErrorPage__Buttons">
                    <OutlinedButton
                        color="LightBlue"
                        onClick={() => {
                            Router.back();
                        }}
                    >
                        Revenir
                    </OutlinedButton>
                    <DefaultButton
                        color="Blue"
                        onClick={() => {
                            Router.push("/");
                        }}
                    >
                        Accueil
                    </DefaultButton>
                </div>
            </div>
        </>
    );
}
