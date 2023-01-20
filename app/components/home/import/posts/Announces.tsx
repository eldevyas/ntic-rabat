import Card from "./utils/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
        }[]
    >([]);

    useEffect(() => {
        async function fetchData() {
            let Data: any = axios
                .get("http://localhost:8000/api/annonces")
                .then((res) => {
                    setAnnounces(res.data.data);
                });
        }
        fetchData();
    }, []);

    return (
        <div className="Announces">
            {/* <h1>Annonces d'administration</h1> */}
            <div className="Cards">
                {announces.map((announce) => {
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
                })}
            </div>
        </div>
    );
}
{
    {
    }
}
