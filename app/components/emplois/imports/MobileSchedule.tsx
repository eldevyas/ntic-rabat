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
    console.log(Weather);
    return (
        <div className="MobileSchedule">
            <div className="ScheduleHeader">
                <div className="ScheduleTiming">08h30</div>
                <div className="ScheduleTiming">11h00</div>
                <div className="ScheduleTiming">13h30</div>
                <div className="ScheduleTiming">16h00</div>
            </div>
            <div className="ScheduleBody">
                {Data.map((element: any, index: number) => {
                    return (
                        <div className="ScheduleDay" key={index}>
                            <DayCell
                                className="ScheduleDayName"
                                dataDay={element.Day}
                                dataDate={Weather[index].date}
                                dataTemperature={Weather[index].temperature.avg}
                                dataIcon={Weather[index].icon}
                                dataWeather={Weather[index].weather}
                            />
                            <div className="ScheduleDayHours">
                                {/* <Class.Presential prof={} /> */}
                                {element.Time.map(
                                    (time: any, index: number) => {
                                        if (time.Former == "") {
                                            return (
                                                <Class.Free
                                                    key={index}
                                                    prof={time.Former}
                                                    class={time.Hall}
                                                />
                                            );
                                        }
                                        if (time.Hall == "dist") {
                                            return (
                                                <Class.Online
                                                    key={index}
                                                    prof={time.Former}
                                                    class={time.Hall}
                                                />
                                            );
                                        }
                                        if (time.Hall == "absent") {
                                            return (
                                                <Class.Absent
                                                    key={index}
                                                    prof={time.Former}
                                                // class={time.Hall}
                                                />
                                            );
                                        }
                                        else {
                                            return (
                                                <Class.Presential
                                                    key={index}
                                                    prof={time.Former}
                                                    class={time.Hall}
                                                />
                                            );
                                        }
                                    }

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
