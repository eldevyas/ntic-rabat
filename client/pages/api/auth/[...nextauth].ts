import { Session } from 'inspector';
import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth"
import axios from "axios"
import CredentialsProvider from "next-auth/providers/credentials";
import { randomBytes, randomUUID } from "crypto";


const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/register',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    callbacks: {

        session: async ({ session, token }: any) => {
            if (session?.user) {
                session.user.id = token.uid;
                session.user.username = token.username;
                session.user.token = token.accessToken;
                session.user.profile_picture = token.profile_picture;
                session.user.email_verified = token.email_verified;
                session.user.role = token.role;
            }
            return session;
        },
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
                // user token
                token.accessToken = user.token;
                token.profile_picture = user.profile_picture;
                token.email_verified = user.email_verified;
                token.role = user.role;
                token.username = user.username;
            }
            return token;
        },

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
                    console.clear();
                    let LOGIN_ENDPOINT = process.env.SERVER_PUBLIC_HOSTNAME + "/api/login";
                    // if has localhost, switch it to 0.0.0.0
                    if (LOGIN_ENDPOINT.includes("localhost")) {
                        LOGIN_ENDPOINT = LOGIN_ENDPOINT.replace("localhost", "0.0.0.0");
                    }
                    const response = await axios.post(LOGIN_ENDPOINT, {
                        email: email,
                        password: password
                    }, {
                        headers: { 'Content-Type': 'application/json' }
                    }).then((response) => {
                        console.table({ email, password, Error: "No", "Login URL": LOGIN_ENDPOINT });
                        return response;
                    }).catch((error) => {
                        console.table({ email, password, Error: "Yes", "Login URL": LOGIN_ENDPOINT });
                        return error;
                    })

                    if (response.status == 200) {
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

