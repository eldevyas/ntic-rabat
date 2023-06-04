import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function Avatar() {
    const { data: session, status }: any = useSession();

    return <div>Avatar</div>;
}
