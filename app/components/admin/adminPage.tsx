import React from "react";
import Header from "./layout/Header";
import Content from "./layout/Content";

import Sidebar from "./layout/Sidebar";
const AdminPage = () => {
    return (
        <>
            <Sidebar />
            <div className="Main">
                <Header />
                <Content />
            </div>
        </>
    );
};

export default AdminPage;
