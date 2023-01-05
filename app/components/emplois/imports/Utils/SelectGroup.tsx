import * as React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

// Icons
import ComputerIcon from "@mui/icons-material/Computer";
import BrushIcon from "@mui/icons-material/Brush";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalculateIcon from "@mui/icons-material/Calculate";

// ----------------------------------------------------------------------

export default function SelectGroup(props: any) {
    // Set Group state to type array with object of name and value
    const [Groups, setGroups] = React.useState<
        { name: String; value: number }[]
    >([]);

    // Fetch /api/groups with axios
    const SendRequest = async () => {
        try {
            const response = await axios.get("/api/groups");
            setGroups(response.data);
            return response.data;
        } catch (e) {
            setGroups([]);
            console.log(e);
        }
    };

    React.useEffect(() => {
        SendRequest();
        console.log(Groups);
    }, []);

    return (
        <>
            <select className="SelectGroup" {...props}>
                <option value="" selected>
                    Selectionnez un emplois
                </option>
                {/* Loop all groups */}
                {Groups.map((group, index) => {
                    return (
                        <>
                            {group.name == "" ? (
                                ""
                            ) : (
                                <option key={index} value={group.value}>
                                    {group.name}
                                </option>
                            )}
                        </>
                    );
                })}
            </select>
        </>
    );
}
