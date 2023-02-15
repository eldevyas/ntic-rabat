import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DefaultButton } from "../../components/core/button";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import FavoriteIcon from '@mui/icons-material/Favorite';
const Post = (props: any) => {
    const user = props.user;
    const created_at = props.post.created_at;
    const poster = props.post.user;
    const post = props.post;
    const comments = props.post.comments;
    const likes = props.post.likes;
    let timeAgo = formatDistanceToNow(new Date(created_at), {
        addSuffix: false,
    });
    timeAgo = timeAgo.replace("about", "");
    timeAgo = timeAgo.replace("hours", "h");
    timeAgo = timeAgo.replace("minutes", "m");
    timeAgo = timeAgo.replace("seconds", "s");
    timeAgo = timeAgo.replace("days", "j");
    timeAgo = timeAgo.replace("months", "mois");


    const likePost = () => {
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .post(
                url + `/post/${post.id}/like`,
                {
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
            }
            )
            .catch((err) => {
                console.log(err.response.data);
            }
            );
    };
    // check if the user has liked the post


    return (
        <div className="Post">
            <div className="PostHeader">
                <Image
                    width={40}
                    height={40}
                    src="/assets/img/pp/pp1.png"
                    alt="avatar"
                />
                <div className="PostHeaderName">
                    <p className="UserName">{poster.name}</p>
                    <p className="TimeAgo">{timeAgo}</p>
                </div>
            </div>
            <div className="PostBody">
                <p>{post.content}</p>
            </div>
            <div className="PostActions">
                {/* check if the user has already liked this post */}
                {
                    likes.find((like: any) => like.user_id === user?.id) ? (
                        <DefaultButton onClick={likePost} className="Liked">
                            {likes.length} <FavoriteIcon />
                        </DefaultButton>
                    ) : (
                        <DefaultButton onClick={likePost} className="Like">
                            {likes.length} <FavoriteBorderIcon />
                        </DefaultButton>
                    )
                }
                <DefaultButton>Comment</DefaultButton>
                <DefaultButton>Save</DefaultButton>
            </div>
        </div>
    );
};

export default Post;
