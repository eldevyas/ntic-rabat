import AdminPage from "./../../components/admin/adminPage";
import React from "react";
import { withRouter, useRouter } from "next/router";
import cookies from "next-cookies";

const Admin = ({ token }: any) => {
    const Router = useRouter();

    if (!token) {
        Router.push("/connexion");
        return <p>Redirection vers la page de connexion...</p>;
    }

    return (
        <div className="AdminPage">
            <AdminPage />
        </div>
    );
};

Admin.getInitialProps = async (ctx: any) => {
    const { token } = cookies(ctx);

    return { token };
};

export default withRouter(Admin);
