import React, { useEffect, useState, useContext } from "react";
import MobileData from "./Utils/Mobile/MobileData";
import MobileSkeleton from "./Utils/Mobile/MobileSkeleton";

const MobileSchedule = (props: any) => {
    const [Data, setData] = useState(props.Data);
    const [Weather, setWeather] = useState(props.Weather);

    // useEffect
    useEffect(() => {
        setData(props.Data);
    }, [props.Data]);

    return (
        <div className="MobileSchedule">
            <div className="ScheduleHeader">
                <div className="ScheduleTiming">08h30</div>
                <div className="ScheduleTiming">11h00</div>
                <div className="ScheduleTiming">13h30</div>
                <div className="ScheduleTiming">16h00</div>
            </div>
            {/* If data is present */}
            {Data.length > 1 ? (
                <MobileData Data={Data} Weather={Weather} />
            ) : (
                <MobileSkeleton Weather={Weather} />
            )}
        </div>
    );
};

export default MobileSchedule;
