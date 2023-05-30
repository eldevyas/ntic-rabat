import { Home, Calendar, Login, People, Calling, Logout } from "react-iconly";

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
        icon: Home,
        title: "Accueil",
        positionLeft: "0%",
        positionTop: "0%",
    },
    {
        href: "/emplois",
        icon: Calendar,
        title: "Emplois",
        positionLeft: "50%",
        positionTop: "0%",
    },
    {
        href: "/connect",
        icon: People,
        title: "Connect",
        positionLeft: "0%",
        positionTop: `calc(100% /3 * 1)`, // updated positionTop
    },
    {
        href: "/#contact",
        icon: Calling,
        title: "Contact",
        positionLeft: "50%",
        positionTop: `calc(100%/3 * 1)`,
    },
    {
        href: "/auth/register",
        icon: Logout,
        title: "S'inscrire",
        positionLeft: "0%",
        positionTop: "calc(100%/3 * 2)",
    },
    {
        href: "/auth/login",
        icon: Login,
        title: "Se Connecter",
        positionLeft: "50%",
        positionTop: "calc(100%/3 * 2)",
    },
];
