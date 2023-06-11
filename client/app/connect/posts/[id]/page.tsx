
'use client';
import React, { useEffect } from 'react'
import { useParams } from "next/navigation";
import axios from 'axios';
import { Avatar, Box, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import PostHeader from './imports/PostHeader';
import BlogPostHero from './imports/PostHero';
import { Icon } from '@iconify/react';
import { useSession } from 'next-auth/react';
import { Checkbox } from '@mui/material';
import { AvatarGroup } from '@mui/material';
import { DefaultButton } from '@/app/core/Button';
import { TextField } from '@mui/material';
import * as Display from "@/services/displayAlert";
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';

const Page = () => {

    const { id }: any = useParams();
    const { data }: any = useSession();
    const [post, setPost]: any = React.useState({});
    const [isRefreshing, setIsRefreshing] = React.useState(false);
    const [comment, setComment] = React.useState('');
    const [isCommenting, setIsCommenting] = React.useState(false);
    useEffect(() => {
        axios.get(`${process.env.SERVER_PUBLIC_API_URL}/posts/${id}`)
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            }
            )

    }, [isRefreshing])

    const handleLike = () => {
        if (data.user) {
            axios.post(`${process.env.SERVER_PUBLIC_API_URL}/posts/${id}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${data.user.token}`
                }
            })
                .then((response) => {
                    console.log(response.data);
                    setIsRefreshing(!isRefreshing);
                })
                .catch((error) => {
                    console.error("Error fetching posts:", error);
                    setIsRefreshing(!isRefreshing);
                })
            console.log('liked')

        } else {
            console.log('not liked')
        }
    }
    const handleComment = () => {
        setIsCommenting(true);
        if (comment.length > 1) {
            axios.post(`${process.env.SERVER_PUBLIC_API_URL}/posts/${id}/comment`, {
                body: comment
            }
                , {
                    headers: {
                        Authorization: `Bearer ${data.user.token}`
                    }
                })
                .then((response) => {
                    setIsRefreshing(!isRefreshing);
                    Display.pushSuccess('Commented successfully');
                    setComment('');
                    setIsCommenting(false);
                }).catch((error) => {
                    Display.pushFailure('Error commenting');
                    setIsRefreshing(!isRefreshing);
                    setComment('');
                    setIsCommenting(false);
                }

                )
        } else {
            Display.pushFailure('Comment must be at least 2 characters long');
            setIsCommenting(false);
        }
    }

    return (
        <Box sx={{
            display: "flex", flexDirection: "column",
            justifyContent: "center",
            padding: "0.6rem 1rem",
            width: "80%",
            margin: "1rem auto",
            borderRadius: "1rem",
            backgroundColor: (theme: any) => theme.palette.mode === "light" ? theme.palette.background.default : theme.palette.background.paper,
            height: "100%",
        }}>
            <PostHeader />
            <BlogPostHero post={post} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "1rem",
                }}
            >
                <Typography
                    variant="h5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >

                </Typography>
                <hr />
                <Box className="LikesAndComments" sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1rem",
                }}>
                    <Box className="Likes" sx={{
                        display: "flex",
                        flexDirection: "row",
                        // justifyContent: "space-between",
                        gap: "0.5rem",
                        alignItems: "center",
                    }}>
                        {post.likes && (

                            <Checkbox
                                defaultChecked={post.likes && post.likes.find((like: any) => like.user_id === data?.user?.id) ? true : false}
                                onChange={handleLike}
                                icon={<Icon icon="ph:heart" fontSize={24} style={{ cursor: 'pointer' }} />}
                                checkedIcon={<Icon icon="ph:heart-fill" fontSize={24} color='red' style={{ cursor: 'pointer' }} />}
                            />)
                        }
                        <Typography variant="h6">{post.likes ? (post.likes.length) : (<>Charging ...</>)}</Typography>

                        <AvatarGroup
                            max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}
                        >
                            {post.likes && post.likes.map((like: any) => (
                                <>
                                    <Avatar key={like.user_id} alt={like.user.name} src={`/assets/avatars/${like.user.avatar}`} />
                                </>
                            ))}
                        </AvatarGroup>

                    </Box>

                </Box>
                <Box className="Comments" sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1rem",

                }}>
                    <Typography variant="h5" sx={{
                        fontWeight: "bold",
                    }}

                    >Comments : </Typography>
                    <TextField name="comment" id="comment" fullWidth
                        multiline
                        minRows={3}
                        maxRows={5}
                        placeholder="Write a comment ..." sx={{
                            width: "100%",
                            outline: "none",
                            resize: "none",

                        }}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}

                    ></TextField >

                    <LoadingButton
                        onClick={handleComment}
                        loading={isCommenting}
                        loadingPosition="center"
                        variant="contained"
                        color="primary"
                        sx={{
                            width: "fit-content",
                            alignSelf: "flex-end",
                        }}

                    >
                        Comment
                    </LoadingButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Page