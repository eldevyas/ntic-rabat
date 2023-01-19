import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/router";
import { json } from "node:stream/consumers";
import { useEffect } from "react";
import { setCookie } from "cookies-next";
import { getCookie } from "cookies-next";
import axios from "axios";
const ConnexionForm = () => {
    // UseEffect to check if the user exists on the session storage
    useEffect(() => {
        if (!getCookie("token")) {
            Router.push("/connexion");
        } else {
            Router.push("/admin");
        }
    }, []);

    const Router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = async () => {
        let result: any = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
                // Accept: "application/json",
            },
        });
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 72);
        result = await result.json();
        if (result.token) {
            setCookie("token", result.user);
            Router.push("/admin");
        } else {
            alert("Email ou mot de pass incorrect");
        }
    };

    return (
        <div className="ConnexionForm">
            <div className="LoginForm">
                <div className="Title">
                    <h3>
                        Connectez-vous à <span>NTIC Rabat</span>
                    </h3>
                    <p>
                        Accès pour des fonctionnalités avancées uniquement pour
                        les stagiaires de l&apos;institut.
                    </p>
                </div>
                <hr></hr>
                <form action="">
                    <div className="FormControl">
                        <IconButton bgColor="Blue">
                            <EmailIcon />
                        </IconButton>
                        <input
                            type="text"
                            name="email"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="FormControl">
                        <IconButton bgColor="Blue">
                            <LockIcon />
                        </IconButton>
                        <input
                            type="password"
                            name="email"
                            placeholder="Mot de pass"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="FormCheckbox">
                        <input
                            type="checkbox"
                            name="email"
                            className="Checkbox"
                            id="RememberMe"
                        />
                        <label htmlFor="RememberMe">Se souvenir de moi</label>
                    </div>

                    <DefaultButton bgColor="Blue" onClick={handleSubmit}>
                        Se connecter
                    </DefaultButton>
                    <DefaultButton>Mot de pass oublié ?</DefaultButton>
                    <div className="SwitchLink">
                        <p>
                            Vous n'avez pas de compte ?{" "}
                            <span onClick={() => Router.push("/inscription")}>
                                Inscrivez-vous
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConnexionForm;
