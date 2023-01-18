import React from "react";
import EmploisPage from "../components/emplois/emploisPage";
import axios from "axios";
import { Router } from "next/router";

// Get initial props of Query GroupID

// getInitialProps

function Emplois({ props }: any) {
    return (
        <>
            <EmploisPage
                data-GroupID={props.GroupID}
                data-Schedule={props.Schedule}
                data-Weather={props.Weather}
            />
        </>
    );
}

Emplois.getInitialProps = async (ctx: any) => {
    const { req, query, res, asPath, pathname } = ctx;

    // Get GroupID from URL if found
    let Schedule: {}[] = [];
    let GroupID = query.GroupID ? query.GroupID : "";

    // Check validity
    if (!GroupID && GroupID == "") {
        return {
            props: {
                GroupID: "",
                Schedule: [],
            },
        };
    }
    if (GroupID != "" && GroupID != null && req) {
        // get domaine name
        let Hostname = req.headers.host;

        const res = await axios.get(
            `http://${Hostname}/api/V2/groups/${GroupID}`
        );
        const resData: {}[] = res.data;
        Schedule = resData;
    }

    if (req) {
        let Hostname = req.headers.host;

        // Get Weather Info from "/api/weather"
        const WeatherData = await axios.get(`http://${Hostname}/api/weather`);
        var Weather: {
            date: string;
            day: string;
            temperature: {
                max: number;
                min: number;
                avg: number;
            };
            icon: string;
            weather: string;
        }[] = [];
        // Succesfful request
        if (WeatherData.status == 200) {
            // Get Weather Data
            Weather = WeatherData.data;
        } else {
            Weather = [];
        }
    } else {
        Weather = [];
    }

    const props = {
        GroupID: GroupID,
        Schedule: Schedule,
        Weather: Weather,
    };

    console.table(props);

    return {
        props,
    };
};

export default Emplois;
