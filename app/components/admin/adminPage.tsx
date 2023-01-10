import React from "react";
import Header from "./layout/Header";

import Sidebar from "./layout/Sidebar";
const AdminPage = () => {
    return (
        <>
            <Sidebar />
            <div className="Main">
                <Header />
            </div>
        </>
    );
};

export default AdminPage;
