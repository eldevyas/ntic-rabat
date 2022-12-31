import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <>
            {/* Tailwind header, logo Image, 4 middle button links, and 2 buttons in the end */}
            <header className="Header">
                <div className="Logo">
                    <Image
                        src="/logo.png"
                        width="100"
                        height="50"
                        alt="Logo"
                        priority
                    />
                </div>
            </header>
        </>
    );
}
