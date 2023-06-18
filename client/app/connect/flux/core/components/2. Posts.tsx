import { Grid } from "@mui/material";
import React from "react";
import Post from "./3. Post";
import { PostsType } from "@/app/connect/types/Posts.types";
import { DefaultButton } from "@/app/core/Button";
import { Box } from "@mui/material";

export default function PostGrid({ Posts, Limit = false, setLimit = false }: { Posts: PostsType, Limit: any, setLimit: any }) {
    if (!Limit) {
        return UnlimitedPosts(Posts);
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                margin: "1rem auto",
            }}
        >
            <Grid container spacing={2}>
                {
                    // show only Limit - 1 posts
                    Posts.slice(0, Limit - 1).map((PostData: any, Index: number) => (
                        <Grid item xs={12} sm={8} md={6} lg={4} xl={4} key={Index}>
                            <Post PostData={PostData} />
                        </Grid>
                    ))

                }
            </Grid>
            {

                Posts.length > Limit - 1 ?
                    <DefaultButton
                        onClick={setLimit}
                        sx={{
                            width: "100%",
                            height: "100%",
                            margin: "1rem auto",
                            borderRadius: "1rem",
                            color: "#fff",
                            backgroundColor: "#000",
                            "&:hover": {
                                backgroundColor: "#000",
                            },
                        }}
                    >
                        Load More
                    </DefaultButton>
                    : null
            }
        </Box>
    );
}


const UnlimitedPosts = (Posts: any) => {
    return (
        <Grid container spacing={2}>
            {Posts.map((PostData: any, Index: number) => (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={4} key={Index}>
                    <Post PostData={PostData} />
                </Grid>
            ))}
        </Grid>
    );
}

