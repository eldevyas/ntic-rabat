import { isString } from 'lodash';
import PropTypes from 'prop-types';
// material
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { alpha, styled } from '@mui/material';
import { Box, Button, Container, Typography, DialogActions } from '@mui/material';
//
import DialogAnimate from './utils/DialogAnimate';
import Markdown from './utils/Markdown';
import Scrollbar from './utils/ScrollBar';
import EmptyContent from './utils/EmptyContent';
import './test.scss';

// ----------------------------------------------------------------------

const HeroStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',

}));

// ----------------------------------------------------------------------

PreviewHero.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string
};

function PreviewHero({ title, cover }: any) {
    return (
        <HeroStyle >
            <img src={`${cover}`} />
            <Typography variant="h2" component="h1">
                {title}
            </Typography>
        </HeroStyle>
    );
}

BlogNewPostPreview.propTypes = {
    formik: PropTypes.object.isRequired,
    openPreview: PropTypes.bool,
    onClosePreview: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.any
};

export default function BlogNewPostPreview({ formik, openPreview, onClosePreview, title, description, content }: any) {
    const { values, handleSubmit, isSubmitting, isValid } = formik;
    // const { title, description, content } = values;
    const cover = isString(values.cover) ? values.cover : values.cover?.preview;
    const hasContent = title || description || content || cover;
    const hasHero = title || cover;

    return (
        <DialogAnimate

            open={openPreview} onClose={onClosePreview}>
            <DialogActions sx={{ py: 2, px: 3, }}>
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                    Preview Post
                </Typography>
                <Button onClick={onClosePreview}>Cancel</Button>
                <LoadingButton
                    type="submit"
                    variant="contained"
                    disabled={!isValid}
                    loading={isSubmitting}
                    onClick={handleSubmit}
                >
                    Post
                </LoadingButton>
            </DialogActions>

            {hasContent ? (
                <Scrollbar>
                    {hasHero && <PreviewHero title={title} cover={cover} />}
                    <Container

                    >
                        <Box sx={{ mt: 5 }}>
                            <Typography variant="h6" sx={{ mb: 5, minHeight: '100%', height: '100%' }}>
                                {description}
                            </Typography>
                            <Markdown children={content}
                                sx={{
                                    minHeight: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    // zIndex: 1000,
                                    '& img': {
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                    },
                                    '& p': {
                                        fontSize: '1.2rem',
                                        lineHeight: '1.5',
                                        letterSpacing: '0.00938em',
                                        color: '#fff',
                                    },
                                    '& h1': {
                                        fontSize: '2.5rem',
                                        lineHeight: '1.5',
                                        letterSpacing: '0.00938em',
                                        color: '#fff',
                                    },
                                    '& h2': {
                                        fontSize: '2rem',
                                        lineHeight: '1.5',
                                        letterSpacing: '0.00938em',
                                        color: '#fff',
                                    },
                                    '& ol': {
                                        fontSize: '1.2rem',
                                        lineHeight: '1.5',
                                        letterSpacing: '0.00938em',
                                        color: '#fff',
                                        listStyleType: 'decimal',
                                    },
                                    '& ul': {
                                        fontSize: '1.2rem',
                                        lineHeight: '1.5',
                                        letterSpacing: '0.00938em',
                                        color: '#fff',
                                        listStyleType: 'disc',
                                    },
                                    '& li': {
                                        fontSize: '1.2rem',
                                        lineHeight: '1.5',
                                        letterSpacing: '0.00938em',
                                        color: '#fff',
                                        // listStyleType: 'disc',
                                    },
                                }}
                            />
                        </Box>
                    </Container>
                </Scrollbar>
            ) : (
                <EmptyContent title="Empty content" />
            )
            }
        </DialogAnimate >
    );
}
