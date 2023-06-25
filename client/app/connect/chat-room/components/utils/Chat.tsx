import { ChatContext } from '@/context/ChatContext'
import { onSnapshot, doc, getFirestore } from 'firebase/firestore'
import React, { useState, useContext, useEffect } from 'react'
import { app } from "@/firebase/config"
import { Box, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Chat = () => {
    const db: any = getFirestore(app);
    const [messages, setMessages]: any = useState([])
    const { userChat } = useContext(ChatContext)
    const { data }: any = useSession();
    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'chats', userChat.chatId), (doc: any) => {
            doc.exists() && setMessages(doc.data().messages)
        })
        return unSub;

    }, [userChat.chatId])
    console.log("messages : ", messages);
    return (
        <Box>
            {messages.map((message: any) => (
                <div key={message.uuid}
                    style={{ display: 'flex', flexDirection: 'column', gap: '0.rem', width: '100%', margin: '0.5rem 0' }}
                >
                    {
                        message.senderId === data?.user?.username ? (<>
                            {
                                message.image ? (<Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        margin: '0.1rem 1rem',
                                        borderRadius: '0.5rem',
                                        alignSelf: 'flex-end',
                                        height: '100%',
                                        width: '100%',
                                        maxWidth: '300px'

                                    }}
                                    onClick={() => window.open(message.image, '_blank')}
                                >
                                    <Image src={message.image} height={100} width={100} alt='Image' style={{
                                        borderRadius: '0.5rem',
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '300px',
                                        objectFit: 'contain',
                                    }} />                                 </Box>) :

                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.3rem 0.8rem',
                                        backgroundColor: (theme) => theme.palette.primary.main,
                                        width: 'fit-content',
                                        margin: '0.1rem 1rem',
                                        borderRadius: '0.5rem',
                                        alignSelf: 'flex-end',
                                        height: '100%'
                                    }}>

                                        <Typography variant="body2" sx={{ color: (theme) => theme.palette.primary.contrastText }}>{message.text}</Typography>

                                    </Box>
                            }
                        </>
                        ) : (<>
                            {
                                message.image ? (<Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        margin: '0.1rem 1rem',
                                        borderRadius: '0.5rem',
                                        alignSelf: 'flex-start',
                                        height: '100%',
                                        width: '100%',
                                        maxWidth: '300px'

                                    }}
                                    onClick={() => window.open(message.image, '_blank')}
                                >
                                    <Image src={message.image} height={100} width={100} alt='Image' style={{
                                        borderRadius: '0.5rem',
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '300px',
                                        objectFit: 'contain',
                                    }} />                                 </Box>) :
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.3rem 0.8rem',
                                        backgroundColor: (theme) => theme.palette.grey[300],
                                        width: 'fit-content',
                                        margin: '0.1rem 1rem',
                                        borderRadius: '0.5rem',
                                        alignSelf: 'flex-start',
                                        height: '100%'
                                    }}>

                                        <Typography variant="body2"
                                            sx={{ color: (theme) => theme.palette.grey[800] }}
                                        >{message.text}</Typography>


                                    </Box>
                            }

                        </>)

                    }
                </div>
            ))}
        </Box>
    )
}

export default Chat