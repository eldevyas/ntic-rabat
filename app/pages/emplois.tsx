import React from "react";
import EmploisPage from "../components/emplois/emploisPage";
import axios from "axios";
import { Router } from "next/router";

// Get initial props of Query GroupID

// getInitialProps

function Emplois({ props }: any) {
    // log group id
    console.log(props.GroupID);
    console.log(props.Schedule);

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
    // Get GroupID from URL if found
    let Schedule: {}[] = [];
    let GroupID = ctx.query.GroupID ? ctx.query.GroupID : "";

    // Check validity
    if (!GroupID && GroupID == "") {
        return {
            props: {
                GroupID: "",
                Schedule: [],
            },
            notFound: true,
        };
    }
    if (GroupID != "" && GroupID != null) {
        // get domaine name
        let URL = "";
        // URL = ctx.req.url;

        const res = await axios.get(
            `http://localhost:3000/api/V2/groups/${GroupID}`
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
