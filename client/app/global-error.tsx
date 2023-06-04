"use client";

import ErrorPage from "./pages/B. Error/ErrorPage";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <ErrorPage Error={error} Reset={reset} />
            </body>
        </html>
    );
}
