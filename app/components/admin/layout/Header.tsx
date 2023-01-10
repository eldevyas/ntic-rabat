import React from "react";
// import mui button
import Button from "@mui/material/Button";
import Image from "next/image";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
const Header = () => {
    return (
        <div className="Header">
            <div className="NavButtons">
                <Button variant="contained" className="NavButton">
                    Home
                </Button>
                <Button variant="contained" className="NavButton">
                    Emplois
                </Button>
                <Button variant="contained" className="NavButton">
                    Espace Stagiaire
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className="NavButton Active"
                >
                    Administration
                </Button>
            </div>
            <div className="User">
                <div className="UserImage">
                    <Image
                        src="/assets/svg/profile.svg"
                        alt="User Avatar"
                        width={57}
                        height={57}
                    />
                </div>
                <div className="UserInfos">
                    <p className="UserName">M Mohammed ElAissaoui</p>
                    <p className="UserRole">Admin</p>
                </div>
                <div className="UserActions">
                    <ExpandMoreOutlinedIcon className="UserIcon" />
                </div>
            </div>
        </div>
    );
};

export default Header;
