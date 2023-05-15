import React, { useState, useEffect } from "react";
import DesktopHeader from "./imports/DesktopHeader";
import MobileHeader from "./imports/MobileHeader";
import {
    Navbar,
    Link,
    Text,
    Avatar,
    Dropdown,
    Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import User from "./../../core/auth/User";

const NavigationLinks: {
    href: String;
    text: String;
}[] = [
    {
        href: "/",
        text: "Accueil",
    },
    {
        href: "/emplois",
        text: "Emplois",
    },
    {
        href: "/connect",
        text: "Connect",
    },
    {
        href: "/#contact",
        text: "Contact",
    },
];

class ResponsiveHeader extends React.Component<{}, { isDesktop: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isDesktop: false,
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1000 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <>
                {isDesktop ? (
                    <DesktopHeader links={NavigationLinks} {...this.props} />
                ) : (
                    <MobileHeader links={NavigationLinks} {...this.props} />
                )}
            </>
        );
    }
}

export default function Header(props: any) {
    return <ResponsiveHeader {...props} />;
}
