import React from "react";
import { useRouter } from "next/router";

export default function error() {
    // Get error from URL query
    //
    const query = useRouter().query;

    const error = query.error ? query.error : "";
    return (
        <>
            <div>Error: {error}</div>
        </>
    );
}
