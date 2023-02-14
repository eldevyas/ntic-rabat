import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Background from "../../components/core/Background";
import Header from "../../components/layout/header/header";
import Footer from "../../components/layout/footer/footer";
import { DefaultButton, OutlinedButton } from "../../components/core/button";
import Loading from "../../components/core/Loading";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import io from "Socket.IO-client";
import axios from "axios";
import Post from "../../components/connect/Post";
import * as Display from "../../services/displayAlert";
let socket;

const Connect = () => {
    const { data: session, status } = useSession();
    const [content, setContent] = useState<any>(null);
    const [posts, setPosts] = useState<any>([]);

    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (!session || status === ("unauthenticated" as string)) {
            router.push("/auth/login");
        }
        // This is added to return undefined if there is no cleanup to be performed
        return undefined;
    }, [status, session]);

    // get all posts once the component is mounted
    useEffect(() => {
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .get(url + "/post", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                // convert the response to an array
                // sort the array by id
                // set the posts state
                const arrayFiltered = Object.values(res.data).sort(
                    (a: any, b: any) => {
                        return b?.id - a?.id;
                    }
                );
                setPosts(arrayFiltered);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);
    console.log(posts);

    const handlePublish = () => {
        // check if content is empty or has only spaces

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
            })
            .catch((err) => {
                console.log(err.response.data);
                Display.pushFailure("Une erreur est survenue");
            });
    };

    return (
        <>
            {session && (
                <>
                    <Head>
                        <title>NTIC Connect - Accueil</title>
                    </Head>

                    <div className="Main">
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
                                        onChange={(e: any) =>
                                            setContent(e.target.value)
                                        }
                                        value={content}
                                    ></textarea>
                                </div>
                                <div className="Actions">
                                    <DefaultButton>
                                        <Image
                                            src="/assets/svg/Design.svg"
                                            alt="Design"
                                            width={20}
                                            height={20}
                                        />
                                        Projet / Réalisation
                                    </DefaultButton>
                                    <DefaultButton>
                                        <Image
                                            src="/assets/svg/Catalog.svg"
                                            alt="Photo"
                                            width={20}
                                            height={20}
                                        />
                                        Photo / Video
                                    </DefaultButton>
                                    <DefaultButton
                                        type="primary"
                                        size="small"
                                        className="Publish"
                                        onClick={handlePublish}
                                    >
                                        Publier
                                        <SendIcon fontSize="small" />
                                    </DefaultButton>
                                </div>
                            </div>
                        </div>
                        <div className="Posts">
                            {Array.isArray(posts) &&
                                posts.map((post) => <Post post={post} />)}
                        </div>
                    </div>
                </>
            )}

            {
                // Show spinner in case the session is loading
                status === "loading" || (!session && <Loading />)
            }
        </>
    );
};

export default Connect;
