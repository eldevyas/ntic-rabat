import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@mui/material";

export default function Link(props: any) {
    const [active, setActive] = React.useState(false);
    const Router = useRouter();
    const Pathname = usePathname();

    useEffect(() => {
        if (props.href === Pathname) {
            return setActive(true);
        }
        setActive(false);
    }, [Pathname]);

    useEffect(() => {
        Router.prefetch(props.href);
    }, []);

    return (
        <>
            {active ? (
                <Button
                    color="black"
                    variant="contained"
                    key={props.key}
                    onClick={() => Router.push(props.href)}
                    sx={{
                        border: 1,
                        borderColor: "var(--mui-palette-black-contrastText)",
                        color: "var(--mui-palette-black-contrastText)",
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                            color: "var(--mui-palette-black-contrastText)",
                            borderColor:
                                "var(--mui-palette-black-contrastText)",
                        },
                    }}
                >
                    {props.children || props.text}
                </Button>
            ) : (
                // <Link href={props.href} key={props.key}>
                <Button
                    variant={props.variant}
                    color={props.color}
                    sx={{
                        border: 1,
                        borderColor: "var(--mui-palette-text-secondary)",
                        color: "var(--mui-palette-text-secondary)",
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                            color: "var(--mui-palette-text-primary)",
                            borderColor: "var(--mui-palette-text-primary)",
                        },
                    }}
                >
                    {props.children}
                </Button>
                // </Link>
            )}
        </>
    );
}
