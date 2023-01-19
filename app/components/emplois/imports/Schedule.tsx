import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ScheduleHeader from "./Utils/ScheduleHeader";
import ScheduleSkeleton from "./Utils/ScheduleSkeleton";
import ScheduleData from "./Utils/ScheduleData";
// import context

const Schedule = (props: any) => {
    // State with context
    const [Data, setData] = useState(props.Data);
    const [Weather, setWeather] = useState(props.Weather);

    // useEffect
    useEffect(() => {
        setData(props.Data);
    }, [props.Data]);

    return (
        <div className="Schedule">
            <table border={0}>
                <ScheduleHeader data-GroupID={props.GroupID} />
                <tbody>
                    {
                        // Data shall be an array with more than one record
                        Data.length > 1 ? (
                            <ScheduleData Data={Data} Weather={Weather} />
                        ) : (
                            <ScheduleSkeleton Weather={Weather} />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
