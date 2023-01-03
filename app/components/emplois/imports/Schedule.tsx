import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ScheduleHeader from "./Utils/ScheduleHeader";
import ScheduleSkeleton from "./Utils/ScheduleSkeleton";
import ScheduleData from "./Utils/ScheduleData";
import {
    ScheduleColumn,
    ScheduleColumnOnline,
    ScheduleColumnAbsent,
} from "./Utils/ScheduleColumn";
import { useSelector, useDispatch } from "react-redux";
// import context

const Schedule = (props: any) => {
    // State with context
    const [Data, setData] = useState(props.Data);

    // useEffect
    useEffect(() => {
        setData(props.Data);
    }, [props.Data]);

    return (
        <div className="Schedule">
            <table border={0}>
                <ScheduleHeader />
                <tbody>
                    {
                        // Data shall be an array with more than one record
                        Data?.length > 1 ? (
                            <ScheduleData Data={Data} />
                        ) : (
                            <ScheduleSkeleton />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
