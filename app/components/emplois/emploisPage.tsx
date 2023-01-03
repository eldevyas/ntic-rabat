import React, { useState } from 'react';
import { Header } from '../layout/header/header';
import Footer from '../layout/footer';
import Head from "next/head";
import SelectClass from './imports/SelectClass';
import Schedule from './imports/Schedule';
import axios from 'axios';

// Group Context
import { GroupContext } from './Context/GroupContext';

// Configure Group Context



const EmploisPage = () => {
    const [GroupID, SetGroupID] = useState('');

    // Update context's schedule
    const [GroupSchedule, setGroupSchedule] = useState([]);


    const Value = {
        GroupID: GroupID,
        SetGroupID: SetGroupID,
        Schedule: GroupSchedule,
        SetSchedule: async () => {
            // Send request with group id, then update the Schedule
            if (GroupID && GroupID != null) {
                const res = await axios.get(`/api/groups/${GroupID}`)
                const resData = res.data;
                setGroupSchedule(resData);
            } else {
                console.log("No Group ID found");
            }
        }
    };




    return (
        <>
            <Head>
                <title>NTIC Rabat - Emplois</title>
                <meta
                    name="description"
                    content="Depuis son ouverture en 2007, l'ISTA NTIC Hay Riad a formé plus de 3 600 techniciens dans les secteurs Informatiques."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/dark-favicon.ico" />
            </Head>

            <div className="EmploisPage">
                <Header />
                <GroupContext.Provider value={Value}>
                    <SelectClass />
                    <Schedule />
                </GroupContext.Provider>
                <Footer />
            </div>
        </>
    )
}

export default EmploisPage;