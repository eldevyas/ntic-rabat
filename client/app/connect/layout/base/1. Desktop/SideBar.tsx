import React from "react";
import {
    Box,
    Button,
    Divider,
    Tabs,
    Typography,
    Tab,
    styled,
} from "@mui/material";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import { Chat, Home, User } from "react-iconly";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { ColorModeContext } from "@/app/providers";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const StyledTabs = styled((props: any) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))(({ theme }: any) => ({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        left: 0,
        backgroundColor: "#fff",
        borderRadius: "0 0.325rem 0.325rem 0",
        width: "100%",
        zIndex: 0,
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 5,
        backgroundColor: theme.palette.primary.main,
        maxHeight: "30px",
        borderRadius: "0 0.325rem 0.325rem 0",
        top: "50%",
        transform: "translateY(-50%)",
        position: "absolute",
        left: 0,
        width: "100%",
        height: "100%",
    },
}));

const StyledTab = styled((props: any) => <Tab disableRipple {...props} />)(
    ({ theme }: any) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(14),
        color: "#fff",
        padding: "1rem",
        maxHeight: "40px !important",
        minHeight: "40px!important",
        marginBottom: theme.spacing(1),
        height: "auto",
        zIndex: 5,
        "&.Mui-selected": {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightBold,
        },
        "&.Mui-focusVisible": {
            backgroundColor: theme.palette.primary.main,
        },
    })
);

export default function SideBar() {
    const { data: session }: any = useSession();

    const Router = useRouter();
    const Pathname: string = usePathname() as string;

    const [value, setValue] = React.useState(Pathname);

    React.useEffect(() => {
        setValue(Pathname);
    }, [Pathname]);

    const colorMode: any = React.useContext(ColorModeContext);
    const { isDark, type } = useTheme();
    const { setTheme } = useNextTheme();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        Router.push(newValue);
    };
    return (
        <Box
            className="SideBar"
            sx={{
                position: "sticky",
                top: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "0",
                maxWidth: "max-content",
                color: (theme) => theme.palette.text.primary,
                backgroundColor: (theme) =>
                    theme.palette.mode == "dark"
                        ? theme.palette.background.paper
                        : "#000",
            }}
        >
            <Box
                className="Top"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <Box
                    className="TopSectionsBox"
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        borderBottom: (theme) =>
                            `1px solid ${
                                theme.palette.mode == "dark"
                                    ? "rgba(0, 0, 0, 0.25)"
                                    : "rgba(255, 255, 255, 0.25)"
                            }`,
                    }}
                >
                    <Box
                        className="MacOS"
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "0.25rem",
                            padding: "1rem",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: "#FF605C",
                            }}
                        />
                        <Box
                            sx={{
                                position: "relative",
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: "#FFBD44",
                            }}
                        />
                        <Box
                            sx={{
                                position: "relative",
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: "#00CA4E",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    className="TopSectionsBox"
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Box
                        className="Greeting"
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "1rem",
                            marginBottom: "2.5rem",
                            borderBottom: (theme) =>
                                `1px solid ${
                                    theme.palette.mode == "dark"
                                        ? "rgba(0, 0, 0, 0.25)"
                                        : "rgba(255, 255, 255, 0.25)"
                                }`,
                        }}
                    >
                        {session ? (
                            <Avatar squared text="Junior" size={"lg"} />
                        ) : (
                            <Avatar squared text="Anonyme" size={"lg"} />
                        )}

                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                            }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode == "dark"
                                            ? "#fff"
                                            : "#fff",
                                }}
                            >
                                Bonjour,👋
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode == "dark"
                                            ? "#fff"
                                            : "#fff",
                                }}
                                fontWeight={700}
                            >
                                {session ? session.user.username : "Anonyme."}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        className="Navigation"
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                        }}
                    >
                        <StyledTabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{
                                borderLeft: 1,
                                borderColor: "divider",
                                width: "100%",
                                height: "auto",
                            }}
                        >
                            <StyledTab
                                label="Flux"
                                value="/connect"
                                {...a11yProps(0)}
                                iconPosition="start"
                                icon={
                                    <Home
                                        set="bulk"
                                        primaryColor={
                                            value == "/connect"
                                                ? "var(--nextui-colors-primary)"
                                                : "#fff"
                                        }
                                        size={"medium"}
                                    />
                                }
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            />
                            <StyledTab
                                label="Tchat"
                                value="/connect/chat-room"
                                {...a11yProps(1)}
                                iconPosition="start"
                                icon={
                                    <Chat
                                        set="bulk"
                                        primaryColor={
                                            value == "/connect/chat-room"
                                                ? "var(--nextui-colors-primary)"
                                                : "#fff"
                                        }
                                    />
                                }
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            />
                            <StyledTab
                                label="Profile"
                                {...a11yProps(2)}
                                iconPosition="start"
                                value="/connect/profile"
                                icon={
                                    <User
                                        set="bulk"
                                        primaryColor={
                                            value == "/connect/profile"
                                                ? "var(--nextui-colors-primary)"
                                                : "#fff"
                                        }
                                    />
                                }
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            />
                        </StyledTabs>
                    </Box>
                </Box>
            </Box>
            <Box
                className="Bottom"
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "1rem",
                    gap: "0.5rem",
                    borderTop: (theme) =>
                        `1px solid ${
                            theme.palette.mode == "dark"
                                ? "rgba(0, 0, 0, 0.25)"
                                : "rgba(255, 255, 255, 0.25)"
                        }`,
                }}
            >
                <Button
                    variant={isDark ? "outlined" : "outlined"}
                    color={isDark ? "error" : "error"}
                    onClick={() => {
                        colorMode.toggleColorMode();
                        setTheme(isDark ? "light" : "dark");
                    }}
                    fullWidth
                >
                    {isDark ? <MdDarkMode /> : <MdLightMode />}
                </Button>
                <Button
                    variant={isDark ? "contained" : "contained"}
                    color={isDark ? "error" : "error"}
                    onClick={() => {
                        Router.push("/");
                    }}
                    fullWidth
                    sx={{ fontSize: "0.85rem" }}
                >
                    Sortir
                </Button>
            </Box>
        </Box>
    );
}
