import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
// Icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import FaceIcon from "@mui/icons-material/Face";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VisibilityOn from "@mui/icons-material/Visibility";
import RepeatIcon from "@mui/icons-material/Repeat";
import CheckIcon from "@mui/icons-material/Check";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

export default function BasicInformation(props: any) {
    // Server url from ENV
    const AppURL = process.env.NEXT_PUBLIC_HOSTNAME;
    const ServerURL = process.env.SERVER_PUBLIC_HOSTNAME;

    // Refs for input fields
    const userNameRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    // States for error messages
    const [userNameError, setUserNameError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] =
        useState("");

    // States for validity
    // username is checking
    const [userNameIsChecking, setUserNameIsChecking] = useState(false);
    const [userNameValid, setUserNameValid] = useState(false);
    // username available
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [emailIsChecking, setEmailIsChecking] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordConfirmationValid, setPasswordConfirmationValid] =
        useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = () => {
        if (
            !emailRef.current?.value ||
            !emailRef.current?.value.endsWith("@ofppt-edu.ma")
        ) {
            setEmailError(
                "Veuillez entrer une adresse email valide du domaine @ofppt-edu.ma."
            );
            setEmailValid(false);
        } else {
            setEmailError("");
            setEmailValid(true);
        }
    };

    const handleEmailAvailability = () => {
        setEmailIsChecking(true);
        axios
            .get(
                `${ServerURL}/api/users/check-email/${emailRef.current?.value}`
            )
            .then((response) => {
                if (response.status == 200) {
                    setEmailError("");
                    setEmailValid(true);
                } else {
                    setEmailError("Cet email est déjà utilisé.");
                    setEmailValid(false);
                }
            })
            .catch((error: any) => {
                if (error.response?.status == 409) {
                    setEmailError("Cet email est déjà utilisé.");
                    setEmailValid(false);
                } else {
                    // error validating email
                    setEmailError(`
                        Une erreur s'est produite (Communication avec serveur échouée).
                    `);
                    setEmailValid(false);
                }
            });
        setEmailIsChecking(false);
    };

    // Validate username availability
    const handleUserNameAvailability = async () => {
        setUserNameIsChecking(true);
        try {
            const response = await axios.get(
                `${ServerURL}/api/users/check-username/${userNameRef.current?.value}`
            );
            if (response.status == 200) {
                setUserNameError("");
                setUserNameValid(true);
            } else {
                setUserNameError("Ce nom d'utilisateur est déjà utilisé.");
                setUserNameValid(false);
            }
        } catch (error: any) {
            // check error status
            if (error.response?.status == 409) {
                setUserNameError("Ce nom d'utilisateur est déjà utilisé.");
                setUserNameValid(false);
            } else {
                // error validating username
                setUserNameError(`
                    Une erreur s'est produite (Communication avec serveur échouée).
                `);
                setUserNameValid(false);
            }
        }
        setUserNameIsChecking(false);
    };

    const handleUsernameChange = () => {
        // keep it lowercase
        userNameRef.current!.value = userNameRef.current!.value.toLowerCase();

        // remove spaces from it
        userNameRef.current!.value = userNameRef.current!.value.replace(
            /\s/g,
            ""
        );

        // const validUsername = /^[a-z0-9_.]+$/;
        const validUsername = /^[a-z0-9_.]{3,}$/;
        if (
            !userNameRef.current?.value ||
            !validUsername.test(userNameRef.current?.value)
        ) {
            // Find the missing requirement
            if ((userNameRef.current?.value.length as number) < 3) {
                setUserNameError(
                    "Le nom d'utilisateur doit contenir au moins 3 caractères."
                );
                setUserNameValid(false);
            } else if (
                !validUsername.test(userNameRef.current?.value as string)
            ) {
                // find characters to remove
                const invalidValue = userNameRef.current?.value;
                const validValue = userNameRef.current?.value.replace(
                    /[^a-z0-9_.]/g,
                    ""
                );
                const validChars = invalidValue?.replace(
                    validValue as string,
                    ""
                );

                setUserNameError(
                    `Le nom d'utilisateur ne peut contenir que des lettres minuscules, des chiffres, des points et des tirets. Veuillez supprimer les caractères suivants: ${validChars}`
                );
                setUserNameValid(false);
            }
        } else {
            setUserNameError("");
            setUserNameValid(true);
        }
    };

    // Validate first name
    const handleFirstNameChange = () => {
        // remove spaces from it
        firstNameRef.current!.value = firstNameRef.current!.value.replace(
            /\s/g,
            ""
        );
        // Capitalize it
        firstNameRef.current!.value = firstNameRef
            .current!.value.toLowerCase()
            .replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
        const validName = /^[a-zA-Z]+$/;
        if (
            !firstNameRef.current?.value ||
            !validName.test(firstNameRef.current?.value)
        ) {
            setFirstNameError("Veuillez entrer un prénom valide.");
            setFirstNameValid(false);
        } else {
            setFirstNameError("");
            setFirstNameValid(true);
        }
    };

    // Validate last name
    const handleLastNameChange = () => {
        // remove spaces from it
        lastNameRef.current!.value = lastNameRef.current!.value.replace(
            /\s/g,
            ""
        );
        // Capitalize it
        lastNameRef.current!.value = lastNameRef
            .current!.value.toLowerCase()
            .replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });

        const validName = /^[a-zA-Z]+$/;
        if (
            !lastNameRef.current?.value ||
            !validName.test(lastNameRef.current?.value)
        ) {
            setLastNameError("Veuillez entrer un nom valide.");
            setLastNameValid(false);
        } else {
            setLastNameError("");
            setLastNameValid(true);
        }
    };

    // Validate password
    const handlePasswordChange = () => {
        const validPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (
            !passwordRef.current?.value ||
            !validPassword.test(passwordRef.current?.value)
        ) {
            // setPasswordError(
            //     "Veuillez entrer un mot de passe valide (8 caractères minimum, 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial)."
            // );
            // Which characters are missing
            let missingCharacters = "";
            if (!/[A-Z]/.test(passwordRef.current?.value as string)) {
                missingCharacters += "1 majuscule, ";
            }
            if (!/[a-z]/.test(passwordRef.current?.value as string)) {
                missingCharacters += "1 minuscule, ";
            }
            if (!/[0-9]/.test(passwordRef.current?.value as string)) {
                missingCharacters += "1 chiffre, ";
            }
            if (!/[!@#\$%\^&\*]/.test(passwordRef.current?.value as string)) {
                missingCharacters += "1 caractère spécial, ";
            }
            if ((passwordRef.current?.value?.length as number) < 8) {
                missingCharacters += "8 caractères minimum, ";
            }

            setPasswordError(
                "Veuillez entrer un mot de passe valide ( Encore: " +
                    missingCharacters.slice(0, -2) +
                    ")."
            );
            setPasswordValid(false);
        } else {
            setPasswordError("");
            setPasswordValid(true);
        }
    };

    // Validate password confirmation
    const handlePasswordConfirmationChange = () => {
        if (!passwordConfirmationRef.current?.value) {
            setPasswordConfirmationError(
                "Veuillez confirmer votre mot de passe."
            );
            setPasswordConfirmationValid(false);
        } else if (
            passwordConfirmationRef.current?.value !==
            passwordRef.current?.value
        ) {
            setPasswordConfirmationError(
                "Les mots de passe ne correspondent pas."
            );
            setPasswordConfirmationValid(false);
        } else {
            setPasswordConfirmationError("");
            setPasswordConfirmationValid(true);
        }
    };

    const handleNext = () => {
        const Credentials = {
            username: userNameRef.current?.value,
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            passwordConfirmation: passwordConfirmationRef.current?.value,
        };

        if (
            userNameValid &&
            firstNameValid &&
            lastNameValid &&
            emailValid &&
            passwordValid &&
            passwordConfirmationValid
        ) {
            props.confirmStep(Credentials);
        } else {
            handleUserNameAvailability();
            handleEmailAvailability();
            handleUsernameChange();
            handleFirstNameChange();
            handleLastNameChange();
            handleEmailChange();
            handlePasswordChange();
            handlePasswordConfirmationChange();
        }
    };

    return (
        <>
            <div className="Form-group">
                <div className="Input Username">
                    <div className="Input-icon">
                        <FaceIcon />
                    </div>
                    <TextField
                        InputProps={{
                            endAdornment: userNameIsChecking ? (
                                <div className="Progress">
                                    <CircularProgress size={15} />
                                </div>
                            ) : userNameValid ? (
                                <div className="Valid">
                                    <CheckIcon />
                                </div>
                            ) : null,
                        }}
                        sx={{
                            // p color
                            "& .MuiFormHelperText-root": {
                                color: userNameValid
                                    ? "#4caf50"
                                    : userNameError
                                    ? "#f44336"
                                    : "#9e9e9e",
                            },
                        }}
                        inputRef={userNameRef}
                        className={`form-control ${
                            userNameError !== "" ? "error" : ""
                        }`}
                        placeholder="Nom d'utilisateur"
                        variant="outlined"
                        error={userNameError !== ""}
                        helperText={
                            userNameError
                                ? userNameError
                                : userNameValid
                                ? "Nom d'utilisateur disponible."
                                : "Votre nom d'utilisateur doit contenir au moins 8 caractères."
                        }
                        onBlur={() => {
                            if (
                                userNameRef?.current?.value !== "" &&
                                userNameRef?.current?.value !== undefined
                            ) {
                                handleUserNameAvailability();
                            }
                        }}
                        // change
                        onChange={() => {
                            handleUsernameChange();
                        }}
                    />
                </div>
                <div className="Input FirstName">
                    <div className="Input-icon">
                        <AccountCircleIcon />
                    </div>
                    <TextField
                        InputProps={{
                            endAdornment: firstNameValid ? (
                                <div className="Valid">
                                    <CheckIcon />
                                </div>
                            ) : null,
                        }}
                        inputRef={firstNameRef}
                        className={`form-control ${
                            firstNameError !== "" ? "error" : ""
                        }`}
                        placeholder="Prénom"
                        variant="outlined"
                        error={firstNameError !== ""}
                        helperText={firstNameError}
                        onBlur={() => {
                            if (
                                firstNameRef?.current?.value !== "" &&
                                firstNameRef?.current?.value !== undefined
                            ) {
                                handleFirstNameChange();
                            }
                        }}
                        // change
                        onChange={() => {
                            handleFirstNameChange();
                        }}
                    />
                </div>
                <div className="Input LastName">
                    <div className="Input-icon">
                        <SupervisedUserCircleIcon />
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
                        onBlur={() => {
                            if (
                                lastNameRef?.current?.value !== "" &&
                                lastNameRef?.current?.value !== undefined
                            ) {
                                handleLastNameChange();
                            }
                        }}
                        // change
                        onChange={() => {
                            handleLastNameChange();
                        }}
                        InputProps={{
                            endAdornment: lastNameValid ? (
                                <div className="Valid">
                                    <CheckIcon />
                                </div>
                            ) : null,
                        }}
                    />
                </div>
                <div className="Input Email">
                    <div className="Input-icon">
                        <EmailIcon />
                    </div>
                    <TextField
                        inputRef={emailRef}
                        className={`form-control ${
                            emailError !== "" ? "error" : ""
                        }`}
                        placeholder="Email"
                        variant="outlined"
                        error={emailError !== ""}
                        helperText={
                            emailError
                                ? emailError
                                : emailValid
                                ? "Votre adresse email est valide."
                                : `Veuillez entrer l'adresse email fournie par votre administration. Assurez-vous qu'elle appartient au domaine @ofppt-edu.ma. Nous vous enverrons un code de confirmation à cette adresse.`
                        }
                        // if valid, the helper text is green
                        sx={{
                            // p color
                            "& .MuiFormHelperText-root": {
                                color: emailValid
                                    ? "#4caf50"
                                    : emailError
                                    ? "#f44336"
                                    : "#9e9e9e",
                            },
                        }}
                        onBlur={() => {
                            if (
                                emailRef?.current?.value !== "" &&
                                emailRef?.current?.value !== undefined
                            ) {
                                handleEmailChange();
                                handleEmailAvailability();
                            }
                        }}
                        // change
                        onChange={() => {
                            handleEmailChange();
                        }}
                        InputProps={{
                            endAdornment: emailIsChecking ? (
                                <div className="Progress">
                                    <CircularProgress size={15} />
                                </div>
                            ) : emailValid ? (
                                <div className="Valid">
                                    <CheckIcon />
                                </div>
                            ) : null,
                        }}
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
                        onBlur={() => {
                            if (passwordRef?.current?.value !== "") {
                                handlePasswordChange();
                            }
                        }}
                        // change
                        onChange={() => {
                            handlePasswordChange();
                        }}
                    />
                </div>

                <div className="Input ConfirmPassword">
                    <div className="Input-icon">
                        <RepeatIcon />
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
                        onBlur={() => {
                            if (
                                passwordConfirmationRef?.current?.value !== ""
                            ) {
                                handlePasswordConfirmationChange();
                            }
                        }}
                        InputProps={{
                            endAdornment: passwordConfirmationValid ? (
                                <div className="Valid">
                                    <CheckIcon />
                                </div>
                            ) : null,
                        }}
                        // change
                        onChange={() => {
                            handlePasswordConfirmationChange();
                        }}
                    />
                </div>
            </div>

            {props.isLoading || userNameIsChecking || emailIsChecking ? (
                <LoadingButton
                    variant="contained"
                    color="primary"
                    loadingPosition="center"
                    loading
                    sx={{
                        cursor: "loading !important",
                        minHeight: "50px",
                        backgroundColor:
                            "var(--mui-palette-primary-main) !important",
                        background:
                            "var(--mui-palette-primary-main) !important",
                        width: "100%",
                        marginBottom: "0.75rem",
                    }}
                />
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "100%" }}
                    onClick={() => {
                        handleNext();
                    }}
                >
                    S'inscrire
                </Button>
            )}
        </>
    );
}
