import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "./../layout/utils/Card";
import axios from "axios";
//
// Icons from MUI
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PagesTwoToneIcon from "@mui/icons-material/PagesTwoTone";
//
//
export default function Annonces() {
    const [announces, setAnnounces] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // state to update this parent from child
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        async function fetchData() {
            let Data: any = axios
                .get("http://localhost:8000/api/annonces")
                // set the data to the state and console.log it with promise
                .then((res) => {
                    setAnnounces(res.data.data);
                    setLoading(false);
                });
        }
        fetchData();
    }, [refresh]);

    // function to refresh
    const doRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <>
            <div className="Title">
                <div className="Box">
                    <PagesTwoToneIcon />
                    <p>Annonces</p>
                </div>
                <div className="Button">
                    <Button variant="text">
                        <AddBoxOutlinedIcon />
                        Ajouter une annonce
                    </Button>
                </div>
            </div>
            {!isLoading && (
                <div className="Cards">
                    {announces.map((announce: any, index: number) => {
                        return (
                            <Card
                                id={announce.id}
                                key={index}
                                title={announce.title}
                                description={announce.description}
                                variant={announce.type}
                                url={announce.url}
                                date={announce.created_at}
                                refresh={doRefresh}
                            />
                        );
                    })}
                </div>
            )}
            {
                // if the data is loading
                isLoading && (
                    <div className="LoadingContainer">
                        <div className="Loader">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                                <div className="line-4"></div>
                            </div>
                        </div>
                        <div className="Loader">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                                <div className="line-4"></div>
                            </div>
                        </div>
                        <div className="Loader">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                                <div className="line-4"></div>
                            </div>
                        </div>
                        <div className="Loader">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                                <div className="line-4"></div>
                            </div>
                        </div>
                        <div className="Loader">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                                <div className="line-4"></div>
                            </div>
                        </div>
                        <div className="Loader">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                                <div className="line-4"></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
