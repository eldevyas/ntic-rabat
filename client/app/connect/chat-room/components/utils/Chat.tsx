import { ChatContext } from '@/context/ChatContext'
import { onSnapshot, doc, getFirestore } from 'firebase/firestore'
import React, { useState, useContext, useEffect } from 'react'
import { app } from "@/firebase/config"
import { Box, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { OwnMessage, Message } from './Message'

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
            {
                messages &&
                messages.map((message: any) => (
                    <div key={message.uuid}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.rem', width: '100%', margin: '0.5rem 0' }}
                    >
                        {
                            message.senderId === data?.user?.username ? (
                                <OwnMessage message={message} />
                            ) : (
                                <Message message={message} />
                            )
                        }
                    </div>
                ))}
        </Box>
    )
}

export default Chat