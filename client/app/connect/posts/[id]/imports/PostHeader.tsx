import { BackButton } from '@/app/core/Button'
import { Box, Button } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation'
import LongMenu from './Menu'
import { useSession } from 'next-auth/react'

const PostHeader = (props: any) => {
    const { data }: any = useSession();
    const Router = useRouter()
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                justifyContent: "space-between",
            }}
        >
            <BackButton
                onClick={() => {
                    Router.push("/connect/")
                }}
            />
            {
                props.posterUsername === data?.user?.username &&
                <LongMenu postId={props.postId} />
            }

        </Box>
    )
}

export default PostHeader