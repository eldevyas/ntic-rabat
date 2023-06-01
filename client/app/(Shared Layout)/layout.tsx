"use client";

import React, { Suspense } from "react";
import Header from "@/app/layout/header/header";
import Footer from "@/app/layout/footer/footer";
import Background from "@/app/core/Background";

export default function DefaultLayout({ children }: any) {
    return (
        <>
            <Header />
            {/* Background */}
            <Background />
            {children}
            <Footer />
        </>
    );
}
