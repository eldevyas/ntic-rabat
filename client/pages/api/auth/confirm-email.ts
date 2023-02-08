import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";


export default async function confirmEmail(
    req: any,
    res: NextApiResponse
) {
    const { email, code } = req.body;
    let VERIFY_EMAIL_ENDPOINT = process.env.SERVER_PUBLIC_HOSTNAME + "/api/auth/verify-email";
    // if has localhost, switch it to 0.0.0.0
    if (VERIFY_EMAIL_ENDPOINT.includes("localhost")) {
        VERIFY_EMAIL_ENDPOINT = VERIFY_EMAIL_ENDPOINT.replace("localhost", "0.0.0.0");
    }

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
                if (req.session != null) {
                    req.session.user.email_verified = true;
                }
                return {
                    message: `Email Verification Successful`,
                    status: "Verified"
                };
            } else {
                return {
                    message: 'Email Verification Failed',
                    status: "Not Verified",
                }
            }
        })
        .catch((err: any) => {
            console.log(err);
            return {
                message: 'Email Verification Failed',
                status: "Error",
            }
        });

    let status = 200;

    if (response?.status === "Error") {
        status = 400;
    } else if (response?.status === "Not Verified") {
        status = 401;
    }

    return res.status(status).json(response);


}
