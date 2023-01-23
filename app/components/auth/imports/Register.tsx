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
import FirstStep from "./components/RegisterFirstStep";
export default class RegisterComponent extends React.Component {
    firstNameRef: any;
    lastNameRef: any;
    userNameRef: any;
    emailRef: any;
    passwordRef: any;
    passwordConfirmationRef: any;

    credentials: any;
    state: any;
    isLoading: any;
    static contextType = AuthContext;

    constructor(props: any) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.userNameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.passwordConfirmationRef = React.createRef();
        this.emailRef = React.createRef();

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
    }

    handleFirstStep = (credentials: any) => {
        this.credentials.firstName = credentials.firstName;
        this.credentials.lastName = credentials.lastName;
        this.credentials.password = credentials.password;
        this.credentials.passwordConfirmation =
            credentials.passwordConfirmation;

        Display.pushFailure("Veuillez patienter...");
    };

    render() {
        const Context: any = this.context;
        return (
            <div className="Form">
                <FirstStep />
            </div>
        );
    }
}
