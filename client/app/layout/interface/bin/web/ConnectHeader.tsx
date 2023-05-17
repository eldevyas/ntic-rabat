import React from "react";
import { DefaultButton } from "@/app/core/Button";
import User from "@/app/core/auth/User";
import { useSession } from "next-auth/react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

export default function ConnectHeader() {
    const Router = useRouter();
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
                    <User />
                </div>
            </div>
        </>
    );
}
