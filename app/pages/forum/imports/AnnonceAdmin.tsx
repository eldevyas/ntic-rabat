import React from "react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
const AnnonceAdmin = () => {
    const [announces, setAnnounces] = useState<
        {
            id: number;
            title: string;
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
                // set the data to the state and console.log it with promise
                .then((res: any) => {
                    setAnnounces(res.data.data);
                    console.log(announces);
                });
        }
        fetchData();
    }, []);
    return <div></div>;
};

export default AnnonceAdmin;
