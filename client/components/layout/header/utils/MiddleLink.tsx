import React from "react";
import { DefaultButton } from "../../../core/button";
import { useRouter } from "next/router";

import * as Display from "../../../../services/displayAlert";
export default function Link(props: any) {
    const [active, setActive] = React.useState(false);
    const Router = useRouter();

    React.useEffect(() => {
        if (props.href === window.location.pathname) {
            return setActive(true);
        }
        setActive(false);
    }, []);

    // ChangeRoute function
    const changeRoute = (e: any) => {
        e.preventDefault();
        Router.push(props.href);
    };

    return (
        <>
            {active ? (
                <DefaultButton color="Black">
                    {props.children || props.text}
                </DefaultButton>
            ) : props.href != "/forum" ? (
                <DefaultButton
                    color="Gray"
                    onClick={(e: any) => {
                        changeRoute(e);
                    }}
                >
                    {props.children}
                </DefaultButton>
            ) : (
                <DefaultButton
                    color="Gray"
                    onClick={() =>
                        Display.pushDev(
                            "Fonctionnalité non disponible pour le moment."
                        )
                    }
                >
                    {props.children}
                </DefaultButton>
            )}
        </>
    );
}
