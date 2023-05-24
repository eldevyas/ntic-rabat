import * as React from "react";
import axios from "axios";
import Select, { StylesConfig } from "react-select";
import Router, {
    useRouter,
    usePathname,
    useSearchParams,
} from "next/navigation";
import { EmploisStyles } from "../../../../core/SelectStyles";

// ----------------------------------------------------------------------

export default function SelectGroup({
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
    // Routing Constants
    const NextRouter = useRouter();
    const Pathname = usePathname();
    const searchParams = useSearchParams();

    const ChangeGroup = (Group: string) => {
        // Give the new GroupID to the query
        if (searchParams?.get("GroupID") != Group) {
            NextRouter.push(`${Pathname}?GroupID=${Group}`);
            setLoading(true);
        }
    };

    React.useEffect(() => {
        setGroup(
            (searchParams?.get("GroupID")
                ? searchParams?.get("GroupID")
                : "") as string
        );
        setLoading(false);
    }, [searchParams, Pathname]);

    const AllOptions = Groups.map((group: { name: any; value: string }) => {
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
                isSearchable={false}
                isLoading={Loading}
                onChange={(choice: any) => ChangeGroup(choice.value)}
                // default value
                value={
                    AllOptions.find((group) => group.value == GroupID) || null
                }
                // custom style
                styles={EmploisStyles}
            />
        </>
    );
}
