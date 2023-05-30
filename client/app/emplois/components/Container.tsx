"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
//
// Class Selection Dropdown
import SelectClass from "./base/A. Select Class";
//
//
// Screen Width Based Schedule Displays
import Schedule from "./base/B. Desktop Schedule";
import MobileSchedule from "./base/C. Mobile Schedule";

import { Divider, Table } from "@mui/material";
import { Box } from "@mui/system";

export default function Container({
    GroupID,
    Planning,
    Weather,
    Groups,
}: {
    GroupID: string;
    Planning: [];
    Weather: [];
    Groups: [];
}) {
    const [width, setWidth] = useState<number>();
    const searchParams = useSearchParams();
    const QueryGroupID = searchParams?.get("GroupID");
    // State for data
    // GroupID state
    const [StateGroupID, setGroupID] = useState(GroupID);
    const [StatePlanning, setGroupSchedule] = useState(Planning);

    // Change group function
    const setGroup = (Group: string) => {
        if (QueryGroupID != Group && Group != "") {
            setGroupID(Group);
        } else {
            setGroupID(QueryGroupID as string);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "stretch",
                width: "100%",
                minHeight: "50vh",
                color: "text.primary",
            }}
        >
            <SelectClass
                GroupID={StateGroupID}
                setGroup={setGroup}
                Groups={Groups}
            />
            {width && width < 768 ? (
                <Schedule
                    GroupID={GroupID}
                    Planning={Planning}
                    Weather={Weather}
                />
            ) : (
                <Schedule
                    GroupID={GroupID}
                    Planning={Planning}
                    Weather={Weather}
                />
            )}
        </Box>
    );
}
