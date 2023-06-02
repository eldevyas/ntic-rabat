import { Grid } from "@mui/material";
import React from "react";
import Post from "./3. Post";
import { PostsType } from "@/app/connect/types/Posts.types";

export default function PostGrid({ Posts }: { Posts: PostsType }) {
    return (
        <Grid container spacing={2}>
            {Posts.map((PostData, Index: number) => (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={4} key={Index}>
                    <Post PostData={PostData} />
                </Grid>
            ))}
        </Grid>
    );
}
