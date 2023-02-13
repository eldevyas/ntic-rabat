import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DefaultButton } from "../../../core/button";
import { signOut } from "next-auth/react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const User = (props: {
    image: string | undefined;
    name: string | undefined;
    email: string | undefined;
    role: string | undefined;
}) => {
    const [isMenuOpen, setisMenuOpen] = React.useState(false);
    const handleisMenuOpenClick = () => {
        setisMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (
            isMenuOpen &&
            e.target instanceof HTMLElement &&
            !e.target.closest(".User__Dropdown")
        ) {
            setisMenuOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="User">
            <div className="User__Info">
                <div className="User__Info__Avatar">
                    {
                        // if user has an image
                        props.image && props.image != "" ? (
                            <img src={props.image} alt="User Avatar" />
                        ) : (
                            // if user has no image
                            <img
                                src="/assets/img/pp/pp1.png"
                                alt="User Default Avatar"
                            />
                        )
                    }
                </div>
                <div className="User__Info__Name">
                    <h3>{props.name}</h3>
                    <p>{props.role}</p>
                </div>
            </div>
            <div className="User__Action">
                <IconButton
                    className="User__Action__Button"
                    onClick={handleisMenuOpenClick}
                >
                    {isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </IconButton>
            </div>

            {isMenuOpen && (
                <div className="User__Dropdown">
                    <DefaultButton
                        color="white"
                        className=" UsualButton"
                        startIcon={<AccountBoxIcon />}
                    >
                        Profile
                    </DefaultButton>
                    <DefaultButton
                        color="LightGreen"
                        startIcon={<LogoutIcon />}
                        onClick={() => {
                            // sign out
                            signOut();
                        }}
                    >
                        Se déconnecter
                    </DefaultButton>
                </div>
            )}
        </div>
    );
};

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default User;
