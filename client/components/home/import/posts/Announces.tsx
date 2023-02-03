import Card from "./utils/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAnnounces } from "../../../../services/dataFetcher";

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
            console.table(Data.data);
        }
        fetchData();
    }, []);

    return (
        <div className="Announces">
            {/* <h1>Annonces d'administration</h1> */}
            <div className="Cards">
                {announces
                    ? announces.map((announce) => {
                          return (
                              <Card
                                  variant={announce.type}
                                  key={announce.id}
                                  title={announce.title}
                                  description={announce.description}
                                  url={announce.url}
                                  created_at={announce.created_at}
                                  updated_at={announce.updated_at}
                                  deadline={announce.deadline}
                              />
                          );
                      })
                    : null}
            </div>
        </div>
    );
}
{
    {
    }
}
