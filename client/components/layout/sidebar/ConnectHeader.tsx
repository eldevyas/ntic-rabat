import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import User from "../header/utils/User";
import { useSession } from "next-auth/react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
export default function ConnectHeader() {
    const Router = useRouter();
    const { data: session } = useSession();
    return (
        <>
            <div className="ConnectHeader">
                <div className="Left">
                    <DefaultButton
                        className="ConnectHeaderButton"
                        onClick={() => Router.push("/")}
                    >
                        Acceuil
                    </DefaultButton>
                    <DefaultButton
                        className="ConnectHeaderButton"
                        onClick={() => Router.push("/emplois")}
                    >
                        Emploi
                    </DefaultButton>
                    <DefaultButton
                        className="ConnectHeaderButton Active"
                        onClick={() => Router.push("/connect")}
                    >
                        NTIC Connect
                    </DefaultButton>
                </div>
                <div className="Middle">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="SearchInput"
                    />
                    <SearchIcon className="SearchIcon" />
                </div>
                <div className="Right">
                    <User
                        name={session?.user?.name as string}
                        email={session?.user?.email as string}
                        image={session?.user?.image as string}
                    />
                </div>
            </div>
        </>
    );
}
