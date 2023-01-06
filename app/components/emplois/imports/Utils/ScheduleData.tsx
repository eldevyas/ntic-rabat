import axios from "axios";
import { resolve } from "node:path/win32";
import React, { useState, useEffect } from "react";
import {
    ScheduleColumn,
    ScheduleColumnOnline,
    ScheduleColumnAbsent,
} from "./ScheduleColumn";
import WeatherCell from "./WeatherCell";

const ScheduleData = (props: any) => {
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
        }[]
    >();

    // send request with axios to API ("api/weather");
    const getWeather = async () => {
        let res = await axios.get("/api/weather");
        if (res.status === 200) {
            setWeather(res.data);
            console.log(res.data);
            return;
        } else {
            console.log(res.data);
            setWeather([]);
        }
    };

    useEffect(() => {
        getWeather();
    }, []);
    return (
        <>
            {Data.map((Row, Index) => {
                return (
                    <tr key={Index}>
                        <td>
                            {Weather ? (
                                <>
                                    <WeatherCell
                                        dataDay={Row.Day}
                                        dataDate={Weather[Index].date}
                                        dataTemperature={
                                            Weather[Index].temperature.avg
                                        }
                                        dataIcon={Weather[Index].icon}
                                        dataWeather={Weather[Index].weather}
                                    />
                                </>
                            ) : (
                                <>
                                    <div>
                                        <span>{Row.Day}</span>
                                        <span>18° C</span>
                                    </div>
                                </>
                            )}
                        </td>
                        {Row.Time.map((Cell, Index) => {
                            if (Cell.Hall == "") {
                                return <td key={Index}></td>;
                            } else if (
                                Cell.Hall == "Absente" ||
                                Cell.Hall == "Absent"
                            ) {
                                return (
                                    <td key={Index}>
                                        <ScheduleColumnAbsent
                                            name={Cell.Former}
                                            class={Cell.Hall}
                                        />
                                    </td>
                                );
                            } else if (Cell.Hall == "dist") {
                                return (
                                    <td key={Index}>
                                        <ScheduleColumnOnline
                                            name={Cell.Former}
                                        />
                                    </td>
                                );
                            } else {
                                return (
                                    <td key={Index}>
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
            })}
        </>
    );
};

export default ScheduleData;
