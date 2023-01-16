<<<<<<< HEAD
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



// Check of user is authenticated


=======
import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DefaultButton } from "../../components/core/button";
import Image from "next/image";
import Announces from "../../components/home/import/posts/Announces";
>>>>>>> refs/remotes/origin/main
export default function App() {
    const Router = useRouter();
    const [user, setUser] = useState<any>(null);
    // Use Effect to check if the user exists in the session storage
    useEffect(() => {
        if (
            !sessionStorage.getItem("user") &&
            !sessionStorage.getItem("token")
        ) {
            // if the user does not exist in the session storage, redirect to the connexion page
            setUser(null);
            Router.push("/connexion");
        } else {
            // check that it is a to type string
            setUser(JSON.parse(sessionStorage.getItem("user") as string));
            Router.push("/forum");
        }
    }, []);

    return (
        <>
            {!user ? (
                <div
                    className="ForumPage"
                    style={{
                        width: "100%",
                        minHeight: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <div
                        className="Logo"
                        style={{
                            width: "100px",
                            height: "100px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="ForumPage"
                    style={{
                        width: "100%",
                        minHeight: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <div
                        className="Title"
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1rem",
                            gap: "0.5rem",
                        }}
                    >
                        <h1>Forum</h1>
                        <p>
                            You are connected as{" "}
                            <span style={{ fontWeight: 600 }}>{user.name}</span>
                        </p>
                    </div>
                    <DefaultButton
                        onClick={() => {
                            sessionStorage.removeItem("user");
                            Router.push("/connexion");
                        }}
                        bgColor="Blue"
                    >
                        Logout
                    </DefaultButton>

                    <div
                        className="CurrentAnnounces"
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "1rem",
                            gap: "0.5rem",
                        }}
                    >
                        <h2>Current Announces</h2>
                    </div>
                </div>
            )}
        </>
    );
}
