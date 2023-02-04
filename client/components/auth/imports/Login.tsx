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

const LoginComponent = () => {
    const emailRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();
    const rememberMeRef = React.createRef<HTMLInputElement>();
    const [showPassword, setShowPassword] = useState(false);
    const Context: any = useContext(AuthContext);

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

            // const Login = Context.login(Credentials);
            const res = await signIn("credentials", {
                email: Credentials.email,
                password: Credentials.password,
                redirect: false,
            });

            console.log(res);
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

            {Context.isLoading ? (
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

// export default class LoginComponent extends React.Component {
//     emailRef: any;
//     passwordRef: any;
//     rememberMeRef: any;
//     credentials: any;
//     state: any;
//     isLoading: any;
//     static contextType = AuthContext;

//     constructor(props: any) {
//         super(props);
//         this.emailRef = React.createRef();
//         this.passwordRef = React.createRef();
//         this.rememberMeRef = React.createRef();

//         this.state = {
//             showPassword: false,
//         };

//         this.credentials = {
//             username: "",
//             password: "",
//             rememberMe: false,
//         };
//         // Hide & show password icon
//     }

//     handleClickShowPassword = () => {
//         this.setState({ showPassword: !this.state.showPassword });
//     };

//     handleLogin = () => {
//         const username = this.emailRef.current.value;
//         const password = this.passwordRef.current.value;
//         const isRememberMe = this.rememberMeRef.current.checked;

//         const Context: any = this.context;

//         if (username && password) {
//             this.credentials.email = username;
//             this.credentials.password = password;
//             this.credentials.rememberMe = isRememberMe;

//             // let Login = Context.login(this.credentials);
//             let Login = true;

//             if (Login) {
//                 this.setState({ isLoading: false });
//             } else {
//                 this.setState({ isLoading: false });
//             }
//         } else {
//             if (!username && !password) {
//                 Display.pushWarning(
//                     "Veuillez entrer votre nom d'utilisateur et votre mot de passe."
//                 );
//             } else if (!username) {
//                 Display.pushWarning("Veuillez entrer votre nom d'utilisateur.");
//                 return;
//             } else if (!password) {
//                 Display.pushWarning("Veuillez entrer votre mot de passe.");
//                 return;
//             }
//             this.setState({ isLoading: false });
//         }
//     };

//     render() {
//         const Context: any = this.context;
//         return (
//             <div className="Form">
//                 <form className="Form-group">
//                     <div className="Input Username">
//                         <div className="Input-icon">
//                             <AccountCircleIcon />
//                         </div>
//                         <input
//                             ref={this.emailRef}
//                             type="username"
//                             className="form-control"
//                             placeholder="Nom d'utilisateur"
//                             required
//                         ></input>
//                     </div>
//                     <div className="Input Password">
//                         <div className="Input-icon">
//                             <LockIcon />
//                         </div>
//                         <input
//                             ref={this.passwordRef}
//                             type={this.state.showPassword ? "text" : "password"}
//                             className="form-control"
//                             placeholder="Mot de passe"
//                             required
//                         ></input>
//                         <div
//                             className="Visibility"
//                             onClick={this.handleClickShowPassword}
//                         >
//                             {this.state.showPassword ? (
//                                 <VisibilityOff />
//                             ) : (
//                                 <VisibilityOn />
//                             )}
//                         </div>
//                     </div>
//                 </form>

//                 <div className="RememberMe">
//                     <label className="cont">
//                         <input type="checkbox" ref={this.rememberMeRef} />
//                         <span></span>
//                     </label>
//                     Se souvenir de moi
//                 </div>

//                 {Context.isLoading ? (
//                     <LoadingButton
//                         variant="text"
//                         className="btnPrimary Loading"
//                         loadingPosition="center"
//                         loading
//                         sx={{
//                             cursor: "default !important",
//                         }}
//                     />
//                 ) : (
//                     <Button
//                         variant="text"
//                         className="btnPrimary"
//                         onClick={this.handleLogin}
//                     >
//                         Se Connecter
//                     </Button>
//                 )}
//             </div>
//         );
//     }
// }
