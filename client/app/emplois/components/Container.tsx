"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
//
//
// Class Selection Dropdown
import SelectClass from "./base/A. Select Class";
//
//
// Screen Width Based Schedule Displays
import Schedule from "./base/B. Desktop Schedule";
import MobileSchedule from "./base/C. Mobile Schedule";
//
//
export default function Container(props: any) {
    const [width, setWidth] = useState<number>();

    const Router = useRouter();
    // State for data
    // GroupID state
    const [GroupID, setGroupID] = useState(props["data-GroupID"]);
    const [GroupSchedule, setGroupSchedule] = useState(props["data-Schedule"]);
    const [Weather, setWeather] = useState(props["data-Weather"]);

    // Change group function
    const setGroup = (Group: string) => {
        if (Router.query.GroupID != Group && Group != "") {
            setGroupID(Group);
        } else {
            setGroupID(Router.query.GroupID as string);
        }
    };

    // async function

    // useEffect
    useEffect(() => {
        const SetSchedule = async () => {
            // Send request with group id, then update the Schedule
            setGroupSchedule([]);
            if (GroupID != "" && GroupID != null) {
                const res = await axios.get(`/api/V2/groups/${GroupID}`);
                const resData = res.data;
                setGroupSchedule(resData);
            } else {
                if (Router.query.GroupID) {
                    const res = await axios.get(
                        `/api/V2/groups/${Router.query.GroupID}`
                    );
                    const resData = res.data;
                    setGroupSchedule(resData);
                } else {
                    console.log("No Group ID found");
                }
            }

            setWidth(window.innerWidth);
            function handleResize() {
                setWidth(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        };
        SetSchedule();
    }, [GroupID, Router.query.GroupID]);

    return (
        <>
            <SelectClass GroupID={GroupID} setGroup={setGroup} />
            <>
                {width && width < 768 ? (
                    <MobileSchedule
                        GroupID={GroupID}
                        Data={GroupSchedule}
                        Weather={Weather}
                    />
                ) : (
                    <Schedule
                        GroupID={GroupID}
                        Data={GroupSchedule}
                        Weather={Weather}
                    />
                )}
            </>
        </>
    );
}
