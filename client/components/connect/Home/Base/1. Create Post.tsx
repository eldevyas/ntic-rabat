import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { DefaultButton, OutlinedButton } from "@/components/core/button";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import * as Display from "@/services/displayAlert";

export default function CreatePost(props: any) {
    const Router = useRouter();

    const { data: session, status }: any = useSession();

    const [content, setContent] = useState<any>(null);

    const [isProjet, setIsProjet] = useState(false);

    const [image, setImage] = useState<any>([]);

    const handlePublishPost = () => {
        // check if content is empty or has only spaces
        // convert the new line breaker in content to /n

        if (content?.trim() === "") {
            Display.pushFailure("Veuillez saisir un contenu");
            return;
        }
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .post(
                url + "/post",
                {
                    content: content,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + session?.user?.token,
                    },
                }
            )
            .then((res) => {
                Display.pushSuccess("Publication effectuée avec succès");
                // reset the content
                setContent("");
                props.setRefresh(!props.Refresh);
                // refresh the posts
            })
            .catch((err) => {
                Display.pushFailure("Une erreur est survenue");
            });
    };
    const handleShareProject = () => {
        console.log("projet");
    };

    return (
        <div className="CreatePost">
            <div className="Profile">
                <Image
                    src="/assets/img/pp/pp1.png"
                    className="Avatar"
                    alt="profile"
                    width={50}
                    height={50}
                />
            </div>
            <div className="Form">
                <div className="Input">
                    <textarea
                        placeholder={`Que pensez-vous ? ${
                            session?.user?.name?.split(" ")[0]
                        }.`}
                        onChange={(e: any) => setContent(e.target.value)}
                        value={content ? content : ""}
                    ></textarea>
                    {isProjet ? (
                        <div className="Urls">
                            <input
                                type="text"
                                name="GithubUrl"
                                className="Url"
                                placeholder="Enter github url"
                            />
                            <input
                                type="text"
                                name="DemoUrl"
                                className="Url"
                                placeholder="Enter demo url"
                            />
                        </div>
                    ) : null}
                </div>
                <div className="Images">
                    {image &&
                        // loop through the images
                        image.map((img: any) => (
                            <div className="Image">
                                <Image
                                    src={img}
                                    alt="image"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                </div>

                <div className="Actions">
                    <DefaultButton onClick={() => setIsProjet(!isProjet)}>
                        <Image
                            src="/assets/svg/Design.svg"
                            alt="Design"
                            width={20}
                            height={20}
                        />
                        Projet / Réalisation
                    </DefaultButton>
                    {/* input type file , display hidden , accepts img , and display the uploaded image */}

                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        // allow multiple images
                        multiple
                        accept="image/*"
                        onChange={(e: any) => {
                            // get all the files and convert them to base64
                            const files = e.target.files;
                            const filesArray = Array.from(files);
                            filesArray.forEach((file: any) => {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    // push the base64 to the image state
                                    setImage((prev: any) => [
                                        ...prev,
                                        reader.result,
                                    ]);
                                };
                                reader.readAsDataURL(file);
                            });
                        }}
                    />
                    <DefaultButton
                        // on click , choose file and upload it
                        onClick={() => {
                            const fileInput =
                                document.getElementById("fileInput");
                            fileInput?.click();
                        }}
                    >
                        <Image
                            src="/assets/svg/Catalog.svg"
                            alt="Photo"
                            width={20}
                            height={20}
                        />
                        Photo / Video
                    </DefaultButton>
                    {isProjet ? (
                        <DefaultButton
                            type="primary"
                            size="small"
                            className="Publish"
                            onClick={handleShareProject}
                        >
                            Partager projet
                            <SendIcon fontSize="small" />
                        </DefaultButton>
                    ) : (
                        <DefaultButton
                            type="primary"
                            size="small"
                            className="Publish"
                            onClick={handlePublishPost}
                        >
                            Publier
                            <SendIcon fontSize="small" />
                        </DefaultButton>
                    )}
                </div>
            </div>
        </div>
    );
}
