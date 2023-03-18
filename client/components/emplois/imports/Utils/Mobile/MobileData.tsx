import React, { useEffect, useState } from "react";
import * as Class from "./../../Utils/Mobile/components/ClassCell";
import DayCell from "./../../Utils/Mobile/components/DayCell";

export default function MobileData(props: any) {
    const [Data, setData] = useState(props.Data);
    const [Weather, setWeather] = useState(props.Weather);

    // useEffect
    useEffect(() => {
        setData(props.Data);
    }, [props.Data]);

    return (
        <>
            <div className="ScheduleBody">
                {Data.map((element: any, index: number) => {
                    return (
                        <div className="ScheduleDay" key={index}>
                            <DayCell
                                className="ScheduleDayName"
                                dataDay={element.Day}
                                dataDate={Weather && Weather[index] && Weather[index].date}
                                dataTemperature={Weather && Weather[index] && Weather[index].temperature && Weather[index].temperature.avg}
                                dataIcon={Weather[index]?.icon}
                                dataWeather={Weather[index]?.weather}
                                dataShortWeather={Weather[index]?.shortWeather}
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
                                        } else {
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
        </>
    );
}
