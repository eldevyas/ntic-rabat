import React from 'react'
import { ScheduleColumn, ScheduleColumnOnline, ScheduleColumnAbsent } from "./ScheduleColumn";

const ScheduleData = (props: any) => {
    let Data: { Day: String, Time: { Former: String, Hall: String }[] }[] = props.Data;

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