import AdminPage from "./../../components/admin/adminPage";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const Admin = () => {
    const { data: session, status }: any = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/login");
        }
    }, [status]);

    return (
        <div className="AdminPage">
            <AdminPage />
        </div>
    );
};

export default Admin;
