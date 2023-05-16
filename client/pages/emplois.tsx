import React from "react";
import EmploisPage from "@/components/emplois/emploisPage";
import * as Fetcher from "@/services/dataFetcher";

export async function getServerSideProps({ query }: any) {
    const GroupID = query.GroupID ? query.GroupID : "";
    const Schedule = await Fetcher.getSchedule(GroupID);
    const Weather = await Fetcher.getWeather();

    return {
        props: {
            GroupID: GroupID ? GroupID : "",
            Schedule: Schedule ? Schedule : [],
            Weather: Weather ? Weather : [],
        },
    };
}
function Emplois({ GroupID, Schedule, Weather }: any) {
    return (
        <>
            <EmploisPage
                data-GroupID={GroupID}
                data-Schedule={Schedule}
                data-Weather={Weather}
            />
        </>
    );
}

export default Emplois;
