import { resolve } from 'node:path/win32';
import React, { useState, useEffect } from 'react'
import { ScheduleColumn, ScheduleColumnOnline, ScheduleColumnAbsent } from "./ScheduleColumn";

const ScheduleData = (props: any) => {
    let Data: { Day: String, Time: { Former: String, Hall: String }[] }[] = props.Data;
    const [weather, setWeather] = useState<{}>()
    // const [weather, setWeather] = useState<{}>()
    // const apiKey = "23cc58942988aba5d05ce5017e049e45";

    // const rabat_lon = "-6.849131222272945"

    // const rabat_lat = "33.97583368254488"

    // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${rabat_lat}&lon=${rabat_lon}&appid=${apiKey}&units=matric`;

    // fetch(url).then(res => res.json()).then(data => setWeather(data))
    // console.log(weather)
    // Get weather api
    useEffect(() => {
        fetch("api/weather")
            .then(res => res.json())
            .then(data => setWeather(data))
    }, [])
    console.log(weather)
    // 

    return (
        <>
            {
                Data.map((Row, Index) => {
                    return (
                        <tr key={Index}>
                            <td>
                                <div>
                                    <span>{Row.Day}</span>
                                    <span>18°C</span>
                                </div>
                            </td>
                            {
                                Row.Time.map((Cell, Index) => {
                                    if (Cell.Hall == "") {
                                        return <td key={Index}></td>
                                    } else if (Cell.Hall == "Absente" || Cell.Hall == "Absent") {
                                        return <td key={Index}><ScheduleColumnAbsent name={Cell.Former} class={Cell.Hall} /></td>
                                    } else if (Cell.Hall == "dist") {
                                        return <td key={Index}><ScheduleColumnOnline name={Cell.Former} /></td>
                                    } else {
                                        return <td key={Index}><ScheduleColumn name={Cell.Former} class={Cell.Hall} /></td>
                                    }
                                })
                            }
                        </tr>
                    )
                })
            }
        </>
    )
}

export default ScheduleData;