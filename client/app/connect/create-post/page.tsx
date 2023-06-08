'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import CreatePost from './components/CreatePost'
import Head from 'next/head'
const Page = () => {
    return (
        <>
            {/* <Head>
                <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
                <script>
                    {`hljs.configure({
                    languages: ['javascript', 'ruby', 'python', 'rust', 'java', 'c', 'c++', 'c#', 'go', 'php', 'dart', 'kotlin', 'swift', 'typescript', 'css', 'html', 'xml', 'json', 'sql', 'shell', 'bash', 'yaml', 'markdown', 'plaintext', 'dockerfile', 'nginx', 'ini', 'makefile', 'perl', 'powershell', 'ruby', 'scss', 'vim', 'yaml', 'apache', 'nginx', 'bash', 'shell', 'c', 'c++', 'c#', 'css', 'dart', 'dockerfile', 'go', 'html', 'ini', 'java', 'javascript', 'json', 'kotlin', 'less', 'lua', 'makefile', 'markdown', 'nginx', 'perl', 'php', 'powershell', 'python', 'r', 'ruby', 'rust', 'scss', 'shell', 'sql', 'swift', 'typescript', 'vim', 'xml', 'yaml'],
                    })`}
                </script>
            </Head> */}
            <Box sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",

            }}>
                <CreatePost />

            </Box>
        </>

    )
}

export default Page