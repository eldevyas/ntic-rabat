import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DefaultButton } from "../button";
import { signOut } from "next-auth/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useRouter } from "next/router";
import { Avatar, Stack } from "@mui/material";
import { User as UserAvatar, Dropdown, Text } from "@nextui-org/react";

const User = (props: {
    image: string | any;
    name: string | any;
    email: string | any;
    role: string | any;
    token?: string | any;
}) => {
    const Router = useRouter();

    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <UserAvatar
                    src={props.image}
                    text={
                        !props.image || props.image == " "
                            ? (props.name.toLocaleUpperCase() as string)
                            : ""
                    }
                    name={props.name}
                    description={props.role}
                    size="md"
                    as="button"
                    color="primary"
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
                        {props.email}
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

const MobileUser = (props: {
    image: string | any;
    name: string | any;
    email: string | any;
    role: string | any;
    token?: string | any;
}) => {
    const Router = useRouter();

    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <UserAvatar
                    src={props.image}
                    text={
                        !props.image || props.image == " "
                            ? (props.name.toLocaleUpperCase() as string)
                            : ""
                    }
                    name={props.name}
                    description={props.role}
                    size="md"
                    as="button"
                    color="primary"
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
                        {props.email}
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

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
};

export default User;
export { User, MobileUser };
