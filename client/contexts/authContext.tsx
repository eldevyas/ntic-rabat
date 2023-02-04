import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Display from "../services/displayAlert";
import axios from "axios";
import { setCookie } from "cookies-next";
import { getCookie } from "cookies-next";
import { redirect } from "next/dist/server/api-utils";

const AuthContext: any = createContext({
    user: null,
    login: () => {},
    register: () => {},
    logout: () => {},
    isLoggedIn: () => {},
    isEmailVerified: false,
    isLoading: false,
});

export const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<any>(null);
    // Loading
    const [loading, setLoading] = useState<boolean>(false);
    const Router = useRouter();

    useEffect(() => {
        const token = getCookie("token");
        if (token) {
            setUser(token);
        }
    }, []);
    const APP_URL = process.env.NEXT_PUBLIC_HOSTNAME;
    const SERVER_URL = process.env.SERVER_PUBLIC_HOSTNAME;
    const LOGIN_ENDPOINT = `${SERVER_URL}/api/login`;
    const REGISTER_ENDPOINT = `${SERVER_URL}/api/register`;
    const LOGOUT_ENDPOINT = `${SERVER_URL}/api/logout`;

    const login = async (credentials: any) => {
        setLoading(true);

        let data = JSON.stringify({
            email: credentials.email,
            password: credentials.password,
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
                        // Connected As User Name
                        Display.pushSuccess(`Bienvenue ${response.data.name}!`);

                        // Check if verified email
                        if (response.data.email_verified) {
                            // Set User
                            setUser(response.data);
                            // Set Cookie
                            setCookie("token", response.data, {
                                path: "/",
                                expires: new Date(
                                    Date.now() + 1000 * 60 * 60 * 24 * 7
                                ),
                            });
                            // Redirect

                            Router.push("/dashboard");
                        } else {
                            Display.pushFailure(
                                "Votre adresse email n'a pas été vérifiée."
                            );
                            return Router.push("/auth/verify-request");
                        }
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
                setLoading(false);
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
                setLoading(false);
            });
    };

    const register = (credentials: any) => {
        var validCredentials: boolean = false;

        // All object values shall be not empty
        Object.values(credentials).forEach((value) => {
            if (value === "" || !value || value == undefined || value == null) {
                validCredentials = false;
            } else {
                validCredentials = true;
            }
        });

        if (validCredentials) {
            let data = JSON.stringify({
                username: credentials.username,
                firstname: credentials.firstName,
                lastname: credentials.lastName,
                email: credentials.email,
                password: credentials.password,
                password_confirmation: credentials.passwordConfirmation,
            });

            console.table(data);

            return axios
                .post(REGISTER_ENDPOINT, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    console.table(response);
                    if (response.status === 201) {
                        Display.pushSuccess(
                            `Félicitations, votre compte a été créé avec succès ! Pour des raisons de sécurité, veuillez vous connecter et confirmer votre adresse électronique en cliquant sur le lien d'activation que nous venons de vous envoyer.`
                        );
                        Router.push("/login");
                    } else {
                        Display.pushFailure(
                            "Désolé, une erreur est survenue lors de votre inscription. Veuillez réessayer plus tard ou contactez votre administration pour obtenir de l'aide."
                        );
                    }
                })
                .catch((error) => {
                    // Check Status
                    console.table(error);
                    if (error.response?.status === 422) {
                        Display.pushFailure(`
                            Désolé, votre inscription a échoué en raison d'une erreur de validation. Veuillez vérifier les informations saisies et réessayer.
                        `);
                    } else {
                        Display.pushFailure(
                            "Désolé, une erreur est survenue lors de votre inscription. Veuillez réessayer plus tard ou contactez votre administration pour obtenir de l'aide."
                        );
                    }
                });
        } else {
            // Alert
            Display.pushWarning(
                `
                    Désolé, certaines informations requises sont manquantes. Veuillez vérifier que tous les champs obligatoires soient remplis et réessayer.
                `
            );
        }
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

        return Router.push("/login");
    };

    const isLoggedIn = () => {
        return localStorage.getItem("token") !== null;
    };

    const Context = {
        user: user,
        login: login,
        register: register,
        logout: logout,
        isLoggedIn: isLoggedIn,
        isLoading: loading,
    };

    return (
        <AuthContext.Provider value={Context}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
