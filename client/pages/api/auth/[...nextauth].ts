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

                if (email !== 'john@gmail.com' || password !== '1234') {
                    return new Error("Credentials are invalid.");
                }

                const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error('error message') // Redirect to error page
                    // throw '/path/to/redirect'        // Redirect to a URL
                };
            }
        })
    ],
}

export default NextAuth(authOptions);

