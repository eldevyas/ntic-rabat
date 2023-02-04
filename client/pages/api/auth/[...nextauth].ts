import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth"
import axios from "axios"
import CredentialsProvider from "next-auth/providers/credentials"


const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login',
        // signOut: '/auth/logout',
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            type: "credentials",
            credentials: {
                email: { name: "email", label: "Email", type: "text", placeholder: "smith.john@ofppt-edu.ma" },
                password: { name: "password", label: "Password", type: "password" }
            },
            async authorize(credentials: any, req: any) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                }

                try {
                    const response = await axios.post('http://localhost:8000/api/login', {
                        email: email,
                        password: password
                    }, {
                        headers: { 'Content-Type': 'application/json' }
                    }
                    ).then((response) => {
                        return response;
                    }).catch((error) => {
                        return error;
                    })

                    if (response.status === 200) {
                        // store response to session
                        return response.data.user;
                    }

                    return null;
                } catch (error) {
                    return new Error("Credentials are invalid.");
                }
            }

        })
    ],
}

export default NextAuth(authOptions);

