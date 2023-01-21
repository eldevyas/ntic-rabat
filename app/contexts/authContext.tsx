import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Display from "../services/displayAlert";
import axios from "axios";
import { setCookie } from "cookies-next";
import { getCookie } from "cookies-next";

const AuthContext: any = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    isLoggedIn: () => {},
});

export const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const Router = useRouter();

    useEffect(() => {}, []);
    const APP_URL = process.env.NEXT_PUBLIC_HOSTNAME;
    const SERVER_URL = process.env.SERVER_PUBLIC_HOSTNAME;
    const LOGIN_ENDPOINT = `${SERVER_URL}/api/login`;
    const LOGOUT_ENDPOINT = `${SERVER_URL}/api/logout`;
    const login = async (credentials: any) => {
        let data = JSON.stringify({
            email: credentials.email,
            password: credentials.password,
        });

        console.table({
            email: credentials.email,
            password: credentials.password,
            Server: SERVER_URL,
            App: APP_URL,
            Login: LOGIN_ENDPOINT,
            Logout: LOGOUT_ENDPOINT,
            Environement: process.env,
        });

        return axios
            .post(LOGIN_ENDPOINT, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
                if (response.data) {
                    if ((response.status = 200)) {
                        setCookie("token", response.data.user);
                        Display.pushSuccess(
                            `Vous êtes connecté en tant que ${response.data.user.name} .`
                        );
                        Router.push("/admin");
                        setUser(response.data.user);
                    } else if ((response.status = 401)) {
                        Display.pushFailure(
                            "Votre nom d'utilisateur ou votre mot de passe est incorrect."
                        );
                        setUser(null);
                    } else {
                        Display.pushFailure("Une erreur est survenue.");
                        setUser(null);
                    }
                } else {
                    Display.pushFailure("Une erreur est survenue.");
                    setUser(null);
                }
            })
            .catch((error) => {
                // Check Status
                if (error.response.status === 401) {
                    Display.pushFailure(
                        "Votre nom d'utilisateur ou votre mot de passe est incorrect."
                    );
                    setUser(null);
                } else {
                    Display.pushFailure("Une erreur est survenue.");
                    setUser(null);
                }
            });
    };

    const logout = () => {
        Display.pushInfo("Vous venez de vous déconnecter.");

        const date = new Date();
        date.setDate(date.getDate() - 1);

        setCookie("token", "", { expires: date });

        setUser(null);

        // Call logout api with user token
        axios.post(
            LOGOUT_ENDPOINT,
            {
                Authorization: getCookie("token"),
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return Router.push("/connexion");
    };

    const isLoggedIn = () => {
        return localStorage.getItem("token") !== null;
    };

    const Context = {
        user: user,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
    };

    return (
        <AuthContext.Provider value={Context}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
