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
import JoditEditor from "jodit-react"
import { useColorScheme } from '@mui/material';
import './test.scss'
import UploadSingleFile from './UploadImage';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import axios from 'axios';
import dynamic from 'next/dynamic';
import * as Display from '../../../../services/displayAlert'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import BlogNewPostPreview from './NewPostPreview';
import Jodit from './utils/JoditEditor';
import Link from 'next/link';
import { IconButton } from '@/app/core/Button';
import { Icon } from '@iconify/react';


const LabelStyle = styled(Typography)(({ theme }: any) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1)
}));

const NewPostForm = () => {
    const [open, setOpen] = useState(false);

    const { data }: any = useSession();

    const [content, setContent]: any = useState('');
    const [title, setTitle]: any = useState('');
    const [description, setDescription]: any = useState('');
    const [cover, setCover]: any = useState(null);
    const Router = useRouter();
    const handleContentChange = (newContent: any) => {
        setContent(newContent);
    };

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



    const HandlePushPost = (e: any) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('content', content);
        formData.append('cover', cover);

        axios.post(`http://localhost:8000/api/posts`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'Bearer ' + data?.user?.token
            }
        }
        ).then((res) => {
            if (res.status == 201) {
                Display.pushSuccess('Post Created')
                setTitle('')
                setDescription('')
                setContent('')
                setCover(null)

                Router.push('/connect')
            }
            else {
                Display.pushFailure('Failed to create post , try again')
            }
        }
        ).catch((err) => {
            console.log(err)
        })
        // console.log(content)
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


    const Jodit = dynamic(() => import('./utils/JoditEditor'), { ssr: false })
    const Editor = ({ content, onContentChange, ...props }: any) => {
        const { mode } = useColorScheme();

        return (
            <>
                <Jodit
                    content={content}
                    onContentChange={onContentChange}
                    mode={mode}
                />
            </>
        );
    };


    const handleOpenPreview = () => {
        setOpen(true);
    };

    const handleClosePreview = () => {
        setOpen(false);
    };



    return (
        <>
            <FormikProvider value={formik} >
                <Form noValidate autoComplete="off" style={{ width: "100%" }}>
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
                                        <Editor content={content} onContentChange={handleContentChange}
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
                                    onClick={handleOpenPreview}

                                >
                                    Preview
                                </Button>
                                {
                                    data?.user ? (

                                        <LoadingButton fullWidth variant="contained" size="large"
                                            onClick={HandlePushPost}
                                        >
                                            Post
                                        </LoadingButton>
                                    ) : (
                                        <Link href="/auth/login"
                                            style={{
                                                width: "100%",
                                                alignSelf: "flex-end",
                                            }}
                                            passHref
                                        >
                                            <IconButton
                                                variant="contained"
                                                color="secondary"
                                                style={{
                                                    width: "100%",
                                                    alignSelf: "flex-end",
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    gap: '0.5rem',
                                                }}
                                            >
                                                <Icon icon="uil:lock" fontSize={24} />
                                                Connectez vous pour pubier

                                            </IconButton>
                                        </Link>
                                    )
                                }
                            </Stack>
                        </Grid>
                    </Grid>
                </Form>
            </FormikProvider>
            <BlogNewPostPreview formik={formik} title={title} description={description} content={content} openPreview={open} onClosePreview={handleClosePreview} />
        </>
    )
}

export default NewPostForm