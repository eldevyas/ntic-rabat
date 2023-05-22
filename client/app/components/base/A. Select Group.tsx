import React, { useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import axios from "axios";
import Select from "react-select";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { HomeStyles } from "@/app/core/SelectStyles";
import { Calendar } from "react-iconly";

const SelectGroup = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    // Set Group state to type array with object of name and value
    const [Groups, setGroups] = React.useState<
        { name: string; value: number }[]
    >([]);
    const [isLoading, setLoading] = React.useState<boolean>(true);

    // Fetch /api/groups with axios
    const SendRequest = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/groups/v2");
            setGroups(response.data);
            setLoading(false);
            return response.data;
        } catch (e) {
            setGroups([]);
            setLoading(false);
            console.log(e);
        }
    };

    const ChangeGroup = (Group: string) => {
        router.push(`/emplois?GroupID=${Group}`);
    };

    React.useEffect(() => {
        if (!(Groups.length > 0)) {
            SendRequest();
        }
    }, [Groups.length, router, setGroups]);

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
                isSearchable={false}
                isLoading={isLoading}
                // is menu open
                menuIsOpen={isOpen}
                onChange={(choice: any) => ChangeGroup(choice.value)}
                // replace main input with button
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: () => null,
                    Control: () => (
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            variant="contained"
                            color="primary"
                            startIcon={
                                <Calendar set="bulk" primaryColor="#fff" />
                            }
                            sx={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                top: 0,
                                left: 0,
                            }}
                        >
                            Sélectionnez un groupe
                        </Button>
                    ),
                    // placeholder
                    Placeholder: () => null,
                }}
                // custom style
                styles={HomeStyles}
            />
        </>
    );
};

export default SelectGroup;
