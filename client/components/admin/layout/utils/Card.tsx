import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
// Icons
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import DoDisturbOutlinedIcon from "@mui/icons-material/DoDisturbOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { getCookie } from "cookies-next";
// Required 3rd Party Components
import Button from "@mui/material/Button";
import axios from "axios";
import * as Display from "../../../../services/displayAlert";
import { useSession } from "next-auth/react";

export default function Card(props: any) {
    const { data: session, status }: any = useSession();
    const user:
        | {
            name?: string | null | undefined;
            email?: string | null | undefined;
            image?: string | null | undefined;
            token?: string | null | undefined;
        }
        | undefined = session?.user;
    const Router = useRouter();
    const [isEditing, setEditing] = useState(false);
    const [isDeleting, setDeleting] = useState(false);
    // is adding new announce state
    const [isAdding, setAdding] = useState(true);
    // object to store user data
    // Editing States
    const [newVariant, setNewVariant] = useState(
        props.variant.replace(/\ws\S*/g, function (txt: string) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
    );
    let newTitle = useRef<HTMLInputElement>(null);
    let newDeadLine = useRef<HTMLInputElement>(null);
    let newDescription = useRef<HTMLTextAreaElement>(null);
    let newUrl = useRef<HTMLInputElement>(null);
    let newButton = useRef<HTMLInputElement>(null);
    const url = props.url;
    const viewAnnounce = () => {
        window.open(url, "_blank");
    };
    // Get Card variant
    let Variant = props.variant;
    // capitalize variant
    Variant = Variant.replace(/\ws\S*/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    let ValidDate = props.date;
    // format the date to locale date
    // french options
    ValidDate = new Date(ValidDate).toLocaleDateString("fr-MA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    // Capitalize words of ValidDate
    ValidDate = ValidDate.replace(/\w\S*/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    let className = "";

    // switch
    switch (Variant) {
        case "Info":
            className = "Card Info";
            break;
        case "Urgent":
            className = "Card Danger";
            break;
        case "Primary":
            className = "Card Primary";
            break;
        case "Secondary":
            className = "Card Secondary";
            break;
        default:
            className = "Card Default";
            break;
    }

    // function to handle edit click
    const handleEditClick = () => {
        setEditing(!isEditing);
    };

    // function to handle delete click
    const handleDeleteClick = () => {
        setDeleting(true);
    };
    const handleAddClick = () => {
        setAdding(!isAdding);
    };

    const RefreshParent = props.refresh;
    const editAnnounce = (id: any) => {
        if (
            newTitle.current != null &&
            newDescription.current != null &&
            newUrl.current != null &&
            newButton.current != null &&
            newDeadLine.current != null
        ) {
            let Title = newTitle.current.value;
            // sf sf kayna solution
            let Description = newDescription.current.value;
            let Variant = newVariant;
            let Url = newUrl.current.value;
            let Deadline = newDeadLine.current.value;
            let email = user?.email;

            // Validate fileds values
            if (Title == "") {
                Title = props.title;
            }
            if (Description == "") {
                Description = props.description;
            }
            if (Url == "") {
                Url = props.url;
            }
            if (Variant == "") {
                Variant = props.variant;
            }
            // Get server url from env
            const API_URL = process.env.SERVER_PUBLIC_API_URL;

            axios
                .put(
                    `${API_URL}/annonces/` + id,
                    {
                        title: Title,
                        description: Description,
                        type: Variant,
                        url: Url,
                        deadline: Deadline,
                        email: email,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user?.token}`,
                        },
                    }
                )
                .then((res) => {
                    setEditing(false);
                    Display.pushSuccess("Annonce modifiée avec succès.");
                    RefreshParent();
                })
                .catch((err) => {
                    setEditing(true);
                    Display.pushFailure(
                        "Erreur lors de la modification de l'annonce."
                    );
                });
        }
    };
    const deleteAnnounce = (id: any) => {
        let email = user?.email;
        axios
            .delete(
                `http://localhost:8000/api/annonces/` + id,

                {
                    data: {
                        email: email,
                    },
                    headers: {
                        method: "DELETE",
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            )
            .then((res) => {
                Display.pushSuccess("Annonce supprimée avec succès.");
                setDeleting(false);
                RefreshParent();
            })
            .catch((err) => {
                Display.pushFailure(
                    "Erreur lors de la suppression de l'annonce."
                );
                Display.pushFailure(err);
                setDeleting(true);
            });
    };
    const addCard = () => {
        const API_URL = process.env.SERVER_PUBLIC_API_URL;

        axios
            .post(
                `${API_URL}/annonces/`,
                {
                    title: "title",
                    description: "description",
                    variant: "variant",
                    button: "button",
                },
                {
                    headers: {
                        Authorization: `Bearer User TOKEN`,
                    },
                }
            )
            .then((res) => {
                setAdding(false);
                Display.pushSuccess("Annonce ajoutée avec succès.");
                RefreshParent();
            })
            .catch((err) => {
                Display.pushFailure("Erreur lors de l'ajout de l'annonce.");
                setAdding(true);
            });
    };

    return (
        <div
            className={
                className +
                (isEditing ? " isEditing" : "") +
                (isDeleting ? " isDeleting" : "")
            }
        >
            {
                // If isEditing is false and isDeleting is false, show the card
                !isEditing && !isDeleting && (
                    <>
                        <div className="CardHeader">
                            <div className="CardType">
                                <IconButton className="IconContainer">
                                    <InfoOutlinedIcon />
                                </IconButton>
                                <h3>{Variant}</h3>
                            </div>
                            <div className="Actions">
                                <IconButton
                                    className="ActionButton"
                                    onClick={handleEditClick}
                                >
                                    <EditOutlinedIcon />
                                </IconButton>
                                <IconButton
                                    className="ActionButton"
                                    onClick={handleDeleteClick}
                                >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="CardTitle">
                            <h3>{props.title}</h3>
                            <p>{ValidDate}</p>
                        </div>
                        <div className="CardDescription">
                            <p>{props.description}</p>
                        </div>
                        <div className="CardButton">
                            <Button variant="text" onClick={viewAnnounce}>
                                Contacter Nous
                            </Button>
                        </div>
                    </>
                )
            }
            {
                // If isEditing is true, show the edit form
                isEditing && (
                    <div className="EditForm">
                        <h3>Editer les informations</h3>
                        <p>
                            Veuillez saisir les nouvelles informations dans le
                            formulaire ci-dessous pour éditer la carte.
                        </p>
                        <div className="Form">
                            <div className="FormRow">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    ref={newTitle}
                                    defaultValue={props.title}
                                />
                            </div>
                            <div className="FormRow">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    name="description"
                                    // only vertical resize
                                    style={{ resize: "vertical" }}
                                    ref={newDescription}
                                    defaultValue={props.description}
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
                                            (newVariant === "Default"
                                                ? " Active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setNewVariant("Default");
                                        }}
                                    >
                                        Default
                                    </Button>
                                    <Button
                                        variant="text"
                                        className={
                                            "VariantButton" +
                                            (newVariant === "Primary"
                                                ? " Active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setNewVariant("Primary");
                                        }}
                                    >
                                        Primary
                                    </Button>
                                    <Button
                                        variant="text"
                                        className={
                                            "VariantButton" +
                                            (newVariant === "Secondary"
                                                ? " Active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setNewVariant("Secondary");
                                        }}
                                    >
                                        Secondary
                                    </Button>
                                    <Button
                                        variant="text"
                                        className={
                                            "VariantButton" +
                                            (newVariant === "Info"
                                                ? " Active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setNewVariant("Info");
                                        }}
                                    >
                                        Info
                                    </Button>
                                    <Button
                                        variant="text"
                                        className={
                                            "VariantButton" +
                                            (newVariant === "Urgent"
                                                ? " Active"
                                                : "")
                                        }
                                        onClick={() => {
                                            setNewVariant("Urgent");
                                        }}
                                    >
                                        Urgent
                                    </Button>
                                </div>
                            </div>
                            <div className="FormRow">
                                <label htmlFor="button">Button</label>
                                <input
                                    type="text"
                                    name="button"
                                    ref={newButton}
                                    defaultValue={props.button}
                                />
                            </div>
                            <div className="FormRow">
                                <label htmlFor="button">Button URL</label>
                                <input
                                    type="text"
                                    name="button"
                                    ref={newUrl}
                                    defaultValue={props.url}
                                />
                            </div>
                            <div className="FormRow">
                                <label htmlFor="date">Date d'expiration</label>
                                <input
                                    type="date"
                                    name="date"
                                    ref={newDeadLine}
                                    defaultValue={props.deadline}
                                />
                            </div>
                        </div>
                        <div className="Actions">
                            <Button
                                variant="text"
                                className="EditActionButton"
                                startIcon={<DoDisturbOutlinedIcon />}
                                onClick={() => setEditing(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="text"
                                className="EditActionButton"
                                startIcon={<SaveOutlinedIcon />}
                                onClick={() => editAnnounce(props.id)}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                )
            }
            {
                // If isDeleting is true, show the delete confirmation
                isDeleting && (
                    <div className="DeleteConfirmation">
                        <h3>Confirmation de suppression</h3>
                        <p>
                            Etes-vous sûr de vouloir supprimer cette carte ?
                            Cette action est irréversible. S'il vous plaît
                            confirmer pour continuer.
                        </p>
                        <div className="Actions">
                            <Button
                                variant="text"
                                className="DeleteActionButton"
                                startIcon={<DoDisturbOutlinedIcon />}
                                onClick={() => setDeleting(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="text"
                                className="DeleteActionButton"
                                startIcon={<DeleteOutlineOutlinedIcon />}
                                onClick={() => deleteAnnounce(props.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
