import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { DefaultButton } from "../../components/core/button";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import * as Display from "../../services/displayAlert";
import CommentIcon from '@mui/icons-material/Comment';


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
    const [isCommenting, setIsCommenting] = useState(false);

    let timeAgo = formatDistanceToNow(new Date(created_at), {
        addSuffix: false,
    });
    // const [comment, setComment] = useState(null)
    // useState for comment , type string
    const [comment, setComment] = useState("");
    const [isRefetching, setIsRefetching] = useState(false);

    timeAgo = timeAgo.replace("about", "");
    timeAgo = timeAgo.replace("hours", "h");
    timeAgo = timeAgo.replace("minutes", "m");
    timeAgo = timeAgo.replace("seconds", "s");
    timeAgo = timeAgo.replace("days", "j");
    timeAgo = timeAgo.replace("months", "mois");


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
                setComments(res.data.comments);
            })
            .catch((err) => {
                Display.pushFailure("Une erreur s'est survenue.");
            });
    }, [userHasLiked, isCommenting, isRefetching]);


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
                setUserHaLiked(!userHasLiked);
                Display.pushFailure("Une erreur s'est survenue.");
            });
    };


    const handleComment = () => {
        // get server url from env
        const url = process.env.SERVER_PUBLIC_API_URL;
        axios
            .post(
                url + `/post/${data.id}/comment`,
                {
                    body: comment,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            )
            .then((res) => {
                setComment("");
                setIsCommenting(true);
                setIsRefetching(!isRefetching);
            })
            .catch((err) => {
                Display.pushFailure("Une erreur s'est survenue.");
            });
    };

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
            <div className="PostBody" >
                {
                    // check if the post content has hashtags 
                    data.content.includes("#") ? (

                        <>
                            {
                                data.content.split(/[\s\n]+/).map((word: any, index: any) => {
                                    if (word.includes("#")) {
                                        return (
                                            <p>
                                                <span className="HashTag" key={index}>
                                                    {word}
                                                </span>
                                            </p>
                                        );
                                    }
                                    return word + " ";
                                })
                            }
                        </>
                    ) : (
                        <p className="PostContent">{data.content}</p>
                    )
                }
            </div>
            <div className="PostActions">
                {/* check if the user has already liked this post */}
                {userHasLiked ? (
                    <DefaultButton onClick={likePost} className="Liked">
                        {LikesCount} <FavoriteIcon className="ButtonIcon" />
                    </DefaultButton>
                ) : (
                    <DefaultButton onClick={likePost} className="Like">
                        {LikesCount} <FavoriteBorderIcon className="ButtonIcon" />
                    </DefaultButton>
                )}
                <DefaultButton onClick={() => setIsCommenting(!isCommenting)}>
                    {Comments.length}
                    <CommentIcon className="ButtonIcon" />
                </DefaultButton>
                <DefaultButton>Save</DefaultButton>
            </div>
            {isCommenting ? (
                <div className="CommentsArea">
                    <div className="PostComments">
                        {Comments.map((comment: any, index: any) => (
                            <div className="Comment" key={index}>
                                <div className="CommentPoster">
                                    <Image
                                        width={40}
                                        height={40}
                                        src="/assets/img/pp/pp1.png"
                                        alt="avatar"
                                    />
                                    <div className="User">
                                        <p className="UserName">{comment.user.name}</p>
                                        <p className="TimeAgo">2h</p>
                                    </div>
                                </div>
                                <p className="CommentContent">
                                    {comment.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="CommentForm">
                        <Image
                            width={40}
                            height={40}
                            src="/assets/img/pp/pp1.png"
                            alt="avatar"
                        />
                        <textarea placeholder="Ajouter un commentaire..."
                            onChange={(e: any) => setComment(e.target.value)}
                            value={comment}
                        ></textarea>
                        <DefaultButton onClick={handleComment}>Poster</DefaultButton>
                    </div>
                </div>) : (null)
            }
        </div>
    );
};

export default Post;
