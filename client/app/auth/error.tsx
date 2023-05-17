import React from "react";
import { useRouter } from "next/router";
import { DefaultButton, OutlinedButton } from "../../components/core/button";

export default function error() {
    // Get error from URL query
    //
    const query = useRouter().query;
    const Router = useRouter();

    const error = query.error ? query.error : "";
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
