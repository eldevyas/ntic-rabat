// Links Icons
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupsIcon from "@mui/icons-material/Groups";
import PhoneIcon from "@mui/icons-material/Phone";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";

export const Links: {
    href: String;
    icon: any;
    title: String;
    positionLeft: String;
    positionTop: String;
    pages?: {
        title: string;
        href: string;
    }[];
}[] = [
    {
        href: "/",
        icon: <HomeIcon />,
        title: "Accueil",
        positionLeft: "0%",
        positionTop: "0%",
    },
    {
        href: "/emplois",
        icon: <CalendarTodayIcon />,
        title: "Emplois",
        positionLeft: "50%",
        positionTop: "0%",
    },
    {
        href: "/connect",
        icon: <GroupsIcon />,
        title: "Connect",
        positionLeft: "0%",
        positionTop: `calc(100% /3 * 1)`, // updated positionTop
    },
    {
        href: "/#contact",
        icon: <PhoneIcon />,
        title: "Contact",
        positionLeft: "50%",
        positionTop: `calc(100%/3 * 1)`,
    },
    {
        href: "/auth/register",
        icon: <ExitToAppIcon />,
        title: "S'inscrire",
        positionLeft: "0%",
        positionTop: "calc(100%/3 * 2)",
    },
    {
        href: "/auth/login",
        icon: <LoginIcon />,
        title: "Se Connecter",
        positionLeft: "50%",
        positionTop: "calc(100%/3 * 2)",
    },
];
