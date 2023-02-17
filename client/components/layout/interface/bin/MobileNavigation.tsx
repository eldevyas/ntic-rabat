import React, { useState, useEffect } from "react";
import SideBar from "./web/SideBar";
import { useSession } from "next-auth/react";
import ConnectHeader from "./web/ConnectHeader";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import { DefaultButton } from "../../../core/button";
import Connect from "../../../../pages/connect";
import MobileHeader from "./mobile/MobileHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from '@mui/icons-material/Comment';
import { useRouter } from "next/router";
import axios from "axios";
import * as Display from "../../../../services/displayAlert";
import Post from "../../../connect/Post";


export default function DesktopNavigation(props: any) {

    const Router = useRouter();
    const { data: session, status } = useSession();
    const [content, setContent] = useState<any>(null);
    const [posts, setPosts] = useState<any>([]);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    // Links and Icons
    const Items = [
        { name: "Accueil", icon: "/assets/svg/Accueil.svg", link: "/connect", className: "MobileNavigationName" },
        {
            name: "Messages",
            icon: "/assets/svg/Message.svg",
            link: "/connect/messages",
            className: "MobileNavigationName"
        },
        {
            name: "Ajouter un projet",
            icon: "/assets/svg/Plus.svg",
            link: "/connect/add-project",
            className: "MobileNavigationName Plus"
        },
        {
            name: "Notifications",
            icon: "/assets/svg/Notification.svg",
            link: "/connect/notifications",
            className: "MobileNavigationName"
        },
        {
            name: "Profile",
            icon: "/assets/svg/ProfileIcon.svg",
            link: "/connect/Profile",
            className: "MobileNavigationName"
        },
    ];
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
                let arrayFiltered = Object.values(res.data).sort(
                    (a: any, b: any) => {
                        return b?.id - a?.id;
                    }
                );
                setPosts(arrayFiltered);
            })
            .catch((err) => {
                console.log(err.response.data);
                Display.pushFailure("Une erreur est survenue");
            });
    }, []);
    useEffect(() => {
        if (status === "loading") return;
        if (!session || status == "unauthenticated") {
            Router.push("/auth/login");
        }
        // This is added to return undefined if there is no cleanup to be performed
        return undefined;
    }, [status, session]);

    const handlePublish = () => {
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
                // refresh the posts
                setIsRefreshing(true);
            })
            .catch((err) => {
                console.log(err.response.data);
                Display.pushFailure("Une erreur est survenue");
            });
    };

    return (

        <div className="MobileConnect">
            <div className="Header">
                <MobileHeader />
            </div>
            <div className="MobileConnectContent">

                <div className="CreatePost">
                    <div className="Form">
                        <textarea
                            placeholder={`Que pensez-vous? ${session?.user?.name.split(" ")[0]} .`}
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                        ></textarea>
                        <DefaultButton
                        >
                            <Image
                                src="/assets/svg/Design.svg"
                                alt="Design"
                                width={20}
                                height={20}
                            />
                            Projet / Réalisation
                        </DefaultButton>
                        <DefaultButton
                        >
                            <Image
                                src="/assets/svg/Catalog.svg"
                                alt="Photo"
                                width={20}
                                height={20}
                            />
                            Photo / Video
                        </DefaultButton>
                        <DefaultButton
                            className="Publish"
                            onClick={handlePublish}
                        >
                            Publier
                            <SendIcon fontSize="small" />
                        </DefaultButton>

                    </div>
                </div>
                <div className="Content">
                    {posts.map((post: any, index: any) => (
                        <Post
                            key={index}
                            post={post}
                            user={session?.user}
                        />
                    ))}
                </div>
            </div>
            <div className="MobileFooter">
                {Items.map((item, index) => (
                    <div
                        key={index}
                        className="MobileNavigationItem"
                    >
                        <DefaultButton
                            color="white"
                            className={item.className}
                            onClick={() => {
                                Router.push(item.link);
                            }}
                        >
                            <Image
                                alt=""
                                src={item.icon}
                                width={25}
                                height={25}
                            />
                        </DefaultButton>
                    </div>
                ))

                }
            </div>

        </div>
    );
}
