import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityOn from "@mui/icons-material/Visibility";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import * as Display from "../../../../services/displayAlert";

export default function FirstStep(props: any) {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    // States for error messages
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] =
        useState("");

    // States for validity
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordConfirmationValid, setPasswordConfirmationValid] =
        useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleNext = () => {
        const Credentials = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            password: passwordRef.current?.value,
            passwordConfirmation: passwordConfirmationRef.current?.value,
        };

        // Use regular expressions to validate input
        const validName = /^[a-zA-Z]+$/;
        const validPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        if (!Credentials.firstName || !validName.test(Credentials.firstName)) {
            setFirstNameError("Veuillez entrer un prénom valide.");
            setFirstNameValid(false);
        } else {
            setFirstNameError("");
            setFirstNameValid(true);
        }

        if (!Credentials.lastName || !validName.test(Credentials.lastName)) {
            setLastNameError("Veuillez entrer un nom valide.");
            setLastNameValid(false);
        } else {
            setLastNameError("");
            setLastNameValid(true);
        }

        if (
            !Credentials.password ||
            !validPassword.test(Credentials.password)
        ) {
            setPasswordError(
                "Veuillez entrer un mot de passe valide (8 caractères minimum, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial)."
            );
            setPasswordValid(false);
        } else {
            setPasswordError("");
            setPasswordValid(true);
        }
        if (!Credentials.passwordConfirmation) {
            setPasswordConfirmationError(
                "Veuillez confirmer votre mot de passe."
            );
            setPasswordConfirmationValid(false);
        } else {
            setPasswordConfirmationError("");
            setPasswordConfirmationValid(true);
        }

        if (Credentials.password !== Credentials.passwordConfirmation) {
            setPasswordError("Les mots de passe ne correspondent pas.");
            setPasswordConfirmationError(
                "Les mots de passe ne correspondent pas."
            );
            setPasswordValid(false);
            setPasswordConfirmationValid(false);
        }

        if (
            firstNameValid &&
            lastNameValid &&
            passwordValid &&
            passwordConfirmationValid
        ) {
            props.confirmStep(Credentials);
        }
    };

    return (
        <>
            <div className="Form-group">
                <div className="Input FirstName">
                    <div className="Input-icon">
                        <AccountCircleIcon />
                    </div>
                    <TextField
                        inputRef={firstNameRef}
                        className={`form-control ${
                            firstNameError !== "" ? "error" : ""
                        }`}
                        placeholder="Prénom"
                        variant="outlined"
                        error={firstNameError !== ""}
                        helperText={firstNameError}
                    />
                </div>
                <div className="Input LastName">
                    <div className="Input-icon">
                        <AccountCircleIcon />
                    </div>
                    <TextField
                        inputRef={lastNameRef}
                        className={`form-control ${
                            lastNameError !== "" ? "error" : ""
                        }`}
                        placeholder="Nom"
                        variant="outlined"
                        error={lastNameError !== ""}
                        helperText={lastNameError}
                    />
                </div>
                <div className="Input Password">
                    <div className="Input-icon">
                        <LockIcon />
                    </div>
                    <TextField
                        inputRef={passwordRef}
                        className={`form-control ${
                            passwordError !== "" ? "error" : ""
                        }`}
                        placeholder="Mot de passe"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        error={passwordError !== ""}
                        helperText={passwordError}
                        InputProps={{
                            endAdornment: (
                                <div
                                    className="Visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <VisibilityOn />
                                    )}
                                </div>
                            ),
                        }}
                    />
                </div>

                <div className="Input ConfirmPassword">
                    <div className="Input-icon">
                        <LockIcon />
                    </div>
                    <TextField
                        inputRef={passwordConfirmationRef}
                        className={`form-control ${
                            passwordConfirmationError !== "" ? "error" : ""
                        }`}
                        placeholder="Confirmation du mot de passe"
                        variant="outlined"
                        type="password"
                        error={passwordConfirmationError !== ""}
                        helperText={passwordConfirmationError}
                    />
                </div>
            </div>

            <Button variant="text" className="btnPrimary" onClick={handleNext}>
                Continuer
            </Button>
        </>
    );
}

// import React, { useState, useEffect, useRef, createRef } from "react";
// import Button from "@mui/material/Button";
// import LoadingButton from "@mui/lab/LoadingButton";
// // Icons
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import LockIcon from "@mui/icons-material/Lock";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import VisibilityOn from "@mui/icons-material/Visibility";
// import * as Display from "../../../../services/displayAlert";

// export default function FirstStep(props: any) {
//     const firstNameRef = useRef<HTMLInputElement>(null);
//     const lastNameRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);
//     const passwordConfirmationRef = useRef<HTMLInputElement>(null);
//     const [showPassword, setShowPassword] = useState(false);

//     // States for error messages
//     const [firstNameError, setFirstNameError] = useState(false);
//     const [lastNameError, setLastNameError] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);
//     const [passwordConfirmationError, setPasswordConfirmationError] =
//         useState(false);

//     // States for validity
//     const [firstNameValid, setFirstNameValid] = useState(false);
//     const [lastNameValid, setLastNameValid] = useState(false);
//     const [passwordValid, setPasswordValid] = useState(false);
//     const [passwordConfirmationValid, setPasswordConfirmationValid] =
//         useState(false);

//     const handleClickShowPassword = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleNext = () => {
//         const Credentials = {
//             firstName: firstNameRef.current?.value,
//             lastName: lastNameRef.current?.value,
//             password: passwordRef.current?.value,
//             passwordConfirmation: passwordConfirmationRef.current?.value,
//         };

//         // Use regular expressions to validate input
//         const validName = /^[a-zA-Z]+$/;
//         const validPassword =
//             /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

//         if (!Credentials.firstName || !validName.test(Credentials.firstName)) {
//             Display.pushWarning("Veuillez entrer un prénom valide.");
//             setFirstNameError(true);
//         } else {
//             setFirstNameError(false);
//             setFirstNameValid(true);
//         }

//         if (!Credentials.lastName || !validName.test(Credentials.lastName)) {
//             Display.pushWarning("Veuillez entrer un nom valide.");
//             setLastNameError(true);
//         } else {
//             setLastNameError(false);
//             setLastNameValid(true);
//         }

//         if (
//             !Credentials.password ||
//             !validPassword.test(Credentials.password)
//         ) {
//             Display.pushWarning(
//                 "Veuillez entrer un mot de passe valide (8 caractères minimum, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial)."
//             );
//             setPasswordError(true);
//         } else {
//             setPasswordError(false);
//             setPasswordValid(true);
//         }

//         if (!Credentials.passwordConfirmation) {
//             Display.pushWarning("Veuillez confirmer votre mot de passe.");
//             setPasswordConfirmationError(true);
//         } else {
//             setPasswordConfirmationError(false);
//             setPasswordConfirmationValid(true);
//         }

//         if (Credentials.password !== Credentials.passwordConfirmation) {
//             Display.pushFailure("Les mots de passe ne correspondent pas.");
//             setPasswordError(true);
//             setPasswordConfirmationError(true);
//         } else {
//             setPasswordError(false);
//             setPasswordConfirmationError(false);
//             setPasswordValid(true);
//             setPasswordConfirmationValid(true);
//         }

//         if (
//             Credentials.firstName &&
//             Credentials.lastName &&
//             validName.test(Credentials.firstName) &&
//             validName.test(Credentials.lastName) &&
//             Credentials.password &&
//             validPassword.test(Credentials.password) &&
//             Credentials.password === Credentials.passwordConfirmation
//         ) {
//             // props.confirmStep(Credentials);
//             Display.pushInfo("All good...");
//         }
//     };

//     return (
//         <>
//             <div className="Form-group">
//                 <div className="Input FirstName">
//                     <div className="Input-icon">
//                         <AccountCircleIcon />
//                     </div>
//                     <input
//                         ref={firstNameRef}
//                         type="firstname"
//                         className="form-control"
//                         placeholder="Prénom"
//                         required
//                     ></input>
//                 </div>
//                 <div className="Input LastName">
//                     <div className="Input-icon">
//                         <AccountCircleIcon />
//                     </div>
//                     <input
//                         ref={lastNameRef}
//                         type="lastname"
//                         className="form-control"
//                         placeholder="Nom"
//                         required
//                     ></input>
//                 </div>
//                 <div className="Input Password">
//                     <div className="Input-icon">
//                         <LockIcon />
//                     </div>
//                     <input
//                         ref={passwordRef}
//                         type={showPassword ? "text" : "password"}
//                         className="form-control"
//                         placeholder="Mot de passe"
//                         required
//                     ></input>
//                     <div
//                         className="Visibility"
//                         onClick={handleClickShowPassword}
//                     >
//                         {showPassword ? <VisibilityOff /> : <VisibilityOn />}
//                     </div>
//                 </div>

//                 <div className="Input ConfirmPassword">
//                     <div className="Input-icon">
//                         <LockIcon />
//                     </div>
//                     <input
//                         ref={passwordConfirmationRef}
//                         type={"password"}
//                         className="form-control"
//                         placeholder="Mot de passe"
//                         required
//                     ></input>
//                 </div>
//             </div>

//             <Button variant="text" className="btnPrimary" onClick={handleNext}>
//                 Continuer
//             </Button>
//         </>
//     );
// }
