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

    const props = {
        GroupID: GroupID,
        Schedule: Schedule,
    };

    console.table(props);

    return {
        props: {
            GroupID: GroupID,
            Schedule: Schedule,
        },
    };
};

export default Emplois;
