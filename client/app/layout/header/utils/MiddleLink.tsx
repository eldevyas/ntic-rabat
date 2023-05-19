import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@mui/material";

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
                <Button color="black" variant="contained">
                    {props.children || props.text}
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="muted"
                    onClick={(e: any) => {
                        changeRoute(e);
                    }}
                    // startIcon={<props.icon set="bulk" />}
                >
                    {props.children}
                </Button>
            )}
        </>
    );
}
