import { Box, Input, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useRef, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import InputBase from '@mui/material/InputBase';
import RecentChats from './RecentChats';
import { useSelector } from 'react-redux';
import { doc, getDoc, getFirestore, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { app } from "@/firebase/config"



const ChatWindow = () => {
    const { data }: any = useSession()

    const [chats, setChats]: any = React.useState([]);
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", data.user.email), (doc: any) => {
                setChats(doc.data());
                console.log(doc.data());
            })
            return unsub;
        }
        data?.user?.email && getChats();
    }, [])
    const { users } = useSelector((state: any) => state.Reducers);
    const [searchedUsers, setSearchedUsers] = React.useState([]);
    const wrapperRef: any = useRef(null);
    const db: any = getFirestore(app);

    const handleSearch = (e: any) => {
        if (e === '') { return setSearchedUsers([]); }
        let searchedUsers = users.filter((user: any) => {
            return user.name.toLowerCase().includes(e.toLowerCase()) || user.email.toLowerCase().includes(e.toLowerCase()) || user.username.toLowerCase().includes(e.toLowerCase());
        })
        setSearchedUsers(searchedUsers);
    }


    const handleSelectUser = async (email: string) => {
        const combinedEmails = data?.user?.email > email ? data?.user?.email + email : email + data?.user?.email;
        try {
            const res = await getDoc(doc(db, 'chats', combinedEmails));
            if (!res.exists()) {
                // create a chat in chats collection
                await setDoc(doc(db, 'chats', combinedEmails), { messages: [] });
                // create user chats
                // check if there's user chats with the current user email
                const userChats = await getDoc(doc(db, 'userChats', data?.user?.email));
                await updateDoc(doc(db, 'userChats', data?.user?.email), {
                    [combinedEmails + ".userInfo"]: {
                        email: email,
                    },
                    [combinedEmails + ".date"]: serverTimestamp(),
                });
                await updateDoc(doc(db, 'userChats', email), {
                    [combinedEmails + ".userInfo"]: {
                        email: data?.user?.email,
                    },
                    [combinedEmails + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
                height: '100%',
                minHeight: '75vh',
                borderRadius: '1rem',
            }}
        >
            <Box className="LEFT"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    padding: '1rem 0',
                    minHeight: '75vh',
                    maxHeight: '75vh',
                    width: '30%',
                    height: '100%',
                    borderRight: '1px solid #ccc',
                }}
            >
                <Box className="Current_User_Avatar"
                    sx={{
                        padding: '0 1rem',
                    }}
                >
                    <Avatar src={`/assets/avatars/default.png`}
                        sx={{
                            height: 50,
                            width: 50,
                        }}
                    />
                </Box>
                <Box className="Search_Users"
                    sx={{
                        padding: '0 1rem',
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.5rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #ccc',
                        padding: '0.5rem 1rem',
                        width: 'fit-content',
                        position: 'relative',
                    }}>
                        <Icon icon="tabler:search" color='grey' fontSize={20} />
                        <InputBase placeholder="Chercher..." sx={{
                            border: 'none',
                            backgroundColor: 'transparent',
                            color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],

                        }}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        {
                            searchedUsers.length > 0 && (
                                <Box
                                    ref={wrapperRef}
                                    sx={{

                                        position: "absolute",
                                        top: "100%",
                                        left: "0",
                                        padding: "0.5rem 0",
                                        height: "auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        // gap: "0.8rem",
                                        color: (theme) => theme.palette.text.primary,
                                        zIndex: "100",
                                        backgroundColor: "var(--nextui-colors-accents0)",
                                        backdropFilter: "blur(5rem)",
                                        maxHeight: "12rem",
                                        overflowY: "scroll",
                                        width: "100%",
                                        borderRadius: "0.5rem",
                                        '&::-webkit-scrollbar': {
                                            // width: '0.2rem'
                                            display: "none",
                                        },
                                    }}
                                >
                                    {searchedUsers.map((user: any) => {
                                        return (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    // justifyContent: "space-between",
                                                    gap: "0.8rem",
                                                    padding: "0.5rem 1rem",
                                                    borderRadius: "0.3rem",
                                                    '&:hover': {
                                                        backgroundColor: "var(--nextui-colors-accents1)",
                                                        cursor: "pointer",
                                                    }
                                                }}
                                                onClick={() => { handleSelectUser(user.email) }}
                                            >
                                                <Avatar
                                                    src={user.avatar}
                                                />
                                                <Typography
                                                    variant="body1"
                                                    sx={{ fontSize: "0.9rem" }}
                                                >
                                                    {user.name}
                                                </Typography>
                                            </Box>

                                        );
                                    })}
                                </Box>
                            )
                        }
                    </Box>
                    {chats?.userInfos?.email}
                </Box>
            </Box>
            <Box className="Conversation__Right"
                sx={{
                    width: '100%',
                }}
            >
                <Box className="Conversation__Header">
                    {/* AVATAR + NAME */}
                </Box>
                <Box className="Conversation__Messages">
                </Box>
                <Box className="Conversation__Footer">
                </Box>
            </Box>

        </Box>
    )
}

export default ChatWindow