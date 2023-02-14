import React from "react";
import Image from "next/image";
import { DefaultButton } from "../../components/core/button";
import { formatDistanceToNow } from "date-fns";
const Post = (props: any) => {
    const created_at = props.post.created_at;
    const user = props.post.user;
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
                    <p className="UserName">{user.name}</p>
                    <p className="TimeAgo">{timeAgo}</p>
                </div>
            </div>
            <div className="PostBody">
                <p>{post.content}</p>
            </div>
            <div className="PostActions">
                <DefaultButton>Like</DefaultButton>
                <DefaultButton>Comment</DefaultButton>
                <DefaultButton>Save</DefaultButton>
            </div>
        </div>
    );
};

export default Post;
