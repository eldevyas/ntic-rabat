"use client";

import React, { useEffect, useState } from "react";
import DesktopLayout from "./base/A. Desktop Layout";
import MobileLayout from "./base/B. Mobile Layout";

export default function Dashboard({ children }: any) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        // Initial check
        handleResize();

        // Listen for window resize
        window.addEventListener("resize", handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile ? (
        <MobileLayout>{children}</MobileLayout>
    ) : (
        <DesktopLayout>{children}</DesktopLayout>
    );
}
