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
    CallCalling as Calling,
    Logout,
    Lock as Password,
    DeviceMessage as Chat,
    User as UserIcon,
    CloudSunny as MdLightMode,
    Moon as MdDarkMode,
} from "iconsax-react";
import { IconButton, MenuList, useColorScheme } from "@mui/material";

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

    const { mode, setMode } = useColorScheme();

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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                        icon={mode == "dark" ? <MdDarkMode /> : <MdLightMode />}
                    >
                        <Text
                            b
                            color="inherit"
                            css={{ d: "flex" }}
                            onClick={() => {
                                setMode(mode == "dark" ? "light" : "dark");
                            }}
                        >
                            Mode {mode == "dark" ? "sombre" : "lumineux"}
                        </Text>
                    </Dropdown.Item>
                    <Dropdown.Item
                        key="/"
                        color="error"
                        description="Pensez-vous quitter cet endroit incroyable pour de vrai ?"
                        icon={
                            <Logout
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-error-main)"}
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

    const { mode, setMode } = useColorScheme();

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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                        icon={
                            mode == "dark" ? (
                                <MdDarkMode
                                    size="28"
                                    variant="Bulk"
                                    color="var(--mui-palette-primary-main)"
                                />
                            ) : (
                                <MdLightMode
                                    size="28"
                                    variant="Bulk"
                                    color="var(--mui-palette-primary-main)"
                                />
                            )
                        }
                    >
                        <Text
                            b
                            color="inherit"
                            css={{ d: "flex" }}
                            onClick={() => {
                                setMode(mode == "dark" ? "light" : "dark");
                            }}
                        >
                            Mode {mode == "dark" ? "sombre" : "lumineux"}
                        </Text>
                    </Dropdown.Item>
                    <Dropdown.Item
                        key="Logout"
                        color="error"
                        description="Pensez-vous quitter cet endroit incroyable pour de vrai ?"
                        icon={
                            <Logout
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
    const { mode, setMode } = useColorScheme();

    const ExecuteAction = (ACTION: string) => {
        switch (ACTION) {
            case "Color Mode":
                setMode(mode == "dark" ? "light" : "dark");
                break;
            default:
                Router.push(ACTION);
                break;
        }
    };

    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <IconButton
                    color="primary"
                    sx={{
                        borderRadius: "0.75rem",
                    }}
                >
                    <Category
                        variant="Bulk"
                        color={"var(--mui-palette-primary-main)"}
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
                    return ExecuteAction(key as string);
                }}
            >
                <Dropdown.Section title="Navigation">
                    <Dropdown.Item
                        key={"/"}
                        color="default"
                        icon={
                            <Home
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        }
                    >
                        Accueil
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/emplois"}
                        color="default"
                        icon={
                            <Calendar
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        }
                        description="Consultez le planning de tous les cours aux NTIC Rabat, vous pouvez voir la météo aussi 😍"
                    >
                        Emplois
                    </Dropdown.Item>
                    <Dropdown.Item
                        key={"/connect"}
                        color="default"
                        icon={
                            <People
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
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
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        }
                    >
                        Contact
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section title="Actions">
                    <Dropdown.Item
                        key="Color Mode"
                        color="default"
                        description="Changer le mode de couleurs."
                        icon={
                            mode == "dark" ? (
                                <MdDarkMode
                                    size="28"
                                    variant="Bulk"
                                    color="var(--mui-palette-primary-main)"
                                />
                            ) : (
                                <MdLightMode
                                    size="28"
                                    variant="Bulk"
                                    color="var(--mui-palette-primary-main)"
                                />
                            )
                        }
                    >
                        <Text b color="inherit" css={{ d: "flex" }}>
                            Mode {mode == "dark" ? "sombre" : "lumineux"}
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
                                variant="Bulk"
                                color={"var(--mui-palette-secondary-main)"}
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
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-secondary-main)"}
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
export {
    User,
    MobileMenuWithAuth,
    // MobileMenuWithoutAuth
};

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const CustomDropdown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const Router = useRouter();
    const { mode, setMode } = useColorScheme();

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = (ACTION: string) => {
        switch (ACTION) {
            case "Color Mode":
                setMode(mode == "dark" ? "light" : "dark");
                handleClose();
                break;
            default:
                Router.push(ACTION);
                handleClose();
                break;
        }
    };

    return (
        <>
            <IconButton color="primary" onClick={handleClick}>
                <Category
                    size="28"
                    variant="Bulk"
                    color={"var(--mui-palette-primary-main)"}
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                sx={{
                    backdropFilter: "blur(2.5px)",
                    ".MuiPaper-root": {
                        backgroundColor:
                            "var(--mui-palette-background-default)",
                        padding: "0.5rem",
                        borderRadius: "0.75rem",
                        ".MuiList-root": {
                            // padding: 0,
                            ".MuiMenuItem-root": {
                                borderRadius: "0.75rem",
                            },
                        },
                    },
                }}
            >
                {/* Render dropdown menu items */}
                <MenuList>
                    <MenuItem
                        onClick={() => handleItemClick("/")}
                        selected={anchorEl === "/"}
                    >
                        <ListItemIcon>
                            <Home
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Accueil"
                            secondary="this is secondary."
                        />
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleItemClick("/emplois")}
                        selected={anchorEl === "/emplois"}
                    >
                        <ListItemIcon>
                            <Category
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Emplois"
                            secondary="this is secondary."
                        />
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleItemClick("/connect")}
                        selected={anchorEl === "/connect"}
                    >
                        <ListItemIcon>
                            <Category
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Connect"
                            secondary="this is secondary."
                        />
                    </MenuItem>
                    <MenuItem
                        onClick={() => handleItemClick("//#contact")}
                        selected={anchorEl === "//#contact"}
                    >
                        <ListItemIcon>
                            <Category
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Contact"
                            secondary="this is secondary."
                        />
                    </MenuItem>
                </MenuList>
                <MenuList subheader="Actions">
                    <MenuItem onClick={() => handleItemClick("Color Mode")}>
                        <ListItemIcon>
                            {mode == "dark" ? (
                                <MdDarkMode
                                    size="28"
                                    variant="Bulk"
                                    color="var(--mui-palette-primary-main)"
                                />
                            ) : (
                                <MdLightMode
                                    size="28"
                                    variant="Bulk"
                                    color="var(--mui-palette-primary-main)"
                                />
                            )}
                        </ListItemIcon>
                        <ListItemText
                            primary={`Mode ${
                                mode === "dark" ? "sombre" : "lumineux"
                            }`}
                            secondary="Changer le mode de couleurs."
                        />
                    </MenuItem>
                </MenuList>
                <MenuList subheader="Espace Stagiaires">
                    <MenuItem color="secondary">
                        <ListItemIcon>
                            <Login
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={`S'inscrire`}
                            secondary="Frèrot, ne t'inscris pas."
                        />
                    </MenuItem>
                    <MenuItem color="secondary">
                        <ListItemIcon>
                            <Password
                                size="28"
                                variant="Bulk"
                                color={"var(--mui-palette-primary-main)"}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={`Se Connecter`}
                            color="secondary"
                            secondary="Soyez courtois."
                        />
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export { CustomDropdown as MobileMenuWithoutAuth };
