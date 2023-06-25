import { Box, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import React, { useRef, useEffect, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import RecentChats from './RecentChats';
import { useSelector } from 'react-redux';
import { Timestamp, arrayUnion, doc, getDoc, getFirestore, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { app } from "@/firebase/config"
import { ChatContext } from '@/context/ChatContext';
import Chat from './utils/Chat';
import { v4 as uuid } from 'uuid';
import { Icon } from '@iconify/react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";






const ChatWindow = () => {
    const wrapperRef: any = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the component
        const handleClickOutside = (event: any) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                // Clicked outside the component, clear searchedUsers state
                setSearchedUsers([]);
            }
        };

        // Add event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const { data }: any = useSession()
    const { userChat, dispatch }: any = useContext(ChatContext)
    const storage = getStorage();


    // const [chats, setChats]: any = React.useState([]);

    const { users } = useSelector((state: any) => state.Reducers);
    const [searchedUsers, setSearchedUsers] = React.useState([]);
    const db: any = getFirestore(app);

    const handleSearch = (e: any) => {
        if (e === '') { return setSearchedUsers([]); }
        let searchedUsers = users.filter((user: any) => {
            return user.name.toLowerCase().includes(e.toLowerCase()) || user.email.toLowerCase().includes(e.toLowerCase()) || user.username.toLowerCase().includes(e.toLowerCase());
        })
        setSearchedUsers(searchedUsers);
    }

    // const [image, setImage]: any = React.useState(null);
    const [message, setMessage] = React.useState('');
    const handleUploadImage = (image: any) => {
        if (image) {
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, 'chats', userChat.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                image: downloadURL,
                                senderId: data?.user?.username,
                                date: Timestamp.now()
                            })
                        })
                        await updateDoc(doc(db, 'usersChat', data?.user?.username), {
                            [userChat.chatId + ".lastMessage"]: {
                                sender: data?.user?.username,
                                image: downloadURL,
                                senderName: data?.user?.name.split(' ')[0]


                            },
                            [userChat.chatId + ".date"]: serverTimestamp(),
                        });
                        await updateDoc(doc(db, 'usersChat', userChat.user.username), {
                            [userChat.chatId + ".lastMessage"]: {
                                sender: data?.user?.username,
                                image: downloadURL,
                                senderName: data?.user?.name.split(' ')[0]

                            },
                            [userChat.chatId + ".date"]: serverTimestamp(),
                        });
                    });
                }
            );
        }
    }
    const handleKeyDown = async (event: any) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            setMessage('');

            // Submit the form or perform any other action
            await updateDoc(doc(db, 'chats', userChat.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text: message,
                    senderId: data?.user?.username,
                    date: Timestamp.now()
                })
            })
                .then(() => {
                    console.log("Document successfully updated!");
                })
                .catch((error: any) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });

            await updateDoc(doc(db, 'usersChat', data?.user?.username), {
                [userChat.chatId + ".lastMessage"]: {
                    sender: data?.user?.username,
                    text: message,
                    senderName: data?.user?.name.split(' ')[0]

                },
                [userChat.chatId + ".date"]: serverTimestamp(),
            });
            await updateDoc(doc(db, 'usersChat', userChat.user.username), {
                [userChat.chatId + ".lastMessage"]: {
                    sender: data?.user?.username,
                    text: message,
                    senderName: data?.user?.name.split(' ')[0]

                },
                [userChat.chatId + ".date"]: serverTimestamp(),
            });

        }
    };

    const handleSelectUser = async (username: string) => {
        dispatch({
            type: 'CHANGE_USER',
            payload: users.find((user: any) => user.username === username),
        })

        const combinedEmails = data?.user?.username > username ? data?.user?.username + username : username + data?.user?.username;
        try {
            const res = await getDoc(doc(db, 'chats', combinedEmails));
            if (!res.exists()) {
                // create a chat in chats collection
                await setDoc(doc(db, 'chats', combinedEmails), { messages: [] });
                // create user chats
                // check if there's user chats with the current user email
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
            {userChat.user.name ? (

                <Box className="Conversation__Right"
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '75vh',
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
                        <Chat />
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

                        <textarea placeholder='Tapez un message'
                            style={{
                                resize: 'none',
                                border: 'none',
                                width: '100%'
                            }}
                            onChange={(e: any) => setMessage(e.target.value)}
                            value={message}
                            onKeyDown={handleKeyDown}
                            rows={1.5}

                        />
                        <input type="file" id='imageFile'
                            accept='image/*'
                            style={{ display: 'none' }} onChange={(e: any) => {
                                handleUploadImage(e.target.files[0])
                            }} />
                        <label htmlFor="imageFile" style={{ cursor: 'pointer' }}>
                            <Icon icon="fluent:image-add-24-regular" width={22} height={22} cursor='pointer' />
                        </label>
                    </Box>
                </Box>
            )
                : (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '75vh',
                        width: '100%',
                    }}>
                        <Typography variant='body1'>Sélectionnez un utilisateur pour commencer à chatter</Typography>
                    </Box>

                )}

        </Box>
    )
}

export default ChatWindow