import Card from "./utils/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Announces() {
    const [announces, setAnnounces] = useState<{
        "id": number,
        "title": string,
        "description": string
        "url": string,
        "created_at": string,
        "updated_at": string
    }[]>([]);

    useEffect(() => {
        async function fetchData() {
            let Data: any = axios.get("http://localhost:8000/api/annonces");
            setAnnounces(Data);
            console.table(Data);
        }
        fetchData();
    }, []);



    return (
        <div className="Announces">
            {/* <h1>Annonces d'administration</h1> */}
            <div className="Cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}