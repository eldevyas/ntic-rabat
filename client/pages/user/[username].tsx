import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserProfile from "../../components/user/UserProfile";
import axios from "axios";

const Profile = ({ username }: any) => {
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        axios
            .get(`${process.env.SERVER_PUBLIC_API_URL}/user/${username}`)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, []);
    console.log(user);
    return <UserProfile user={user} />;
};

export default Profile;

export const getServerSideProps = ({ params }: any) => {
    return { props: { username: params.username } };
};
