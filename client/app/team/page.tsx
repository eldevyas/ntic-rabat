"use client";
import React, { useEffect, useState } from "react";
import { getTeamPosts } from "@/services/dataFetcher";

const Page = () => {
    useEffect(() => {
        getTeamPosts().then((posts) => {
            console.log(posts);
        });
    }, []);
    return <div>Hi</div>;
};

export default Page;
