import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { DefaultButton } from "../../components/core/button";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as Display from "../../services/displayAlert";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { TextField } from "@mui/material";
const Post = (props: any) => {
    const [data, setData] = useState(props.post);
    const [user, setUser] = useState(props.user);
    const [Likes, setLikes] = useState(data.likes);
    const [LikesCount, setLikesCount] = useState(data.likes?.length);
    const [Comments, setComments] = useState(data.comments);
    const [userHasLiked, setUserHaLiked] = useState(
        Likes.find((like: any) => like.user_id === user?.id)
    );

    const poster = data.user;
    const created_at = data.created_at;
    let timeAgo = formatDistanceToNow(new Date(created_at), {
        addSuffix: false,
    });
    timeAgo = timeAgo.replace("about", "");
    timeAgo = timeAgo.replace("hours", "h");
    timeAgo = timeAgo.replace("minutes", "m");
    timeAgo = timeAgo.replace("seconds", "s");
    timeAgo = timeAgo.replace("days", "j");
    timeAgo = timeAgo.replace("months", "mois");
    console.log(data);

    // get post data with UseEffect
    useEffect(() => {
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .get(url + `/post/${data.id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setData(res.data);
                setLikes(res.data.likes);
                setLikesCount(res.data.likes?.length);
            })
            .catch((err) => {
                console.log(err.response.data);
                Display.pushFailure("Une erreur s'est survenue.");
            });
    }, [userHasLiked]);


    const likePost = () => {

        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .post(
                url + `/post/${data.id}/like`,
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            )
            .then((res) => {
                if (userHasLiked) {
                    setLikesCount(LikesCount - 1);
                } else {
                    setLikesCount(LikesCount + 1);
                }
                setUserHaLiked(!userHasLiked);
            })
            .catch((err) => {
                console.log(err.response.data);
                setUserHaLiked(!userHasLiked);
                Display.pushFailure("Une erreur s'est survenue.");
            });
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
                <p>{data.content}</p>
            </div>
            <div className="PostActions">
                {/* check if the user has already liked this post */}
                {userHasLiked ? (
                    <DefaultButton onClick={likePost} className="Liked">
                        {LikesCount} <FavoriteIcon />
                    </DefaultButton>
                ) : (
                    <DefaultButton onClick={likePost} className="Like">
                        {LikesCount} <FavoriteBorderIcon />
                    </DefaultButton>
                )}
                <DefaultButton>Comment</DefaultButton>
                <DefaultButton>Save</DefaultButton>
            </div>
            <div className="CommentsArea">
                <div className="PostComments">
                    <div className="Comment">
                        <div className="CommentPoster">
                            <Image
                                width={40}
                                height={40}
                                src="/assets/img/pp/pp1.png"
                                alt="avatar"
                            />
                            <p className="UserName">User Name</p>
                        </div>
                        <p className="CommentContent">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, quod.
                        </p>
                    </div>
                </div>

                <div className="CommentForm">
                    <Image
                        width={40}
                        height={40}
                        src="/assets/img/pp/pp1.png"
                        alt="avatar"
                    />
                    <textarea placeholder="Add a comment..." ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Post;
