import React from "react";
import { DefaultButton } from "../../../core/Button";
import { useRouter, usePathname } from "next/navigation";

import * as Display from "../../../../services/displayAlert";
export default function Link(props: any) {
    const [active, setActive] = React.useState(false);
    const Router = useRouter();
    const Pathname = usePathname();

    React.useEffect(() => {
        if (props.href === Pathname) {
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
            ) : (
                <DefaultButton
                    color="Gray"
                    onClick={(e: any) => {
                        changeRoute(e);
                    }}
                >
                    {props.children}
                </DefaultButton>
            )}
        </>
    );
}
