import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(Request: Request) {
    const data = await Request.json();
    console.log(data);
    // Get Email and Code from Request
    const Email = data.email;
    const Code = data.code;

    console.table({ Email, Code });

    // THERE'S AN ERROR USING LOCALHOST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let VERIFY_EMAIL_ENDPOINT = "http://127.0.0.1:8000/api/auth/verify-email";
    console.log(`Verify email url: ${VERIFY_EMAIL_ENDPOINT}`);

    if (!Email || !Code || Email.length === 0 || Code.length === 0) {
        return new NextResponse(
            JSON.stringify({
                message: `Please provide the user's email and the confirmation code for this request.`,
                status: "Error",
            }),
            {
                status: 422,
            }
        );
    }

    const response = await axios
        .post(VERIFY_EMAIL_ENDPOINT, data, {
            headers: { "Content-Type": "application/json" },
        })
        .then((res: any) => {
            if (res.status === 200) {
                return {
                    message: `Email Verification Successful.`,
                    status: "Verified",
                };
            } else {
                return {
                    message:
                        "Email Verification Failed because of a client error.",
                    status: "Not Verified",
                };
            }
        })
        .catch((err) => {
            return {
                message: "Email Verification Failed because of a server error.",
                status: "Error",
                error: err,
            };
        });

    let status = 200;

    if (response?.status === "Error") {
        status = 500;
    } else if (response?.status === "Not Verified") {
        status = 401;
    }

    return new NextResponse(JSON.stringify(response), {
        status: status,
    });
}
