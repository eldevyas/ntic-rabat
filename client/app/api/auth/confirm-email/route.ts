import { NextResponse } from 'next/server';
import axios from "axios";


export async function GET(request: Request | any) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const code = searchParams.get("code");


    let VERIFY_EMAIL_ENDPOINT = process.env.SERVER_PUBLIC_HOSTNAME + "/api/auth/verify-email";
    console.log(`Verify email url: ${VERIFY_EMAIL_ENDPOINT}`);
    // // if has localhost, switch it to 0.0.0.0
    // if (VERIFY_EMAIL_ENDPOINT.includes("localhost")) {
    //     VERIFY_EMAIL_ENDPOINT = VERIFY_EMAIL_ENDPOINT.replace("localhost", "0.0.0.0");

    if (!email || !code) {
        return new Response(JSON.stringify({
            message: `Please provide the user's email and the confirmation code for this request.`,
            status: "Error"
        }), {
            status: 401,
        });
    }
    // }

    const response = await axios
        .post(
            VERIFY_EMAIL_ENDPOINT,
            {
                email: email,
                code: code,
            },
            { headers: { "Content-Type": "application/json" } }
        )
        .then((res: any) => {
            if (res.status === 200) {
                // Change req session user verified email
                if (request.session != null) {
                    request.session.user.email_verified = true;
                }
                return {
                    message: `Email Verification Successful`,
                    status: "Verified"
                };
            } else {
                return {
                    message: 'Email Verification Failed because of a client error.',
                    status: "Not Verified",
                }
            }
        })
        .catch((err: any) => {
            console.log(err);
            return {
                message: 'Email Verification Failed because of a server error.',
                status: "Error",
            }
        });

    let status = 200;

    if (response?.status === "Error") {
        status = 400;
    } else if (response?.status === "Not Verified") {
        status = 401;
    }

    return new Response(JSON.stringify(response), {
        status: status,
    });
}
