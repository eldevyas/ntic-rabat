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
        bottom: 0,
        backgroundColor: "#fff",
        borderRadius: "0.75rem 0.75rem 0 0",
        width: "100%",
        height: "100%",
        zIndex: 0,
    },
    "& .MuiTabs-indicatorSpan": {
        maxHeight: 5,
        backgroundColor: theme.palette.primary.main,
        maxWidth: "30px",
        borderRadius: "0.325rem 0.325rem 0 0",
        left: "50%",
        transform: "translateX(-50%)",
        position: "absolute",
        bottom: 0,
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

export default function Footer() {
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
            className="FooterNavigation"
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                minHeight: 50,
                borderRadius: "0.75rem 0.75rem 0 0",
                backgroundColor: "#000",
                border: 1,
                borderColor: "var(--nextui-colors-border)",
            }}
        >
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
                    orientation="horizontal"
                    centered
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    sx={{
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <StyledTab
                        // label="Flux"
                        value="/connect"
                        {...a11yProps(0)}
                        // iconPosition="top"
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
                    />
                    <StyledTab
                        // label="Tchat"
                        value="/connect/chat-room"
                        {...a11yProps(1)}
                        // iconPosition="top"
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
                    />
                    <StyledTab
                        // label="Profile"
                        {...a11yProps(2)}
                        value="/connect/profile"
                        // iconPosition="center"
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
                    />
                </StyledTabs>
            </Box>
        </Box>
    );
}
