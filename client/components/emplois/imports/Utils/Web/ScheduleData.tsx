import axios from "axios";
import { resolve } from "node:path/win32";
import React, { useState, useEffect } from "react";
import {
    ScheduleColumn,
    ScheduleColumnOnline,
    ScheduleColumnAbsent,
    ScheduleColumnFree,
} from "./ScheduleColumn";
import ScheduleSkeleton from "./ScheduleSkeleton";
import WeatherCell from "./WeatherCell";

const ScheduleData = (props: any) => {
    useEffect(() => {}, []);

    let Data: { Day: String; Time: { Former: String; Hall: String }[] }[] =
        props.Data;

    const [Weather, setWeather] = useState<
        {
            date: string;
            day: string;
            temperature: {
                max: number;
                min: number;
                avg: number;
            };
            icon: string;
            weather: string;
            shortWeather: string;
        }[]
    >(props.Weather);

    return (
        <>
            {Data.length >= 6 ? (
                Data.map((Row: any, Index: number) => {
                    return (
                        <tr key={"R" + Index}>
                            <td>
                                {Weather && Weather.length >= 6 ? (
                                    <>
                                        <WeatherCell
                                            dataDay={Row.Day}
                                            dataDate={Weather[Index].date}
                                            dataTemperature={
                                                Weather[Index].temperature.avg
                                            }
                                            dataIcon={Weather[Index].icon}
                                            dataWeather={Weather[Index].weather}
                                            dataShortWeather={
                                                Weather[Index].shortWeather
                                            }
                                        />
                                    </>
                                ) : (
                                    <>
                                        <WeatherCell
                                            dataDay={Row.Day}
                                            dataDate={new Date()}
                                            dataTemperature={Math.floor(
                                                Math.random() * 20
                                            )}
                                            dataIcon={"Cloudy"}
                                            dataWeather={"Nuageux"}
                                        />
                                    </>
                                )}
                            </td>
                            {Row.Time.map((Cell: any, index: number) => {
                                if (Cell.Hall == "") {
                                    return (
                                        <td key={"C" + index}>
                                            <ScheduleColumnFree />
                                        </td>
                                    );
                                } else if (
                                    Cell.Hall == "Absente" ||
                                    Cell.Hall == "Absent"
                                ) {
                                    return (
                                        <td key={"C" + index}>
                                            <ScheduleColumnAbsent
                                                name={Cell.Former}
                                                class={Cell.Hall}
                                            />
                                        </td>
                                    );
                                } else if (Cell.Hall == "dist") {
                                    return (
                                        <td key={"C" + index}>
                                            <ScheduleColumnOnline
                                                name={Cell.Former}
                                            />
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td key={"R" + index}>
                                            <ScheduleColumn
                                                name={Cell.Former}
                                                class={Cell.Hall}
                                            />
                                        </td>
                                    );
                                }
                            })}
                        </tr>
                    );
                })
            ) : (
                <ScheduleSkeleton />
            )}
        </>
    );
};

export default ScheduleData;
