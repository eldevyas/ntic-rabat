import React from 'react'
import Days from './Utils/ScheduleAPI'
const Schedule = () => {
    return (
        <div className='Schedule'>

            <table border={0}>
                <thead>
                    <tr>
                        <td></td>
                        <td>
                            <div>
                                <span>08:30</span>
                                <span>11:00</span>
                            </div>
                        </td>

                        <td>
                            <div>
                                <span>11:00</span>
                                <span>13:30</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span>13:30</span>
                                <span>16:00</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span>16:00</span>
                                <span>18:30</span>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {Days.map((day, index) => {
                        return (
                            <tr>
                                <td key={index}>
                                    <div>
                                        <span>{day}</span>
                                        <span>18°C</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>Yahyaoui</span>
                                        <span>TP1</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>Yahyaoui</span>
                                        <span>TP1</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>Yahyaoui</span>
                                        <span>TP1</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>Moustaid</span>
                                        <span>TP5</span>
                                    </div>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Schedule