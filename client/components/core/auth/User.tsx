import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DefaultButton } from "../button";
import { signOut, useSession } from "next-auth/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useRouter } from "next/router";
import { User as UserAvatar, Dropdown, Text, Avatar } from "@nextui-org/react";

const User = () => {
    const Router = useRouter();
    const { data: session, status }: any = useSession();

    const Data = {
        image: session.user.profile_picture,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
    };

    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <UserAvatar
                    src={Data.image}
                    name={Data.name}
                    description={Data.role}
                    size="lg"
                    as="button"
                    squared
                    bordered
                />
            </Dropdown.Trigger>
            <Dropdown.Menu
                aria-label="User menu actions"
                color="default"
                onAction={(actionKey) => console.log({ actionKey })}
            >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text color="inherit" css={{ d: "flex" }}>
                        Connecté en tant que
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                        {Data.email}
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="Profile" color="default" withDivider>
                    <Text
                        b
                        color="inherit"
                        css={{ d: "flex" }}
                        onClick={() => {
                            Router.push("/connect/profile");
                        }}
                    >
                        Profile
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="Logout" color="error" withDivider>
                    <Text
                        b
                        color="inherit"
                        css={{ d: "flex" }}
                        onClick={() => {
                            // sign out
                            signOut();
                        }}
                    >
                        Se déconnecter
                    </Text>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const MobileUser = () => {
    const Router = useRouter();
    const { data: session, status }: any = useSession();

    const Data = {
        image: session.user.profile_picture,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
    };

    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <Avatar
                    src={Data.image}
                    size="lg"
                    as="button"
                    squared
                    bordered
                    css={{
                        color: "var(--C3)",
                    }}
                />
            </Dropdown.Trigger>
            <Dropdown.Menu
                aria-label="User menu actions"
                color="default"
                onAction={(actionKey) => console.log({ actionKey })}
            >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text color="inherit" css={{ d: "flex" }}>
                        Connecté en tant que
                    </Text>
                    <Text
                        b
                        color="inherit"
                        transform="capitalize"
                        css={{ d: "flex" }}
                    >
                        {Data.name}
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="Accueil" color="default" withDivider>
                    <Text
                        color="inherit"
                        css={{ d: "flex" }}
                        onClick={() => {
                            Router.push("/");
                        }}
                    >
                        Accueil
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="Emplois" color="default">
                    <Text
                        color="inherit"
                        css={{ d: "flex" }}
                        onClick={() => {
                            Router.push("/connect/profile");
                        }}
                    >
                        Emplois
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="Profile" color="default">
                    <Text
                        color="inherit"
                        css={{ d: "flex" }}
                        onClick={() => {
                            Router.push("/connect/profile");
                        }}
                    >
                        Connect
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="Profile" color="default">
                    <Text
                        color="inherit"
                        css={{ d: "flex" }}
                        onClick={() => {
                            Router.push("/connect/profile");
                        }}
                    >
                        Profile
                    </Text>
                </Dropdown.Item>
                <Dropdown.Item key="Logout" color="error" withDivider>
                    <Text
                        b
                        color="inherit"
                        css={{ d: "flex" }}
                        onClick={() => {
                            // sign out
                            signOut();
                        }}
                    >
                        Se déconnecter
                    </Text>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default User;
export { User, MobileUser };
