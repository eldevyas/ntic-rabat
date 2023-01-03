import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScheduleHeader from './Utils/ScheduleHeader';
import ScheduleSkeleton from './Utils/ScheduleSkeleton';
import ScheduleData from './Utils/ScheduleData';
import { ScheduleColumn, ScheduleColumnOnline, ScheduleColumnAbsent } from './Utils/ScheduleColumn';
import { useSelector, useDispatch } from "react-redux";

const Schedule = () => {
    const [Data, setData] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            const res = await axios.get('/api/schedule');
            const data = await res.data;
            setData(data);
        }
        setTimeout(() => { fetchAPI() }, 500);
    }, []);



    return (
        <div className='Schedule'>
            <table border={0}>
                <ScheduleHeader />
                <tbody>
                    {Data.length > 0 ? <ScheduleData Data={Data} /> : <ScheduleSkeleton />}
                </tbody>
            </table>
        </div>
    )
}

export default Schedule