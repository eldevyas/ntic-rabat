import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { styled } from '@mui/material/styles';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';


// import QuillEditor from './QuillEditor';
import {
    Card,
    Grid,
    Stack,
    TextField,
    Typography,
    FormHelperText,
} from '@mui/material';
// import Editor from './JoditEditor';
import React, { useRef, useMemo } from 'react';
import JoditEditor from "jodit-react"
import { Theme, useColorScheme } from '@mui/material';
import './test.scss'
import UploadSingleFile from './UploadImage';





const LabelStyle = styled(Typography)(({ theme }: any) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1)
}));

const NewPostForm = () => {
    const [content, setContent]: any = useState('');
    const Editor = ({ placeholder }: any, props: any) => {
        const { mode } = useColorScheme();
        const editor = useRef(null);


        return (
            <JoditEditor
                ref={editor}
                value={content}
                config={{
                    // if them is dark , set the theme to dark
                    theme: mode == "dark" ? "dark" : "default",
                    buttons: [
                        'source', '|',
                        'bold',
                        'underline',
                        'italic', '|',
                        'ul',
                        'ol', '|',
                        // 'outdent', 'indent',  '|',
                        'font',
                        'fontsize',
                        'brush',
                        // 'paragraph', '|',
                        'image',
                        'video',
                        'table',
                        'link', '|',
                        'align', 'undo', 'redo', '|',
                        'hr',
                        'eraser',
                        // 'copyformat', '|',
                        // 'symbol',
                        // 'fullsize',
                        // 'print',
                        // 'about'
                    ],
                }}
                onBlur={
                    (newContent) => setContent(newContent)
                }

            />
        );
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
            try {
                console.log(values);
            } catch (error) {
                console.error(error);
                setSubmitting(false);
            }
        }
    });
    const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps }: any = formik;

    const handleDrop = useCallback(
        (acceptedFiles: any) => {
            const file = acceptedFiles[0];
            if (file) {
                setFieldValue('cover', {
                    ...file,
                    preview: URL.createObjectURL(file)
                });
            }
        },
        [setFieldValue]
    );
    console.log("content from the form", content)



    return (
        <FormikProvider value={formik} >
            <Form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}  >
                        <Card sx={{ p: 3, width: "100%" }}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label="Post Title"
                                    {...getFieldProps('title')}
                                    error={Boolean(touched.title && errors.title)}
                                    helperText={touched.title && errors.title}
                                />

                                <TextField
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    maxRows={5}
                                    label="Description"
                                    {...getFieldProps('description')}
                                    error={Boolean(touched.description && errors.description)}
                                    helperText={touched.description && errors.description}
                                />

                                <div>
                                    <LabelStyle>Content</LabelStyle>
                                    <Editor />
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
                    </Grid>
                    {/* content preview */}
                </Grid>
            </Form>
        </FormikProvider>
    )
}

export default NewPostForm