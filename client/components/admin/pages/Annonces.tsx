import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import Card from "./../layout/utils/Card";
import axios from "axios";
import Router from "next/router";
import { getCookie } from "cookies-next";
import * as Display from "../../../services/displayAlert";

//
// Icons from MUI
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PagesTwoToneIcon from "@mui/icons-material/PagesTwoTone";
// import useSession
import { useSession } from "next-auth/react";
//
//
export default function Annonces() {
    // get the user session
    const { data: session, status } = useSession();
    const user:
        | {
              name?: string | null | undefined;
              email?: string | null | undefined;
              image?: string | null | undefined;
              token?: string | null | undefined;
          }
        | undefined = session?.user;
    const ExpirationDate = useRef<HTMLInputElement>(null);

    let newTitle = useRef<HTMLInputElement>(null);
    let newDescription = useRef<HTMLTextAreaElement>(null);
    let newUrl = useRef<HTMLInputElement>(null);
    const [variant, setVariant] = useState("");
    const [announces, setAnnounces] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // state to update this parent from child
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const API_URL = process.env.SERVER_PUBLIC_API_URL;
            let Data: any = axios
                .get(`${API_URL}/annonces`)
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
    // is adding state
    const [isAdding, setIsAdding] = useState(false);
    function addAnnounce() {
        if (
            newTitle.current != null &&
            newDescription.current != null &&
            newUrl.current != null &&
            ExpirationDate.current != null
        ) {
            let Title = newTitle.current.value;
            let Description = newDescription.current.value;
            let Url = newUrl.current.value;
            let deadline = ExpirationDate.current.value;
            let email = user?.email;
            axios
                .post(
                    "http://localhost:8000/api/annonces",
                    {
                        title: Title,
                        description: Description,
                        type: variant,
                        url: Url,
                        deadline: deadline,
                        email: email,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user?.token}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.status === 201) {
                        Display.pushSuccess("Annonce ajoutée avec succès");
                    } else {
                        Display.pushFailure("Une erreur est survenue");
                    }
                });
        }
        setIsAdding(false);
        // set timeout to refresh the page
        setTimeout(() => {
            doRefresh();
        }, 1000);
    }

    return (
        <>
            <div className="Title">
                <div className="Box">
                    <PagesTwoToneIcon />
                    <p>Annonces</p>
                </div>
                <div className="Button">
                    <Button
                        variant="text"
                        onClick={() => setIsAdding(!isAdding)}
                    >
                        <AddBoxOutlinedIcon />
                        Ajouter une annonce
                    </Button>
                </div>
            </div>
            {!isLoading && !isAdding && (
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
                                deadline={announce.deadline}
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
            {isAdding && (
                <div className="AddForm">
                    <h3>Ajouter les informations</h3>
                    <p>
                        Veuillez saisir les informations dans le formulaire
                        ci-dessous pour ajouter la carte.
                    </p>
                    <div className="Form">
                        <div className="FormRow">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" ref={newTitle} />
                        </div>
                        <div className="FormRow">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                // only vertical resize
                                style={{ resize: "vertical" }}
                                ref={newDescription}
                            />
                        </div>
                        <div className="FormRow">
                            <label htmlFor="variant">Variant</label>
                            <div className="Variants">
                                {/* Buttons for each variant, default to inactive and when clicked a button becomes active and set selected varaint */}
                                <Button
                                    variant="text"
                                    className={
                                        "VariantButton" +
                                        (variant === "Default" ? " Active" : "")
                                    }
                                    onClick={() => {
                                        setVariant("Default");
                                    }}
                                >
                                    Default
                                </Button>
                                <Button
                                    variant="text"
                                    className={
                                        "VariantButton" +
                                        (variant === "Primary" ? " Active" : "")
                                    }
                                    onClick={() => {
                                        setVariant("Primary");
                                    }}
                                >
                                    Primary
                                </Button>
                                <Button
                                    variant="text"
                                    className={
                                        "VariantButton" +
                                        (variant === "Secondary"
                                            ? " Active"
                                            : "")
                                    }
                                    onClick={() => {
                                        setVariant("Secondary");
                                    }}
                                >
                                    Secondary
                                </Button>
                                <Button
                                    variant="text"
                                    className={
                                        "VariantButton" +
                                        (variant === "Info" ? " Active" : "")
                                    }
                                    onClick={() => {
                                        setVariant("Info");
                                    }}
                                >
                                    Info
                                </Button>
                                <Button
                                    variant="text"
                                    className={
                                        "VariantButton" +
                                        (variant === "Urgent" ? " Active" : "")
                                    }
                                    onClick={() => {
                                        setVariant("Urgent");
                                    }}
                                >
                                    Urgent
                                </Button>
                            </div>
                        </div>
                        <div className="FormRow">
                            <label htmlFor="button">Button URL</label>
                            <input type="text" name="button" ref={newUrl} />
                        </div>
                        <div className="FormRow">
                            <label htmlFor="deadline">Date d'expiration</label>
                            <input
                                type="date"
                                name="deadline"
                                ref={ExpirationDate}
                            />
                        </div>
                    </div>
                    <div className="Actions">
                        <Button
                            variant="text"
                            className="EditActionButton"
                            startIcon={<DoDisturbOutlinedIcon />}
                            onClick={() => setIsAdding(!isAdding)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="text"
                            className="EditActionButton"
                            startIcon={<SaveOutlinedIcon />}
                            onClick={addAnnounce}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
