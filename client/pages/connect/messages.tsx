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
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { io } from "Socket.IO-client";
import * as Display from "../../services/displayAlert";
let socket: any;

const Connect = () => {
    const { data: session, status }: any = useSession();
    const bottomRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (!session || status === ("unauthenticated" as string)) {
            router.push("/auth/login");
        }
        // This is added to return undefined if there is no cleanup to be performed
        return undefined;
    }, [status, session]);

    const [username, setUsername] = useState(session?.user?.name);
    const [chosenUsername, setChosenUsername] = useState(
        session?.user?.username ? session?.user?.username : session?.user?.name
    );
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Array<typeof Message>>([]);
    const [activeUsers, setActiveUsers] = useState<number>(0);

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        socketInitializer();
    }, []);

    const socketInitializer = async () => {
        // We just call it because we don't need anything else out of it
        await fetch("/api/socket");

        socket = io();

        socket.on("newIncomingMessage", (msg: any) => {
            Display.pushSuccess("New Incoming message received.");
            setMessages((currentMsg: any) => [
                ...currentMsg,
                { author: msg.author, message: msg.message },
            ]);
            console.log(messages);
        });

        socket.on("connection", () => {
            setActiveUsers(activeUsers + 1);
        });
    };

    const sendMessage = async () => {
        socket.emit("createdMessage", { author: chosenUsername, message });
        Display.pushWarning("Created a new message!");
        setMessages((currentMsg: any) => [
            ...currentMsg,
            { author: chosenUsername, message },
        ]);
        setMessage("");
    };

    const handleKeypress = (e: any) => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            if (message) {
                sendMessage();
            }
        }
    };

    return (
        <>
            {session && (
                <>
                    <Head>
                        <title>NTIC Connect - Messages</title>
                    </Head>

                    <div className="GlobalMessages">
                        <div className="GlobalMessages__Title">
                            <div className="GlobalMessages__Title__Text">
                                Messages Globales
                            </div>
                            <div className="GlobalMessages__Title__OnlineUsers">
                                {activeUsers} Utilisateurs Actifs
                            </div>
                        </div>

                        <div className="GlobalMessages__Content">
                            {messages.map((msg: any, i) => {
                                return (
                                    <Message
                                        key={i}
                                        User={msg.author}
                                        Text={msg.message}
                                        Type={
                                            msg.author == session?.user?.name ||
                                            (msg.author ==
                                                session?.user?.username &&
                                                "Self")
                                        }
                                        Time={
                                            new Date(
                                                new Date().getTime() -
                                                1000 * 60 * 60 * 24 * 1
                                            )
                                        }
                                    />
                                );
                            })}
                            <div ref={bottomRef} />
                        </div>

                        <div className="GlobalMessages__Form">
                            <div className="GlobalMessages__Form__Avatar">
                                <Image
                                    alt="User Avatar"
                                    src="/assets/img/pp/pp1.png"
                                    fill
                                />
                            </div>

                            <div className="GlobalMessages__Form__Input">
                                <TextField
                                    className="GlobalMessages__Form__Input__Message"
                                    placeholder="Type something"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={handleKeypress}
                                />
                            </div>

                            <DefaultButton
                                color="Blue"
                                startIcon={<SendIcon />}
                                onClick={() => {
                                    sendMessage();
                                }}
                            >
                                Envoyer
                            </DefaultButton>
                        </div>
                    </div>
                </>
            )}

            {
                // Show spinner in case
                // the session is loading
                status === "loading" || (!session && <Loading />)
            }
        </>
    );
};

export default Connect;

const Message = (props: any) => {
    const timeAgo = (timestamp: any) => {
        const Now: any = new Date();
        const seconds = Math.floor((Now - timestamp) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            return interval + " year" + (interval === 1 ? "" : "s") + " ago";
        }

        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return interval + " month" + (interval === 1 ? "" : "s") + " ago";
        }

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return interval + " day" + (interval === 1 ? "" : "s") + " ago";
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
        }

        return "just now";
    };

    const timestamp = Date.parse(props.Time); // replace this with your timestamp
    const timeString = timeAgo(timestamp);

    return (
        <div
            className={
                "GlobalMessages__Content__Message" +
                " " +
                (props.Type === "Self" && "OwnMessage")
            }
        >
            <div className="GlobalMessages__Content__Message__Avatar">
                <Image
                    alt="User Avatar"
                    src="/assets/img/pp/default.jpg"
                    fill
                />
            </div>

            <div className="GlobalMessages__Content__Message__Text">
                <div className="GlobalMessages__Content__Message__Text__User">
                    {props.User}{" "}
                    <span className="GlobalMessages__Content__Message__Text__User__Time">
                        {timeString}
                    </span>
                </div>
                <div className="GlobalMessages__Content__Message__Text__Content">
                    {props.Text}
                </div>
            </div>
        </div>
    );
};
