import React from 'react';
import { useRouter } from 'next/router';

import { useEffect } from 'react';
export default function App() {
    const Router = useRouter();
    const auth = sessionStorage.getItem('user');
    if (auth) {
        return (
            <div className='Logout'>
                <h1>Logout</h1>
                <button onClick={() => {
                    localStorage.removeItem('user');
                    Router.push('/connexion');
                }}>Logout</button>
            </div>
        )
    } else {
        Router.push('/connexion');
    }



}