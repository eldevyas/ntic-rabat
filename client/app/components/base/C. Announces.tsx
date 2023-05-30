import Announce from "@/app/components/base/utils/Announce";
import React, { useState, useEffect } from "react";
import { getAnnounces } from "@/services/dataFetcher";

export default function Announces() {
    const [announces, setAnnounces] = useState<
        {
            id: number;
            title: string;
            type: string;
            description: string;
            url: string;
            created_at: string;
            updated_at: string;
            deadline: string;
        }[]
    >([]);

    useEffect(() => {
        async function fetchData() {
            let Data: {
                data?: [];
            } = await getAnnounces();
            setAnnounces(Data.data ? Data.data : []);
        }
        fetchData();
    }, []);

    return (
        <div className="Announces">
            {/* <h1>Annonces d'administration</h1> */}
            <div className="Cards">
                {announces
                    ? announces.map((announce) => {
                          return <Announce {...announce} />;
                      })
                    : null}
            </div>
        </div>
    );
}
