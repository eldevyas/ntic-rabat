import React, { useRef, useContext } from "react";
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
import FirstStep from "./components/BasicInformation";
import Link from "next/link";
export default class RegisterComponent extends React.Component {
    credentials: any;
    state: any;
    isLoading: any;
    static contextType = AuthContext;

    constructor(props: any) {
        super(props);

        this.state = {
            Step: 0,
        };

        this.credentials = {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        };

        this.isLoading = false;
    }

    handleRegistration = (credentials: any) => {
        this.credentials = credentials;

        // Context register
        const Context: any = this.context;
        Context.register(this.credentials);
    };

    render() {
        const Context: any = this.context;
        return (
            <form className="Form">
                <FirstStep confirmStep={this.handleRegistration} />

                <div className="FormFooter">
                    <p>
                        Vous avez déjà un compte ?{" "}
                        <Link href="/login">Connectez-vous</Link>
                    </p>
                </div>
            </form>
        );
    }
}
