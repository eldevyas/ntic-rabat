import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
// import nextjs button
import Button from "@mui/material/Button";
const Content = () => {
    return (
        <div className="Content">
            <div className="Title">
                <div className="Box">
                    <AddBoxOutlinedIcon />
                    <p>Annonces</p>
                </div>
                <div className="Button">
                    <Button variant="contained">
                        <AddBoxOutlinedIcon />
                        Ajouter une annonce
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Content;
