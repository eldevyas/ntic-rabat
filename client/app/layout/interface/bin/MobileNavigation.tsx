import React from "react";
import Image from "next/image";
import { DefaultButton } from "@/app/core/Button";
import MobileHeader from "./mobile/MobileHeader";
import { useRouter } from "next/navigation";

export default function DesktopNavigation(props: any) {
    const Router = useRouter();
    // Links and Icons
    const Items = [
        {
            name: "Accueil",
            icon: "/assets/svg/Accueil.svg",
            link: "/connect",
            className: "MobileNavigationName",
        },
        {
            name: "Messages",
            icon: "/assets/svg/Message.svg",
            link: "/connect/messages",
            className: "MobileNavigationName",
        },
        {
            name: "Ajouter un projet",
            icon: "/assets/svg/Plus.svg",
            link: "/connect/add-project",
            className: "MobileNavigationName Plus",
        },
        {
            name: "Notifications",
            icon: "/assets/svg/Notification.svg",
            link: "/connect/notifications",
            className: "MobileNavigationName",
        },
        {
            name: "Profile",
            icon: "/assets/svg/ProfileIcon.svg",
            link: "/connect/Profile",
            className: "MobileNavigationName",
        },
    ];

    return (
        <div className="MobileConnect Connect">
            <div className="MobileConnect__Header">
                <MobileHeader />
            </div>
            <div className="MobileConnectContent Content">{props.children}</div>
            <div className="MobileFooter">
                {Items.map((item, index) => (
                    <div key={index} className="MobileNavigationItem">
                        <DefaultButton
                            color="white"
                            className={item.className}
                            onClick={() => {
                                Router.push(item.link);
                            }}
                        >
                            <Image
                                alt=""
                                src={item.icon}
                                width={25}
                                height={25}
                            />
                        </DefaultButton>
                    </div>
                ))}
            </div>
        </div>
    );
}
