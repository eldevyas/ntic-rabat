import React, { useEffect } from 'react'
import { Box, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { onSnapshot } from 'firebase/firestore';


const RecentChats = ({ chats }: any) => {
    console.log(chats[1]);

    return (
        // <Box className="Recent_Chats" sx={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     overflowY: 'scroll',
        //     maxHeight: '75vh',
        //     overflowX: 'hidden',
        //     // design the scrollbar
        //     '&::-webkit-scrollbar': {
        //         width: '0.2rem',
        //     },

        // }} >
        //     {
        //         chats.map((chat: any) => {
        //             <Typography variant="body1">{chat[1].email}</Typography>
        //         })
        //     }
        //     <Box className="Chat"
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //             gap: '0.6rem',
        //             alignItems: 'center',
        //             width: '100%',
        //             padding: '0.5rem 1rem',
        //             '&:hover': {
        //                 backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
        //                 cursor: 'pointer',
        //             },
        //         }}
        //     >
        //         <Box className="Avatar"

        //         >
        //             <Avatar src={`/assets/avatars/default.png`}
        //                 sx={{
        //                     height: 50,
        //                     width: 50,
        //                 }}
        //             />
        //         </Box>
        //         <Box className="Name__LastMessage__Time" sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             // gap: '0.4rem',
        //             justifyContent: 'space-between',
        //         }}>
        //             <Box sx={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 gap: '0.5rem',
        //                 alignItems: 'start',
        //                 // gap: '0.5rem',
        //                 justifyContent: 'space-between',
        //                 width: '90%',

        //             }}>
        //                 <Typography variant="body1" sx={{
        //                     fontWeight: '500',
        //                 }}>User Name</Typography>
        //                 <Typography variant="body2" sx={{
        //                     color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        //                     fontWeight: '300',
        //                 }}>3 hours</Typography>
        //             </Box>
        //             <Typography variant="body2" sx={{
        //                 fontWeight: '500',
        //                 // if the window is small, the text will be cut
        //                 overflow: 'hidden',
        //                 maxWidth: '75%',
        //                 textOverflow: 'ellipsis',
        //                 whiteSpace: 'nowrap',
        //                 color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
        //             }}>You : Wafeeen Asahbi , 9rbna nkmlo ...</Typography>
        //         </Box>

        //     </Box>
        //     <Box className="Chat"
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //             gap: '0.6rem',
        //             alignItems: 'center',
        //             width: '100%',
        //             padding: '0.5rem 1rem',
        //             '&:hover': {
        //                 backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
        //                 cursor: 'pointer',
        //             },
        //         }}
        //     >
        //         <Box className="Avatar"

        //         >
        //             <Avatar src={`/assets/avatars/default.png`}
        //                 sx={{
        //                     height: 50,
        //                     width: 50,
        //                 }}
        //             />
        //         </Box>
        //         <Box className="Name__LastMessage__Time" sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             // gap: '0.4rem',
        //             justifyContent: 'space-between',
        //         }}>
        //             <Box sx={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 gap: '0.5rem',
        //                 alignItems: 'start',
        //                 // gap: '0.5rem',
        //                 justifyContent: 'space-between',
        //                 width: '90%',

        //             }}>
        //                 <Typography variant="body1" sx={{
        //                     fontWeight: '500',
        //                 }}>User Name</Typography>
        //                 <Typography variant="body2" sx={{
        //                     color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        //                     fontWeight: '300',
        //                 }}>3 hours</Typography>
        //             </Box>
        //             <Typography variant="body2" sx={{
        //                 fontWeight: '500',
        //                 // if the window is small, the text will be cut
        //                 overflow: 'hidden',
        //                 maxWidth: '75%',
        //                 textOverflow: 'ellipsis',
        //                 whiteSpace: 'nowrap',
        //                 color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
        //             }}>You : Wafeeen Asahbi , 9rbna nkmlo ...</Typography>
        //         </Box>

        //     </Box>
        //     <Box className="Chat"
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //             gap: '0.6rem',
        //             alignItems: 'center',
        //             width: '100%',
        //             padding: '0.5rem 1rem',
        //             '&:hover': {
        //                 backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
        //                 cursor: 'pointer',
        //             },
        //         }}
        //     >
        //         <Box className="Avatar"

        //         >
        //             <Avatar src={`/assets/avatars/default.png`}
        //                 sx={{
        //                     height: 50,
        //                     width: 50,
        //                 }}
        //             />
        //         </Box>
        //         <Box className="Name__LastMessage__Time" sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             // gap: '0.4rem',
        //             justifyContent: 'space-between',
        //         }}>
        //             <Box sx={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 gap: '0.5rem',
        //                 alignItems: 'start',
        //                 // gap: '0.5rem',
        //                 justifyContent: 'space-between',
        //                 width: '90%',

        //             }}>
        //                 <Typography variant="body1" sx={{
        //                     fontWeight: '500',
        //                 }}>User Name</Typography>
        //                 <Typography variant="body2" sx={{
        //                     color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        //                     fontWeight: '300',
        //                 }}>3 hours</Typography>
        //             </Box>
        //             <Typography variant="body2" sx={{
        //                 fontWeight: '500',
        //                 // if the window is small, the text will be cut
        //                 overflow: 'hidden',
        //                 maxWidth: '75%',
        //                 textOverflow: 'ellipsis',
        //                 whiteSpace: 'nowrap',
        //                 color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
        //             }}>You : Wafeeen Asahbi , 9rbna nkmlo ...</Typography>
        //         </Box>

        //     </Box>
        //     <Box className="Chat"
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //             gap: '0.6rem',
        //             alignItems: 'center',
        //             width: '100%',
        //             padding: '0.5rem 1rem',
        //             '&:hover': {
        //                 backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
        //                 cursor: 'pointer',
        //             },
        //         }}
        //     >
        //         <Box className="Avatar"

        //         >
        //             <Avatar src={`/assets/avatars/default.png`}
        //                 sx={{
        //                     height: 50,
        //                     width: 50,
        //                 }}
        //             />
        //         </Box>
        //         <Box className="Name__LastMessage__Time" sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             // gap: '0.4rem',
        //             justifyContent: 'space-between',
        //         }}>
        //             <Box sx={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 gap: '0.5rem',
        //                 alignItems: 'start',
        //                 // gap: '0.5rem',
        //                 justifyContent: 'space-between',
        //                 width: '90%',

        //             }}>
        //                 <Typography variant="body1" sx={{
        //                     fontWeight: '500',
        //                 }}>User Name</Typography>
        //                 <Typography variant="body2" sx={{
        //                     color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        //                     fontWeight: '300',
        //                 }}>3 hours</Typography>
        //             </Box>
        //             <Typography variant="body2" sx={{
        //                 fontWeight: '500',
        //                 // if the window is small, the text will be cut
        //                 overflow: 'hidden',
        //                 maxWidth: '75%',
        //                 textOverflow: 'ellipsis',
        //                 whiteSpace: 'nowrap',
        //                 color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
        //             }}>You : Wafeeen Asahbi , 9rbna nkmlo ...</Typography>
        //         </Box>

        //     </Box>
        //     <Box className="Chat"
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //             gap: '0.6rem',
        //             alignItems: 'center',
        //             width: '100%',
        //             padding: '0.5rem 1rem',
        //             '&:hover': {
        //                 backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
        //                 cursor: 'pointer',
        //             },
        //         }}
        //     >
        //         <Box className="Avatar"

        //         >
        //             <Avatar src={`/assets/avatars/default.png`}
        //                 sx={{
        //                     height: 50,
        //                     width: 50,
        //                 }}
        //             />
        //         </Box>
        //         <Box className="Name__LastMessage__Time" sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             // gap: '0.4rem',
        //             justifyContent: 'space-between',
        //         }}>
        //             <Box sx={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 gap: '0.5rem',
        //                 alignItems: 'start',
        //                 // gap: '0.5rem',
        //                 justifyContent: 'space-between',
        //                 width: '90%',

        //             }}>
        //                 <Typography variant="body1" sx={{
        //                     fontWeight: '500',
        //                 }}>User Name</Typography>
        //                 <Typography variant="body2" sx={{
        //                     color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        //                     fontWeight: '300',
        //                 }}>3 hours</Typography>
        //             </Box>
        //             <Typography variant="body2" sx={{
        //                 fontWeight: '500',
        //                 // if the window is small, the text will be cut
        //                 overflow: 'hidden',
        //                 maxWidth: '75%',
        //                 textOverflow: 'ellipsis',
        //                 whiteSpace: 'nowrap',
        //                 color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
        //             }}>You : Wafeeen Asahbi , 9rbna nkmlo ...</Typography>
        //         </Box>

        //     </Box>
        //     <Box className="Chat"
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //             gap: '0.6rem',
        //             alignItems: 'center',
        //             width: '100%',
        //             padding: '0.5rem 1rem',
        //             '&:hover': {
        //                 backgroundColor: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
        //                 cursor: 'pointer',
        //             },
        //         }}
        //     >
        //         <Box className="Avatar"

        //         >
        //             <Avatar src={`/assets/avatars/default.png`}
        //                 sx={{
        //                     height: 50,
        //                     width: 50,
        //                 }}
        //             />
        //         </Box>
        //         <Box className="Name__LastMessage__Time" sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             // gap: '0.4rem',
        //             justifyContent: 'space-between',
        //         }}>
        //             <Box sx={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 gap: '0.5rem',
        //                 alignItems: 'start',
        //                 // gap: '0.5rem',
        //                 justifyContent: 'space-between',
        //                 width: '90%',

        //             }}>
        //                 <Typography variant="body1" sx={{
        //                     fontWeight: '500',
        //                 }}>User Name</Typography>
        //                 <Typography variant="body2" sx={{
        //                     color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        //                     fontWeight: '300',
        //                 }}>3 hours</Typography>
        //             </Box>
        //             <Typography variant="body2" sx={{
        //                 fontWeight: '500',
        //                 // if the window is small, the text will be cut
        //                 overflow: 'hidden',
        //                 maxWidth: '75%',
        //                 textOverflow: 'ellipsis',
        //                 whiteSpace: 'nowrap',
        //                 color: (theme) => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
        //             }}>You : Wafeeen Asahbi , 9rbna nkmlo ...</Typography>
        //         </Box>

        //     </Box>


        // </Box>
        <div>
            {/* {
                chats.map((chat: any) => (
                    <h1>{chat.userInfos.email}</h1>
                ))
            } */}
        </div>


    )
}

export default RecentChats