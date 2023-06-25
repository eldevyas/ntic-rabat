import React, { useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'


export const OwnMessage = ({ message }: any) => {
    const messageRef: any = useRef(null)
    useEffect(() => {
        messageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [message])

    return (
        <>
            {
                message.image ? (<Box
                    ref={messageRef}
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

                    <Box
                        ref={messageRef}
                        sx={{
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


    )
}

export const Message = ({ message }: any) => {
    const messageRef: any = useRef(null)
    useEffect(() => {
        messageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [message])
    return (<>
        {
            message.image ? (<Box
                ref={messageRef}
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
                <Box
                    ref={messageRef}
                    sx={{
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

