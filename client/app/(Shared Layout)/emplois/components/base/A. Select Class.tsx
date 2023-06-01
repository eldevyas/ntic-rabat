import React from "react";
import { Box } from "@mui/material";
import Select from "./utilities/Select";

export default function SelectClass({
    GroupID,
    setGroup,
    Groups,
    Loading,
    setLoading,
}: {
    GroupID: string;
    setGroup: (GroupID: string) => void;
    Groups: [];
    Loading: boolean;
    setLoading: (loading: boolean) => void;
}) {
    return (
        <Box
            sx={{
                postion: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem 2rem",
                width: "100%",
                background: (theme) =>
                    theme.palette.mode == "light"
                        ? theme.palette.primary.main
                        : theme.palette.primary.light,
                ".react-select-container": {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minWidth: "250px",
                    maxWidth: "400px",
                    border: "none !important",
                    outline: "none !important",
                    boxShadow: "none !important",
                },
            }}
        >
            <Select
                GroupID={GroupID}
                setGroup={setGroup}
                Groups={Groups}
                Loading={Loading}
                setLoading={setLoading}
            />
        </Box>
    );
}
