import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';



// Check of user is authenticated


export default function App() {
    const Router = useRouter();
    // Use Effect to check if the user exists in the session storage
    useEffect(() => {
        if (!sessionStorage.getItem('user')) {
            Router.push('/connexion');
        }
        else {
            Router.push('/forum');
        }
    }, []);

    // Logout button
    return (
        <button onClick={() => {
            sessionStorage.removeItem('user');
            Router.push('/connexion');
        }}>Logout</button>
    )
}