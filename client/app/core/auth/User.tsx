import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    User as UserAvatar,
    Dropdown,
    Text,
    Avatar,
    Button,
} from "@nextui-org/react";

import {
    Category,
    Home,
    Calendar,
    Login,
    People,
    Calling,
    Logout,
    Password,
    Chat,
    User as UserIcon,
} from "react-iconly";
import { IconButton } from "@mui/material";
import { useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

import { ColorModeContext } from "@/app/providers";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const User = () => {
    const Router = useRouter();
    const { data: session, status }: any = useSession();

    const Data = {
        image: session.user.profile_picture,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
    };

    const toCapitalCase = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const Navigate = (HREF: string) => {
        return Router.push(HREF);
    };

    const colorMode = React.useContext(ColorModeContext);
    const { isDark, type } = useTheme();
    const { setTheme } = useNextTheme();

    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <UserAvatar
                    src={Data.image}
                    name={toCapitalCase(Data.name)}
                    description={toCapitalCase(Data.role)}
                    size="lg"
                    as="button"
                    squared
                    bordered
                />
            </Dropdown.Trigger>
            <Dropdown.Menu
                aria-label="User menu actions"
                color="default"
                onAction={(key) => {
                    return Navigate(key as string);
                }}
            >
                <Dropdown.Section title="Navigation">
                    <Dropdown.Item
                        key="/connect/profile"
                        color="default"
                        description="Consultez ou modifiez votre profil public 🖼️"
                        icon={
                            <UserIcon
                                primaryColor={"var(--nextui-colors-primary)"}
                                set="bulk"
                            />
                        }
                    >
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                        key="/connect/messages"
                        color="default"
                        description="Consultez ou modifiez votre profil public 🖼️"
                        icon={
                            <Chat
                                primaryColor={"var(--nextui-colors-primary)"}
                                set="bulk"
                            />
                        }
                    >
                        Messagerie
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section title="Actions">
                    <Dropdown.Item
                        key="#!"
                        color="default"
                        description="Changer le mode de couleurs."
                        icon={isDark ? <MdDarkMode /> : <MdLightMode />}
                    >
                        <Text
                            b
                            color="inherit"
                            css={{ d: "flex" }}
                            onClick={() => {
                                colorMode.toggleColorMode();
                                setTheme(isDark ? "light" : "dark");
                            }}
                        >
                            Mode {isDark ? "sombre" : "lumineux"}
                        </Text>
                    </Dropdown.Item>
                    <Dropdown.Item
                        key="/"
                        color="error"
                        description="Pensez-vous quitter cet endroit incroyable pour de vrai ?"
                        icon={
                            <Logout
                                primaryColor={"var(--nextui-colors-error)"}
                                set="bulk"
                            />
                        }
                    >
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
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const MobileMenuWithAuth = () => {
    const Router = useRouter();
    const { data: session }: any = useSession();

    const Data = {
        image: session.user.profile_picture,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role,
    };

    const Navigate = (HREF: string) => {
        return Router.push(HREF);
    };

    const colorMode = React.useContext(ColorModeContext);
    const { isDark, type } = useTheme();
    const { setTheme } = useNextTheme();

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
                onAction={(key) => {
                    return Navigate(key as string);
                }}
            >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text small color="inherit" css={{ d: "flex" }}>
                        Bonjour 👋🏻
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
                <Dropdown.Section title="Navigation">
                    <Dropdown.Item
                        key={"/"}
                        color="secondary"
                        icon={
                            <Home
                                primaryColor={"var(--nextui-colors-primary)"}
                                set="bulk"
                            />
                        }
                        description="Rien à faire là-bas frèrot 😶‍🌫️"
                    >
                        Accueil
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/emplois"}
                        color="secondary"
                        icon={
                            <Calendar
                                primaryColor={"var(--nextui-colors-primary)"}
                                set="bulk"
                            />
                        }
                        description="Consultez le planning de tous les cours aux NTIC Rabat, vous pouvez voir la météo aussi 😍"
                    >
                        Emplois
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/connect"}
                        color="secondary"
                        icon={
                            <People
                                primaryColor={"var(--nextui-colors-primary)"}
                                set="bulk"
                            />
                        }
                        description="Facebook du NTIC 📲"
                    >
                        Connect
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/connect/profile"}
                        color="default"
                        description="Consultez ou modifiez votre profil public 🖼️"
                        icon={
                            <UserIcon
                                primaryColor={"var(--nextui-colors-primary)"}
                                set="bulk"
                            />
                        }
                    >
                        Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/#contact"}
                        color="secondary"
                        icon={
                            <Calling
                                primaryColor={"var(--nextui-colors-primary)"}
                                set="bulk"
                            />
                        }
                    >
                        Contact
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section title="Actions">
                    <Dropdown.Item
                        key="#!"
                        color="default"
                        description="Changer le mode de couleurs."
                        icon={isDark ? <MdDarkMode /> : <MdLightMode />}
                    >
                        <Text
                            b
                            color="inherit"
                            css={{ d: "flex" }}
                            onClick={() => {
                                colorMode.toggleColorMode();
                                setTheme(isDark ? "light" : "dark");
                            }}
                        >
                            Mode {isDark ? "sombre" : "lumineux"}
                        </Text>
                    </Dropdown.Item>
                    <Dropdown.Item
                        key="Logout"
                        color="error"
                        description="Pensez-vous quitter cet endroit incroyable pour de vrai ?"
                        icon={
                            <Logout
                                primaryColor={"var(--nextui-colors-error)"}
                                set="bulk"
                            />
                        }
                    >
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
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const MobileMenuWithoutAuth = () => {
    const Router = useRouter();

    const Navigate = (HREF: string) => {
        return Router.push(HREF);
    };

    const colorMode = React.useContext(ColorModeContext);
    const { isDark, type } = useTheme();
    const { setTheme } = useNextTheme();
    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <IconButton color="secondary">
                    <Category
                        set="bulk"
                        primaryColor={"var(--nextui-colors-secondary)"}
                    />
                </IconButton>
            </Dropdown.Trigger>
            <Dropdown.Menu
                aria-label="Static Actions"
                css={{
                    d: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
                onAction={(key) => {
                    return Navigate(key as string);
                }}
            >
                <Dropdown.Section title="Navigation">
                    <Dropdown.Item
                        key={"/"}
                        color="default"
                        icon={
                            <Home
                                primaryColor={"var(--nextui-colors-text)"}
                                set="bulk"
                            />
                        }
                        // css={{
                        //     background: "$secondary",
                        //     color: "$primaryLight",
                        // }}
                    >
                        Accueil
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/emplois"}
                        color="default"
                        icon={
                            <Calendar
                                primaryColor={"var(--nextui-colors-text)"}
                                set="bulk"
                            />
                        }
                        description="Consultez le planning de tous les cours aux NTIC Rabat, vous pouvez voir la météo aussi 😍"
                    >
                        Emplois
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"Connect"}
                        color="default"
                        icon={
                            <People
                                primaryColor={"var(--nextui-colors-text)"}
                                set="bulk"
                            />
                        }
                        description="Facebook du NTIC 📲"
                    >
                        Connect
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/#contact"}
                        color="default"
                        icon={
                            <Calling
                                primaryColor={"var(--nextui-colors-text)"}
                                set="bulk"
                            />
                        }
                    >
                        Contact
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section title="Espace Stagiaires">
                    <Dropdown.Item
                        key="#!"
                        color="default"
                        description="Changer le mode de couleurs."
                        icon={isDark ? <MdDarkMode /> : <MdLightMode />}
                    >
                        <Text
                            b
                            color="inherit"
                            css={{ d: "flex" }}
                            onClick={() => {
                                colorMode.toggleColorMode();
                                setTheme(isDark ? "light" : "dark");
                            }}
                        >
                            Mode {isDark ? "sombre" : "lumineux"}
                        </Text>
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section title="Espace Stagiaires">
                    <Dropdown.Item
                        key={"/auth/register"}
                        color="success"
                        description="Frèrot, ne t'inscris pas."
                        icon={
                            <Login
                                set="bulk"
                                primaryColor={"var(--nextui-colors-secondary)"}
                            />
                        }
                    >
                        S'inscrire
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/auth/login"}
                        color="success"
                        description="Soyez courtois."
                        icon={
                            <Password
                                primaryColor={"var(--nextui-colors-secondary)"}
                                set="bulk"
                            />
                        }
                    >
                        Se Connecter
                    </Dropdown.Item>
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default User;
export { User, MobileMenuWithAuth, MobileMenuWithoutAuth };
