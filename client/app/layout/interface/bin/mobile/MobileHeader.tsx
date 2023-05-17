import Image from "next/image";
import { useSession } from "next-auth/react";
import MenuIcon from "@mui/icons-material/Menu";

export default function MobileHeader(props: any) {
    const { data: session, status }: any = useSession();
    return (
        <>
            <div className="MobileConnectHeader">
                <Image
                    alt=""
                    src="/assets/img/pp/pp1.png"
                    width={30}
                    height={30}
                    className="Image"
                />
                <div className="HeaderText">
                    <p className="Greeting">Bonjour 👋</p>
                    <span className="Name">
                        {
                            // get the first name of the user and the first letter of the last name
                            session?.user?.name.split(" ")[0] +
                                " " +
                                session?.user?.name.split(" ")[1][0] +
                                "."
                        }
                    </span>
                </div>
                <div className="HeaderIcon">
                    <MenuIcon className="MenuIcon" />
                </div>
            </div>
        </>
    );
}
