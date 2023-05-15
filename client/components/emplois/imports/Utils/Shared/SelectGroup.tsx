import * as React from "react";
import axios from "axios";
import Select, { StylesConfig } from "react-select";
import Router, { useRouter } from "next/router";
// Icons
import ComputerIcon from "@mui/icons-material/Computer";
import BrushIcon from "@mui/icons-material/Brush";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalculateIcon from "@mui/icons-material/Calculate";
import { EmploisStyles } from "../../../../core/SelectStyles";

// ----------------------------------------------------------------------

export default function SelectGroup(props: any) {
    const router = useRouter();
    const CurrentGroup = props.GroupID;
    // Set Group state to type array with object of name and value
    const [Groups, setGroups] = React.useState<
        { name: string; value: number }[]
    >([]);
    const [GroupID, setGroupID] = React.useState<string>(CurrentGroup);
    const [isLoading, setLoading] = React.useState<boolean>(true);

    // Fetch /api/groups with axios
    const SendRequest = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/V2/groups");
            setGroups(response.data);
            setLoading(false);
            return response.data;
        } catch (e) {
            setGroups([]);
            setLoading(false);
            console.log(e);
        }
    };

    const setGroup = props.setGroup;

    const ChangeGroup = (Group: string) => {
        // Give the new GroupID to the query
        if (router.query.GroupID != Group) {
            setGroupID(Group);
            router.push({
                pathname: router.pathname,
                query: {
                    GroupID: Group,
                },
            });
            // on route change complete
            Router.events.on("routeChangeComplete", () => {
                props.setGroup(Group);
            });
        }
    };

    React.useEffect(() => {
        if (!(Groups.length > 0)) {
            SendRequest();
        }
    }, [GroupID, Groups.length, router, setGroup]);

    const AllOptions = Groups.map((group) => {
        return {
            value: group.name,
            label: group.name,
        };
    });

    let groupedOptions = [
        {
            label: "Développement Digitale",
            options: AllOptions.filter((group) => group.value.includes("DEV")),
        },
        {
            label: "Infographie",
            options: AllOptions.filter((group) =>
                group.value.includes("INFO")
                    ? group.value.includes("INFO")
                    : group.value.includes("DES")
            ),
        },
        {
            label: "Infrastructures Digitale",
            options: AllOptions.filter((group) => group.value.includes("ID")),
        },
        {
            label: "Gestion Des Entreprises",
            options: AllOptions.filter((group) => group.value.includes("GE")),
        },
        // other options
        {
            label: "Autres",
            options: AllOptions.filter(
                (group) =>
                    !group.value.includes("DEV") &&
                    !group.value.includes("INFO") &&
                    !group.value.includes("ID") &&
                    !group.value.includes("GE") &&
                    !group.value.includes("DES")
            ),
        },
    ];

    return (
        <>
            {/* React-select with state options */}
            <Select
                options={groupedOptions}
                className="react-select-container"
                // placeholder
                placeholder="Sélectionnez un groupe"
                isSearchable={true}
                isLoading={isLoading}
                onChange={(choice: any) => ChangeGroup(choice.value)}
                // default value
                value={
                    AllOptions.find((group) => group.value == CurrentGroup) ||
                    null
                }
                // custom style
                styles={EmploisStyles}
            />
        </>
    );
}
