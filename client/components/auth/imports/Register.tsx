import React, { useRef, useContext } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityOn from "@mui/icons-material/Visibility";

import * as Display from "../../../services/displayAlert";
import FirstStep from "./components/BasicInformation";
import Link from "next/link";
import Auth from "../../../services/authServices";
import Router from "next/router";
export default class RegisterComponent extends React.Component {
    credentials: any;
    state: any;
    isLoading: any;

    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: false,
        };

        this.credentials = {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        };
    }

    handleRegistration = (credentials: any) => {
        this.credentials = credentials;
        let Register = Auth.Register(credentials);
        this.setState({ isLoading: true });

        if (Register != null) {
            Register.then((res: any) => {
                // is loading
                this.setState({ isLoading: false });
                if (res) {
                    Router.push("/auth/login");
                }
            });
        }
    };

    render() {
        const Context: any = this.context;
        return (
            <form className="Form">
                <FirstStep
                    confirmStep={this.handleRegistration}
                    isLoading={this.state.isLoading}
                />

                <div className="FormFooter">
                    <p>
                        Vous avez déjà un compte ?{" "}
                        <Link href="/auth/login">Connectez-vous</Link>
                    </p>
                </div>
            </form>
        );
    }
}
