import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Background from "@/components/core/Background";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { DefaultButton, OutlinedButton } from "@/components/core/button";
import Loading from "@/components/core/Loading";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import * as io from "socket.io-client";
import axios from "axios";
import Post from "@/components/connect/Home/Base/Post";
import * as Display from "@/services/displayAlert";
import CreatePost from "./Base/1. Create Post";
let socket;

const ConnectPage = () => {
    const { data: session, status }: any = useSession();
    const [content, setContent] = useState<any>(null);
    const [posts, setPosts] = useState<any>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [isProjet, setIsProjet] = useState(false);
    const [image, setImage] = useState<any>([]);

    const router = useRouter();
    useEffect(() => {
        if (status === "loading") return;
        if (!session || status == "unauthenticated") {
            router.push("/auth/login");
        }
        // This is added to return undefined if there is no cleanup to be performed
        return undefined;
    }, [status, session]);

    // get all posts once the component is mounted
    useEffect(() => {
        setPosts([]);
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .get(url + "/post", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                let arrayFiltered = Object.values(res.data).sort(
                    (a: any, b: any) => {
                        return b?.id - a?.id;
                    }
                );
                setPosts(arrayFiltered);
                // timeout to refresh the posts
            })
            .catch((err) => {
                Display.pushFailure("Une erreur est survenue");
                console.log(err);
            });
    }, [refresh]);

    // get all posts once the component is mounted

    return (
        <>
            {session && (
                <>
                    <Head>
                        <title>NTIC Connect - Accueil</title>
                    </Head>

                    <div className="Main">
                        <CreatePost Refresh={refresh} setRefresh={setRefresh} />
                        <div className="Posts">
                            {Array.isArray(posts) &&
                                posts.map((post, index) => (
                                    <Post
                                        key={index}
                                        post={post}
                                        user={session?.user}
                                    />
                                ))}
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

export default ConnectPage;
