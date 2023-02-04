import React, { useState, useRef, useContext } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityOn from "@mui/icons-material/Visibility";

import * as Display from "../../../services/displayAlert";
import { redirect } from "react-router";
import AuthContext from "../../../contexts/authContext";

import { signIn } from "next-auth/react";
import { Router } from "next/router";

const LoginComponent = () => {
    const emailRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();
    const rememberMeRef = React.createRef<HTMLInputElement>();
    const [showPassword, setShowPassword] = useState(false);
    // const Context: any = useContext(AuthContext);
    const [isLoading, setLoading] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        const username = emailRef?.current?.value;
        const password = passwordRef?.current?.value;
        const isRememberMe = rememberMeRef?.current?.checked;
        if (username && password) {
            const Credentials = {
                email: username,
                password: password,
                rememberMe: isRememberMe,
            };

            console.log(Credentials);

            try {
                setLoading(true);
                const res: any = await signIn("credentials", {
                    email: Credentials.email,
                    password: Credentials.password,
                    redirect: false,
                });
                console.log(res);
                if (res.status !== 200) {
                    Display.pushFailure(
                        "Nom d'utilisateur ou mot de passe incorrect."
                    );
                } else {
                    Display.pushSuccess("Connexion réussie!");
                }
            } finally {
                setLoading(false);
            }

        } else {
            if (!username && !password) {
                Display.pushWarning(
                    "Veuillez entrer votre nom d'utilisateur et votre mot de passe."
                );
            } else if (!username) {
                Display.pushWarning("Veuillez entrer votre nom d'utilisateur.");
                return;
            } else if (!password) {
                Display.pushWarning("Veuillez entrer votre mot de passe.");
                return;
            }
        }
    };

    return (
        <div className="Form">
            <form className="Form-group">
                <div className="Input Username">
                    <div className="Input-icon">
                        <AccountCircleIcon />
                    </div>
                    <input
                        ref={emailRef}
                        type="username"
                        className="form-control"
                        placeholder="Nom d'utilisateur"
                        required
                    ></input>
                </div>
                <div className="Input Password">
                    <div className="Input-icon">
                        <LockIcon />
                    </div>
                    <input
                        ref={passwordRef}
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Mot de passe"
                        required
                    ></input>
                    <div
                        className="Visibility"
                        onClick={handleClickShowPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <VisibilityOn />}
                    </div>
                </div>
            </form>
            <div className="RememberMe">
                <label className="cont">
                    <input type="checkbox" ref={rememberMeRef} />
                    <span></span>
                </label>
                Se souvenir de moi
            </div>

            {isLoading ? (
                <LoadingButton
                    variant="text"
                    className="btnPrimary Loading"
                    loadingPosition="center"
                    loading
                    sx={{
                        cursor: "default !important",
                    }}
                />
            ) : (
                <Button
                    variant="text"
                    className="btnPrimary"
                    onClick={() => {
                        handleLogin();
                    }}
                >
                    Se Connecter
                </Button>
            )}
        </div>
    );
};

export default LoginComponent;