import AdminPage from "./../../components/admin/adminPage";
import React, { useState, useEffect } from "react";
import { withRouter, useRouter } from "next/router";
import cookies from "next-cookies";

const Admin = ({ token }: any) => {
    const router = useRouter();
    // State
    const [Token, setToken] = useState(token);

    useEffect(() => {
        if (!token) {
            router.push("/login");
            return;
        }
    }, [router, token]);
    // bro it was working
    return (
        <div className="AdminPage">
            {Token ? (
                <AdminPage />
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        opacity: 0.5,
                    }}
                >
                    Redirection vers la page de login
                    <span
                        style={{
                            display: "inline-block",
                            animation: "blinkingText 1.2s infinite",
                        }}
                    >
                        ...
                    </span>
                    <style jsx>{`
                        @keyframes blinkingText {
                            0% {
                                color: #000;
                            }
                            49% {
                                color: #000;
                            }
                            60% {
                                color: transparent;
                            }
                            99% {
                                color: transparent;
                            }
                            100% {
                                color: #000;
                            }
                        }
                    `}</style>
                </div>
            )}
        </div>
    );
};

Admin.getInitialProps = async (ctx: any) => {
    const { token } = cookies(ctx);
    return { token };
};

export default withRouter(Admin);
