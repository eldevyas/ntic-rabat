import React, { useEffect, useContext } from 'react'
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useSession } from 'next-auth/react'

import { doc, getDoc, getFirestore, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { app } from "@/firebase/config"
import { ChatContext } from '@/context/ChatContext';


const RecentChats = () => {
    const db: any = getFirestore(app);
    const [loading, setLoading] = React.useState(true);
    const { data }: any = useSession();
    const [chats, setChats]: any = React.useState([]);
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "usersChat", data?.user?.username), (doc: any) => {
                doc.data() && setChats(Object.entries(doc.data()));
                setLoading(false);
            })
            return unsub;
        }
        data?.user && getChats();
    }, [data])
    const { dispatch }: any = useContext(ChatContext)

    const handleSelectChat = (user: any) => {
        console.log("selected user : ", user);
        dispatch({
            type: 'CHANGE_USER',
            payload: user,
        })
    }

    return (
        <Box className="Recent_Chats" sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'scroll',
            maxHeight: '75vh',
            overflowX: 'hidden',
            // design the scrollbar
            '&::-webkit-scrollbar': {
                width: '0.2rem',
            },

        }} >
            {
                !loading ? (chats.sort((a: any, b: any) => b[1].date - a[1].date).map((chat: any) => {
                    return (
                        <Box className="Chat"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '0.6rem',
                                alignItems: 'center',
                                width: '100%',
                                padding: '0.5rem 1rem',
                                '&:hover': {
                                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
                                    cursor: 'pointer',
                                },
                            }}
                            onClick={() => handleSelectChat(chat[1].userInfo)}
                        >
                            <Box className="Avatar"

                            >
                                <Avatar src={`/assets/avatars/default.png`}
                                    sx={{
                                        height: 50,
                                        width: 50,
                                    }}
                                />
                            </Box>
                            <Box className="Name__LastMessage__Time" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                // gap: '0.4rem',
                                justifyContent: 'space-between',
                                width: "100%",
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '0.5rem',
                                    alignItems: 'start',
                                    // gap: '0.5rem',
                                    justifyContent: 'space-between',
                                    width: '100%',

                                }}>
                                    <Typography variant="body2" sx={{
                                        fontWeight: '500',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {chat[1].userInfo.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
                                        fontWeight: '300',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {chat[1].lastMessage ? new Date(chat[1].date?.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{
                                    fontWeight: '500',
                                    // if the window is small, the text will be cut
                                    overflow: 'hidden',
                                    maxWidth: '75%',
                                    width: '75%',
                                    minWidth: '75%',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
                                }}>
                                    {
                                        chat[1].lastMessage ?
                                            chat[1].lastMessage?.sender === data?.user?.username ? `You : ${chat[1].lastMessage.text ? chat[1].lastMessage.text : (
                                                chat[1].lastMessage?.image ? "image" : null
                                            )}` : `${chat[1].lastMessage.text ? chat[1].lastMessage.text : (
                                                chat[1].lastMessage?.image ? "image" : null
                                            )}`
                                            : "No messages yet"
                                    }
                                </Typography>
                            </Box>

                        </Box>
                    );
                })) : (<>No chats available</>)
            }

        </Box>



    )
}

export default RecentChats