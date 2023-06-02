"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Username = () => {
    const [user, setUser]: any = React.useState([]);
    const { username }: any = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(
                `${process.env.SERVER_PUBLIC_API_URL}/user/${username}`
            );
            const data = await response.json();
            setUser(data);
            console.log(data);
        };
        fetchUser();
    }, []);
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
    );
};

export default Username;
