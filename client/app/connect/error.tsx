"use client"; // Error components must be Client Components

import { useEffect } from "react";
import ErrorPage from "@/app/pages/B. Error/ErrorPage";
import Dashboard from "./layout/Dashboard";

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

    return (
        <Dashboard>
            <ErrorPage Error={error} Reset={reset} />
        </Dashboard>
    );
}
