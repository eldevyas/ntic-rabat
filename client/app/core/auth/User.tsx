import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Avatar,
    Stack,
    ListItemText,
    ListItemIcon,
    Menu,
    MenuItem,
    IconButton,
    MenuList,
    useColorScheme,
    Typography,
    ButtonBase,
} from "@mui/material";

import {
    Category,
    Home,
    Calendar,
    Login,
    People,
    CallCalling as Calling,
    Logout,
    UserSquare,
    Lock as Password,
    DeviceMessage as Chat,
    User as UserIcon,
    CloudSunny as MdLightMode,
    Moon as MdDarkMode,
} from "iconsax-react";

const User = () => {
    const Router = useRouter();
    const { data: session, status }: any = useSession();

    const Data = {
        image: session.user.avatar,
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
        <>
            {/* Avatar with MUI - With User Name and Role */}
            <Stack
                component={ButtonBase}
                direction="row"
                spacing={1}
                sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "fit-content",
                    height: "100%",
                    color: "text.primary",
                    padding: "0.5rem",
                    borderRadius: "0.7rem",
                    cursor: "pointer",
                    userSelect: "none",
                    "&:hover": {
                        // Faded background transparency
                        backgroundColor: (theme) =>
                            theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.1)"
                                : "rgba(0, 0, 0, 0.1)",
                    },
                }}
            >
                <Avatar src={Data.image} alt={Data.name} variant="rounded" />
                <Stack
                    direction="column"
                    spacing={0}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                >
                    <Typography
                        variant="body1"
                        fontWeight={600}
                        fontSize={"0.85rem"}
                    >
                        {Data.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        fontSize={"0.75rem"}
                    >
                        {toCapitalCase(Data.role)}
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
};

const MobileMenuWithAuth = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const Router = useRouter();
    const Pathname = usePathname();
    const { mode, setMode } = useColorScheme();
    const { data: session, status }: any = useSession();

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
                <Avatar
                    src={session?.user.avatar}
                    variant="rounded"
                    alt="User Avatar"
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{
                    // backdropFilter: "blur(2.5px)",
                    ".MuiPaper-root": {
                        backgroundColor:
                            "var(--mui-palette-background-default)",
                        padding: "0.5rem",
                        borderRadius: "0.75rem",
                        a: {
                            color: "inherit !important",
                        },
                        ".MuiList-root": {
                            // padding: 0,
                            ".MuiList-subheader": {
                                fontSize: "0.85rem",
                                lineHeight: "0.75rem",
                                color: "text.secondary",
                                padding: "1rem",
                            },
                            ".MuiMenuItem-root": {
                                borderRadius: "0.75rem",
                                ".MuiListItemText-secondary": {
                                    whiteSpace: "pre-wrap",
                                },
                                "&:nth-child(1)": {
                                    marginTop: "0.75rem",
                                },
                            },
                        },
                    },
                }}
            >
                <MenuItem>
                    <ListItemText
                        primary={`Bonjour ${session?.user.name}`}
                        secondary={session?.user.email}
                    />
                </MenuItem>

                {/* Navigation */}
                <MenuItem
                    onClick={() => handleItemClick("/")}
                    selected={Pathname === "/"}
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
                        secondary="Rien à faire là-bas frèrot 😶‍🌫️"
                    />
                </MenuItem>
                <MenuItem
                    onClick={() => handleItemClick("/emplois")}
                    selected={Pathname === "/emplois"}
                >
                    <ListItemIcon>
                        <Calendar
                            size="28"
                            variant="Bulk"
                            color={"var(--mui-palette-primary-main)"}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Emplois"
                        secondary="Consultez le planning de tous les cours aux NTIC Rabat, vous pouvez voir la météo aussi 😍"
                    />
                </MenuItem>
                <MenuItem
                    onClick={() => handleItemClick("/connect")}
                    selected={Pathname === "/connect"}
                >
                    <ListItemIcon>
                        <People
                            size="28"
                            variant="Bulk"
                            color={"var(--mui-palette-primary-main)"}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Connect"
                        secondary="Facebook du NTIC 📲"
                    />
                </MenuItem>
                <MenuItem
                    onClick={() => handleItemClick("/connect/profile")}
                    selected={Pathname === "/connect/profile"}
                >
                    <ListItemIcon>
                        <UserSquare
                            size="28"
                            variant="Bulk"
                            color={"var(--mui-palette-primary-main)"}
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Profile"
                        secondary="Consultez ou modifiez votre profil public 🖼️"
                    />
                </MenuItem>
                <MenuItem
                    onClick={() => handleItemClick("/#contact")}
                    selected={Pathname === "/#contact"}
                >
                    <ListItemIcon>
                        <Calling
                            size="28"
                            variant="Bulk"
                            color={"var(--mui-palette-primary-main)"}
                        />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </MenuItem>

                {/* Actions */}
                <MenuItem onClick={() => handleItemClick("Color Mode")}>
                    <ListItemIcon>
                        {mode == "dark" ? (
                            <MdDarkMode
                                size="28"
                                variant="Bulk"
                                color="#536dfe"
                            />
                        ) : (
                            <MdLightMode
                                size="28"
                                variant="Bulk"
                                color="#ffb300"
                            />
                        )}
                    </ListItemIcon>
                    <ListItemText
                        primary={`Mode ${
                            mode === "dark" ? "sombre" : "lumineux"
                        }`}
                    />
                </MenuItem>
                <MenuItem onClick={() => handleItemClick("Logout")}>
                    <ListItemIcon>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText
                        primary="Se déconnecter"
                        secondary="Pensez-vous quitter cet endroit incroyable pour de vrai ?"
                    />
                </MenuItem>
            </Menu>
        </>
    );
};

const MobileMenuWithoutAuth = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const Router = useRouter();
    const Pathname = usePathname();
    const { mode, setMode } = useColorScheme();

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                    // backdropFilter: "blur(2.5px)",
                    ".MuiPaper-root": {
                        backgroundColor:
                            "var(--mui-palette-background-default)",
                        padding: "0.5rem",
                        borderRadius: "0.75rem",
                        a: {
                            color: "inherit !important",
                        },
                        ".MuiList-root": {
                            // padding: 0,
                            ".MuiList-subheader": {
                                fontSize: "0.85rem",
                                lineHeight: "0.75rem",
                                color: "text.secondary",
                                padding: "1rem",
                            },
                            ".MuiMenuItem-root": {
                                borderRadius: "0.75rem",
                                ".MuiListItemText-secondary": {
                                    whiteSpace: "pre-wrap",
                                },
                                "&:nth-child(1)": {
                                    marginTop: "0.75rem",
                                },
                            },
                        },
                    },
                }}
            >
                {/* Render dropdown menu items */}
                <MenuList subheader="Navigation">
                    <Link href="/">
                        <MenuItem selected={Pathname === "/connect"}>
                            <ListItemIcon>
                                <Home
                                    size="28"
                                    variant="Bulk"
                                    color={"var(--mui-palette-primary-main)"}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Accueil"
                                secondary="Présentation sur l'institute 🖼️"
                            />
                        </MenuItem>
                    </Link>
                    <Link href="/emplois">
                        <MenuItem selected={Pathname === "/connect"}>
                            <ListItemIcon>
                                <Calendar
                                    size="28"
                                    variant="Bulk"
                                    color={"var(--mui-palette-primary-main)"}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Emplois"
                                secondary="Consultez le planning des cours 📅"
                            />
                        </MenuItem>
                    </Link>

                    <Link href="/connect">
                        <MenuItem selected={Pathname === "/connect"}>
                            <ListItemIcon>
                                <People
                                    size="28"
                                    variant="Bulk"
                                    color={"var(--mui-palette-primary-main)"}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Connect"
                                secondary="Facebook du NTIC 📲"
                            />
                        </MenuItem>
                    </Link>
                    <Link href="/creators">
                        <MenuItem selected={Pathname === "/creators"}>
                            <ListItemIcon>
                                <Calling
                                    size="28"
                                    variant="Bulk"
                                    color={"var(--mui-palette-primary-main)"}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Créateurs" />
                        </MenuItem>
                    </Link>
                </MenuList>
                <MenuList subheader="Actions">
                    <MenuItem
                        onClick={() =>
                            setMode(mode == "dark" ? "light" : "dark")
                        }
                    >
                        <ListItemIcon>
                            {mode == "dark" ? (
                                <MdDarkMode
                                    size="28"
                                    variant="Bulk"
                                    color="#536dfe"
                                />
                            ) : (
                                <MdLightMode
                                    size="28"
                                    variant="Bulk"
                                    color="#ffb300"
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
                    <Link href="/auth/login">
                        <MenuItem
                            color="secondary"
                            selected={Pathname === "/auth/login"}
                        >
                            <ListItemIcon>
                                <Login
                                    size="28"
                                    variant="Bulk"
                                    color={"var(--mui-palette-secondary-main)"}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={`S'inscrire`}
                                secondary="Frèrot, ne t'inscris pas."
                                color="secondary.main"
                            />
                        </MenuItem>
                    </Link>
                    <Link href="/auth/register">
                        <MenuItem
                            color="secondary"
                            selected={Pathname === "/auth/register"}
                        >
                            <ListItemIcon>
                                <Password
                                    size="28"
                                    variant="Bulk"
                                    color={"var(--mui-palette-secondary-main)"}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={`Se Connecter`}
                                color="secondary.main"
                                secondary="Soyez courtois."
                            />
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </>
    );
};

export default User;
export { User, MobileMenuWithAuth, MobileMenuWithoutAuth };
