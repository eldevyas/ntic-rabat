import * as React from "react";
import axios from "axios";
import Select, { StylesConfig } from "react-select";
import Router, { useRouter } from "next/router";
// Icons
import ComputerIcon from "@mui/icons-material/Computer";
import BrushIcon from "@mui/icons-material/Brush";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalculateIcon from "@mui/icons-material/Calculate";

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
                styles={{
                    control: (base: any, state: any) => ({
                        ...base,
                        backgroundColor: state.isFocused ? "#fff" : "#fff",
                        borderColor: state.isFocused ? "#fff" : "#fff",
                        color: state.isFocused ? "#39b54a" : "#fff",
                        boxShadow: "none",
                        borderRadius: "10px",
                        outline: "none",
                        border: "none",
                        padding: "0.25rem 0.25rem",
                    }),
                    menu: (base: any, state: any) => ({
                        ...base,
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        borderColor: state.isFocused ? "#fff" : "#fff",
                        color: state.isFocused ? "#39b54a" : "#fff",
                        // boxShadow: "none",
                        borderRadius: "10px",
                        zIndex: 100,
                        overflow: "hidden",
                        backdropFilter: "blur(10px)",
                        boxShadow:
                            "0px 0px 10rem rgba(0, 0, 0, 0.25) !important",
                    }),
                    option: (base: any, state: any) => ({
                        ...base,
                        backgroundColor: state.isSelected ? "#000" : "white",
                        borderColor: state.isSelected ? "#f5f5f5" : "#fff",
                        color: state.isSelected ? "#fff" : "#303030",
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "1rem",
                        fontWeight: "400",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "10px",
                        // hover
                        "&:hover": {
                            backgroundColor: state.isFocused
                                ? "#4BB8E7"
                                : "#fff",
                            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
                            color:
                                state.isFocused || state.isSelected
                                    ? "#fff"
                                    : "#303030",
                        },
                        "&:active": {
                            backgroundColor: state.isFocused
                                ? "#4BB8E7"
                                : "#fff",
                            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
                        },
                        // selected option
                        "&:selected": {
                            backgroundColor: "#555",
                            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
                        },
                    }),
                    // group
                    groupHeading: (base: any, state: any) => ({
                        ...base,
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: "800",
                        padding: "0rem 1.25rem",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }),
                }}
            />
        </>
    );
}
