import React, { useState, useEffect } from "react";
import Schedule from "./Schedule";
import SelectClass from "./SelectClass";
import axios from "axios";
import { useRouter } from "next/router";
import MobileSchedule from "./MobileSchedule";

export default function Emploi(props: any) {
    const [width, setWidth] = useState<number>();

    const Router = useRouter();
    // State fro data
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
