import React from "react";
import { useRouter } from "next/router";
import * as Display from "../services/displayAlert";
import axios from "axios";


const APP_URL = process.env.NEXT_PUBLIC_HOSTNAME;
const SERVER_URL = process.env.SERVER_PUBLIC_HOSTNAME;
const LOGIN_ENDPOINT = `${SERVER_URL}/api/login`;
const REGISTER_ENDPOINT = `${SERVER_URL}/api/register`;
const LOGOUT_ENDPOINT = `${SERVER_URL}/api/logout`;

const Register = (credentials: any) => {
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


        return axios
            .post(REGISTER_ENDPOINT, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 201) {
                    Display.pushSuccess(
                        `Félicitations, votre compte a été créé avec succès ! Pour des raisons de sécurité, veuillez vous connecter et confirmer votre adresse électronique en cliquant sur le lien d'activation que nous venons de vous envoyer.`
                    );
                    return true;
                } else {
                    Display.pushFailure(
                        "Désolé, une erreur est survenue lors de votre inscription. Veuillez réessayer plus tard ou contactez votre administration pour obtenir de l'aide."
                    );
                    return false;
                }
            })
            .catch((error) => {
                // Check Status
                console.table(error);
                if (error.response?.status === 422) {
                    Display.pushFailure(`
                            Désolé, votre inscription a échoué en raison d'une erreur de validation. Veuillez vérifier les informations saisies et réessayer.
                        `);
                    return false;

                } else {
                    Display.pushFailure(
                        "Désolé, une erreur est survenue lors de votre inscription. Veuillez réessayer plus tard ou contactez votre administration pour obtenir de l'aide."
                    );
                    return false;
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

// Confirm Email address
const ConfirmEmailAddress = async (code: string, email: string) => {
    // Call API
    let response = await axios.post("/api/auth/confirm-email",
        {
            code,
            email
        }).then(
            response => {
                // Return response
                return response;
            },
        ).catch(
            error => {
                // Return error
                return error;
            }
        );

    if (response.status == 200) {
        return true;
    } else {
        return false;
    }
}



const AuthService = {
    Register: Register,
    ConfirmEmailAddress: ConfirmEmailAddress
}

export default AuthService;