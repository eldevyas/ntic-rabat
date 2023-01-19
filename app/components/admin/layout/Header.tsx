import React from "react";
// import mui button
import Button from "@mui/material/Button";
import Image from "next/image";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { IconButton } from "../../core/button";
import { useRouter } from "next/router";
const Header = () => {
    const Router = useRouter();
    return (
        <div className="Header">
            <div className="NavButtons">
                <Button variant="text" className="NavButton" onClick={() => Router.push('/')}>
                    Home
                </Button>
                <Button variant="text" className="NavButton" onClick={() => Router.push('/emplois')}>
                    Emplois
                </Button>
                <Button variant="text" className="NavButton" onClick={() => Router.push('/')}>
                    Espace Stagiaire
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    className="NavButton Active"
                    onClick={() => Router.push('/admin')}
                >
                    Administration
                </Button>
            </div>
            <div className="User">
                <div className="UserImage">
                    <Image
                        src="/assets/img/pp/pp1.png"
                        alt="User Avatar"
                        className="Image"
                        width={45}
                        height={45}
                        onClick={() => Router.push('/')}
                    />
                </div>
                <div className="UserInfos">
                    <p className="UserName">Mohammed El Aissaoui</p>
                    <p className="UserRole">Admin</p>
                </div>
                <IconButton
                    variant="text"
                    bgColor="White"
                    className="UserActions"
                >
                    <ExpandMoreOutlinedIcon className="UserIcon" />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
{
    {
    }
}
