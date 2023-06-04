"use client";
import React, { useEffect } from "react";
import ResetPassword from "./components/ResetPassword";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    // check if there's a toke
    const token = searchParams.token;
    const Router = useRouter();

    useEffect(() => {
        // Prefetch Connect Page
        Router.prefetch("/connect");
    }, []);

    if (token) {
        return <ResetPassword token={token} />;
    } else {
        Router.push("/auth/login");
    }
}
