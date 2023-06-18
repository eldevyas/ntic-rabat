import React from 'react'
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";


import Link from "next/link";

const User = (props: any) => {
    const user = props.user
    console.log(user)
    return (
        <div>

            <Link href={`/connect/user/${user.username}`}>
                <Box
                    className="User"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "0.5rem",
                        "&:hover": {
                            cursor: "pointer",
                        },
                    }}
                >
                    <Avatar
                        alt="Anonymous"
                        src={`/assets/avatars/${user.avatar}`}
                        sizes="large"
                    />
                    <Box
                        className="Name"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography
                            variant="body2"
                            fontWeight="bold"
                            sx={{
                                color: (theme) =>
                                    theme.palette.text.primary,
                            }}
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            variant="caption"
                            fontWeight="medium"
                            sx={{
                                color: (theme) =>
                                    theme.palette.text
                                        .secondary,
                            }}
                        >
                            {
                                user.email.length > 18 ? user.email.slice(0, 18) + "..." : user.email
                            }
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </div>
    )
}

export default User