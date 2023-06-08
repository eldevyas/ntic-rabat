import * as Yup from 'yup';
import { useCallback, useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { styled } from '@mui/material/styles';


import {
    Card,
    Grid,
    Stack,
    TextField,
    Typography,
    Button,
    FormHelperText,
} from '@mui/material';
import React, { useRef } from 'react';
// import JoditEditor from "jodit-react"
import { useColorScheme } from '@mui/material';
import './test.scss'
import UploadSingleFile from './UploadImage';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import axios from 'axios';
import dynamic from 'next/dynamic';

// Conditionally import JoditEditor only on the client-side
// let JoditEditor: any = null;

// if (typeof window !== 'undefined') {
//     JoditEditor = require('jodit-react');
// }






const LabelStyle = styled(Typography)(({ theme }: any) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1)
}));

const NewPostForm = () => {
    const [content, setContent]: any = useState('');
    const [title, setTitle]: any = useState('');
    const [description, setDescription]: any = useState('');
    const [cover, setCover]: any = useState(null);

    const NewBlogSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        content: Yup.string().min(1000).required('Content is required'),
        cover: Yup.mixed().required('Cover is required')
    });
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            content: '',
            cover: null,
            tags: ['Logan'],
            publish: true,
            comments: true,
            metaTitle: '',
            metaDescription: '',
            metaKeywords: ['Logan']
        },
        validationSchema: NewBlogSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log(values)
        }
    });



    const Test = (e: any) => {
        e.preventDefault()
        console.log("title", title)
        console.log("description", description)
        console.log("content", content)
        console.log("cover", cover)
        // axios.post(`${process.env.SERVER_PUBLIC_API_URL}/posts`, {
        //     title: title,
        //     description: description,
        //     content: content,
        //     cover: cover
        // }).then((res) => {
        //     console.log(res)
        // }
        // ).catch((err) => {
        //     console.log(err)
        // })
        axios.get(`http://localhost:8000/api/posts`).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    }
    const { errors, values, touched, setFieldValue }: any = formik;

    const handleDrop = useCallback(
        (acceptedFiles: any) => {
            const file = acceptedFiles[0];
            if (file) {
                setCover(file);
                setFieldValue('cover', {
                    ...file,
                    preview: URL.createObjectURL(file)
                });
            }
        },
        [setFieldValue]
    );


    const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
    const Editor = (props: any) => {
        const { mode } = useColorScheme();



        return (
            <JoditEditor
                value={content}
                config={{
                    theme: mode == "dark" ? "dark" : "default",
                    buttons: [
                        'source', '|',
                        'bold',
                        'underline',
                        'italic', '|',
                        'ul',
                        'ol', '|',
                        'font',
                        'fontsize',
                        'brush',
                        'image',
                        'video',
                        'table',
                        'link', '|',
                        'align', 'undo', 'redo', '|',
                        'hr',
                        'eraser',
                    ],
                }}
                onBlur={
                    (newContent: any) => setContent(newContent)
                }
                {...props}

            />
        );
    };





    return (
        <FormikProvider value={formik} >
            <Form noValidate autoComplete="off" onSubmit={(e) => Test(e)} style={{ width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}  >
                        <Card sx={{ p: 3, width: "100%" }}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label="Post Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    maxRows={5}
                                    label="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <div>
                                    <LabelStyle>Content</LabelStyle>
                                    <Editor
                                    />
                                    {touched.content && errors.content && (
                                        <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                                            {touched.content && errors.content}
                                        </FormHelperText>
                                    )}
                                </div>

                                <div>
                                    <LabelStyle>Cover</LabelStyle>
                                    <UploadSingleFile
                                        maxSize={3145728}
                                        accept="image/*"
                                        file={values.cover}
                                        onDrop={handleDrop}
                                        error={Boolean(touched.cover && errors.cover)}
                                    />
                                    {touched.cover && errors.cover && (
                                        <FormHelperText error sx={{ px: 2 }}>
                                            {touched.cover && errors.cover}
                                        </FormHelperText>
                                    )}
                                </div>
                            </Stack>
                        </Card>
                        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
                            <Button
                                fullWidth
                                type="button"
                                color="inherit"
                                variant="outlined"
                                size="large"
                                sx={{ mr: 1.5 }}
                            >
                                Preview
                            </Button>
                            <LoadingButton fullWidth type="submit" variant="contained" size="large"
                            // loading={isSubmitting}
                            >
                                Post
                            </LoadingButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Form>
        </FormikProvider>
    )
}

export default NewPostForm