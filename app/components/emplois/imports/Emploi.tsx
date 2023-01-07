import React, { useState, useEffect } from "react";
import Schedule from "./Schedule";
import SelectClass from "./SelectClass";
import axios from "axios";
import { useRouter } from "next/router";

export default function Emploi(props: any) {
    const Router = useRouter();
    // State fro data
    // GroupID state
    const [GroupID, setGroupID] = useState(props["data-GroupID"]);
    const [GroupSchedule, setGroupSchedule] = useState(props["data-Schedule"]);

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
        };
        SetSchedule();
    }, [GroupID]);

    return (
        <>
            <SelectClass GroupID={GroupID} setGroup={setGroup} />
            <Schedule GroupID={GroupID} Data={GroupSchedule} />
        </>
    );
}
