import React from "react";
// import mui button
import Button from "@mui/material/Button";
import Image from "next/image";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import User from "@/app/core/auth/User";
const Header = () => {
    const Router = useRouter();
    return (
        <div className="Header">
            <div className="NavButtons">
                <Button
                    variant="text"
                    className="NavButton"
                    onClick={() => Router.push("/")}
                >
                    Home
                </Button>
                <Button
                    variant="text"
                    className="NavButton"
                    onClick={() => Router.push("/emplois")}
                >
                    Emplois
                </Button>
                <Button
                    variant="text"
                    className="NavButton"
                    onClick={() => Router.push("/")}
                >
                    Espace Stagiaire
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    className="NavButton Active"
                    onClick={() => Router.push("/admin")}
                >
                    Administration
                </Button>
            </div>
            <User />
        </div>
    );
};

export default Header;
{
    {
    }
}
