import React from "react";
import Head from "next/head";
import * as Fetcher from "@/services/dataFetcher";
import Container from "./components/Container";
import { useSearchParams } from "next/navigation";

export const metadata = {
    title: "NTIC Rabat - Emplois",
    description:
        "Consultez les emplois de tous les groupes de l'institut sur notre page dédiée. Restez informé des horaires de cours, des examens et des activités en un seul endroit.",
};

export default async function EmploisPage() {
    // Query
    // const searchParams = useSearchParams();
    // const QueryID = searchParams?.get("GroupID");

    // Data
    // const GroupID = QueryID ? QueryID : "";
    // const Schedule = await Fetcher.getSchedule(GroupID);
    // const Weather = await Fetcher.getWeather();

    return (
        <div className="EmploisPage">
            {/* <Container
                data-GroupID={GroupID}
                data-Schedule={Schedule}
                data-Weather={Weather}
            /> */}
        </div>
    );
}
