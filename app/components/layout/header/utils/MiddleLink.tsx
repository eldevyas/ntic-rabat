import React from "react";
import { DefaultButton } from "../../../core/button";
export default function Link(props: any) {
    // State to define wheter the current route is the active or not
    const [active, setActive] = React.useState(false);

    // Function to check if the current route is the active one
    const checkActive = () => {
        if (props.href === window.location.pathname) {
            return setActive(true);
        }
        setActive(false);
    };

    // Check if the current route is the active one on page load
    React.useEffect(() => {
        checkActive();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* Show different button style based on active state */}
            {active ? (

                <a href={props.href}>
                    <DefaultButton
                        variant="contained"
                        color="primary"
                        bgColor="Black"
                    // {...props}
                    >

                        {props.children || props.text}
                    </DefaultButton>
                </a>
            ) : (
                <a href={props.href}>
                    <DefaultButton
                        variant="contained"
                        color="primary"
                        bgColor="Gray"
                    // {...props}
                    >

                        {props.children}
                    </DefaultButton>
                </a>
            )
            }
        </>
    );
}
