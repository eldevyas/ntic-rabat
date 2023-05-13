import SideBar from "./web/SideBar";
import { useSession } from "next-auth/react";
import ConnectHeader from "./web/ConnectHeader";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import { DefaultButton } from "../../../core/button";

export default function DesktopNavigation(props: any) {
    const { data: session, status }: any = useSession();

    return (
        <div className="Connect">
            <SideBar />
            <div className="Content">
                <ConnectHeader />
                {props.children}
            </div>
        </div>
    );
}
