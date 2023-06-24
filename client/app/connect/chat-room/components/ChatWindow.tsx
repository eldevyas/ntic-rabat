import { Box, Input, TextareaAutosize, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useRef, useEffect, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import InputBase from '@mui/material/InputBase';
import RecentChats from './RecentChats';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc, getFirestore, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { app } from "@/firebase/config"
import { ChatContext } from '@/context/ChatContext';
import { DefaultButton } from '@/app/core/Button';



const ChatWindow = () => {
    const { data }: any = useSession()
    const { userChat }: any = useContext(ChatContext)

    // const [chats, setChats]: any = React.useState([]);

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

    const [message, setMessage] = React.useState('');
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            // Submit the form or perform any other action
            console.log('Form submitted with message:', message);
            setMessage('');
        }
    };

    const handleSelectUser = async (username: string) => {
        const combinedEmails = data?.user?.username > username ? data?.user?.username + username : username + data?.user?.username;
        console.log(combinedEmails);
        try {
            const res = await getDoc(doc(db, 'chats', combinedEmails));
            if (!res.exists()) {
                // create a chat in chats collection
                await setDoc(doc(db, 'chats', combinedEmails), { messages: [] });
                // create user chats
                // check if there's user chats with the current user email
                console.log(data?.user)
                // const userChats = await getDoc(doc(db, 'usersChat', data?.user?.email));
                await updateDoc(doc(db, 'usersChat', data?.user?.username), {
                    [combinedEmails + ".userInfo"]: {
                        username: username,
                        name: users.find((user: any) => user.username === username).name,
                        email: users.find((user: any) => user.username === username).email,
                        avatar: users.find((user: any) => user.username === username).avatar,
                    },
                    [combinedEmails + ".date"]: serverTimestamp(),
                });
                await updateDoc(doc(db, 'usersChat', username), {
                    [combinedEmails + ".userInfo"]: {
                        username: data?.user?.username,
                        name: data?.user?.name,
                        email: data?.user?.email,
                        avatar: data?.user?.avatar,
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
                display: 'flex',
                flexDirection: 'row',
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
                                                onClick={() => { handleSelectUser(user.username) }}
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
                    {/* {chats?.userInfos?.email} */}
                </Box>
                <RecentChats />
            </Box>
            <Box className="Conversation__Right"
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '75vh',
                }}
            >
                <Box className="Conversation__Header"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.7rem 1rem',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <Avatar src={`/assets/avatars/default.png`}
                        sx={{
                            height: 50,
                            width: 50,
                        }}
                    />
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                    }}>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: '400',
                            }}
                        >
                            {userChat?.user.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: '300',
                            }}
                        >
                            {userChat?.user.email}
                        </Typography>
                    </Box>

                </Box>
                <Box className="Conversation__Messages"
                    sx={{
                        flex: '1', // Take up remaining vertical space
                        overflowY: 'scroll', // Add scroll if needed
                    }}
                >
                    <p style={{ height: '100%' }}>
                        WTF
                    </p>
                </Box>
                <Box className="Conversation__Footer"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.7rem 1rem',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #ccc',
                        height: 'fit-content',
                    }}
                >

                    <textarea placeholder='Tapez Un Message'
                        style={{
                            resize: 'none',
                            border: 'none',
                            width: '100%'
                        }}
                        onChange={(e: any) => setMessage(e.target.value)}
                        value={message}
                        onKeyDown={handleKeyDown}

                    />
                    {/* <DefaultButton size='small' color='secondary' variant='contained'>Envoyer</DefaultButton> */}
                </Box>
            </Box>

        </Box>
    )
}

export default ChatWindow