
import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth"
import axios from "axios"
import CredentialsProvider from "next-auth/providers/credentials"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    // Do whatever you want here, before the request is passed down to `NextAuth`
    return await NextAuth(req, res, {
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    username: { label: "Username", type: "text", placeholder: "jsmith" },
                    password: { label: "Password", type: "password" }
                },
                async authorize(credentials, req) {
                    const res = await axios.post(`${process.env.SERVER_PUBLIC_API_URL}/auth/login`, credentials);
                    const user = res.data.user;
                    console.table(res);

                    if (res.status == 200 && user) {
                        return user;
                    }
                    return null;
                }
            })
        ],
        pages: {
            signIn: '/auth/signin',
            signOut: '/auth/signout',
            error: '/auth/error', // Error code passed in query string as ?error=
            verifyRequest: '/auth/verify-request', // (used for check email message)
            newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
        }
    })
}

