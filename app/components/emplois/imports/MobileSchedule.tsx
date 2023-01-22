import React, { useEffect, useState, useContext } from "react";
import * as Class from "./Utils/Mobile/components/ClassCell";
import DayCell from "./Utils/Mobile/components/DayCell";

const MobileSchedule = (props: any) => {
    // State with context
    const [Data, setData] = useState(props.Data);
    const [Weather, setWeather] = useState(props.Weather);

    // useEffect
    useEffect(() => {
        setData(props.Data);
    }, [props.Data]);
    console.log(Data);
    return (
        <div className="MobileSchedule">
            <div className="ScheduleHeader">
                <div className="ScheduleTiming">08h30</div>
                <div className="ScheduleTiming">11h00</div>
                <div className="ScheduleTiming">13h30</div>
                <div className="ScheduleTiming">16h00</div>
            </div>
            <div className="ScheduleBody">
                <div className="ScheduleDay">
                    <DayCell
                        className="ScheduleDayName"
                        dataDay={"Lundi"}
                        dataDate={Weather[0].date}
                        dataTemperature={Weather[0].temperature.avg}
                        dataIcon={Weather[0].icon}
                        dataWeather={Weather[0].weather}
                    />
                    <div className="ScheduleDayHours">
                        <Class.Online />
                        <Class.Free />
                        <Class.Absent />
                        <Class.Presential />
                    </div>
                </div>
                {Data.map((element: any, index: number) => {
                    return (
                        <div className="ScheduleDay" key={index}>
                            <DayCell
                                className="ScheduleDayName"
                                dataDay={element.Day}
                                dataIcon={element.icon}
                                dataWeather={element.weather}
                            />
                            <div className="ScheduleDayHours">
                                {/* <Class.Presential prof={} /> */}
                                {element.time.map(
                                    (time: any, index: number) => {
                                        return (
                                            <Class.Presential
                                                key={index}
                                                prof={time.prof}
                                                class={time.class}
                                               
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileSchedule;
