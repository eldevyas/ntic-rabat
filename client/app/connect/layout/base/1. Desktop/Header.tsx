import React from "react";
import {
    Box,
    Divider,
    Tabs,
    Typography,
    Tab,
    styled,
    Button,
    TextField,
    InputAdornment,
    useColorScheme,
} from "@mui/material";
import Image from "next/image";
import { Chat, Home, Search, User } from "react-iconly";
import { useTheme, Avatar, Input } from "@nextui-org/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import UserAvatar from "@/app/core/auth/User";
import { useSelector } from "react-redux";
export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { data: session }: any = useSession();
    const { users } = useSelector((state: any) => state.Reducers);
    const [searchedUsers, setSearchedUsers] = React.useState([]);

    const Router = useRouter();
    const Pathname: string = usePathname() as string;
    const SearchUsers = (name: string) => {

        if (name.length > 0) {
            setSearchedUsers(
                users.filter((user: any) => {
                    return user.name.toLowerCase().includes(name.toLowerCase());
                })
            );
        } else {
            setSearchedUsers([]);
        }
    };

    return (
        <Box
            className="ConnectHeader"
            sx={{
                position: "sticky",
                top: 0,
                left: 0,
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                color: (theme) => theme.palette.text.primary,
                padding: "1rem",
                zIndex: "100",
                backgroundColor: "var(--nextui-colors-backgroundAlpha)",
                backdropFilter: "blur(5rem)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "0.5rem",
                    width: "20rem",
                    position: "relative",
                }}
            >
                <TextField
                    id="search"
                    type="search"
                    placeholder="Rechercher...(check console)"
                    size="small"
                    fullWidth
                    onChange={(e) => {
                        SearchUsers(e.target.value);
                    }}
                    variant="outlined"
                    sx={{ width: "100%", fontSize: "0.85rem" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search
                                    set="two-tone"
                                    primaryColor="var(--mui-palette-text-primary)"
                                    size="medium"
                                />
                            </InputAdornment>
                        ),
                    }}
                />
                {
                    searchedUsers.length > 0 && (
                        <Box
                            sx={{

                                position: "absolute",
                                top: "100%",
                                left: "0",
                                padding: "0.5rem 0",
                                height: "auto",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                // gap: "0.8rem",
                                color: (theme) => theme.palette.text.primary,
                                zIndex: "100",
                                backgroundColor: "var(--nextui-colors-accents0)",
                                backdropFilter: "blur(5rem)",
                                maxHeight: "12rem",
                                overflowY: "scroll",
                                width: "100%",
                                borderRadius: "0.5rem",
                            }}
                        >
                            {searchedUsers.map((user: any) => {
                                return (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "0.5rem",
                                            padding: "0.5rem 1rem",
                                            borderRadius: "0.3rem",
                                            '&:hover': {
                                                backgroundColor: "var(--nextui-colors-accents1)",
                                                cursor: "pointer",
                                            }
                                        }}
                                    >
                                        <Avatar
                                            src={user.avatar}
                                            size="md"
                                            text={user.name}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{ fontSize: "0.9rem" }}
                                        >
                                            {user.name}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    )
                }
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "0.5rem",
                }}
            >
                {
                    // if user is connected
                    session ? (
                        <UserAvatar />
                    ) : (
                        <>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={() => {
                                    Router.push("/auth/register");
                                }}
                                sx={{ fontSize: "0.85rem" }}
                            >
                                {"S'inscrire"}
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => {
                                    Router.push("/auth/login");
                                }}
                                sx={{ fontSize: "0.85rem" }}
                            >
                                Se Connecter
                            </Button>
                        </>
                    )
                }
            </Box>
        </Box>
    );
}
