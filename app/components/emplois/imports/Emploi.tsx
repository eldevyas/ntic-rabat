import React, { useState, useEffect } from "react";
import Schedule from "./Schedule";
import SelectClass from "./SelectClass";
import axios from "axios";

export default function Emploi() {
    // State fro data
    // GroupID state
    const [GroupID, setGroupID] = useState(null);
    const [GroupSchedule, setGroupSchedule] = useState([]);

    // Change group function
    const setGroup = (GroupID: any) => {
        setGroupID(GroupID);
    };

    // async function
    const SetSchedule = async () => {
        // Send request with group id, then update the Schedule
        if (GroupID && GroupID != null) {
            const res = await axios.get(`/api/groups/${GroupID}`);
            const resData = res.data;
            setGroupSchedule(resData);
        } else {
            console.log("No Group ID found");
        }
    };

    // useEffect
    useEffect(() => {
        SetSchedule();
    }, [GroupID]);

    return (
        <>
            <SelectClass setGroup={setGroup} />
            <Schedule Data={GroupSchedule} />
        </>
    );
}
