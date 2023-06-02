"use client"; // Error components must be Client Components

import { useEffect } from "react";
import ErrorPage from "@/app/pages/B. Error/ErrorPage";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return <ErrorPage Error={error} Reset={reset} />;
}
