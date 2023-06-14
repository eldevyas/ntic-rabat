import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
// import shareFill from '@iconify/icons-eva/share-fill';
// import twitterFill from '@iconify/icons-eva/twitter-fill';
// import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// material
import { alpha, useTheme, styled } from '@mui/material';
import { Box, Avatar, SpeedDial, Typography, SpeedDialAction, useMediaQuery } from '@mui/material';
// utils

// ----------------------------------------------------------------------

const SOCIALS = [
    {
        name: 'Facebook',
        icon: <Icon icon="eva:facebook-fill" width={20} height={20} color="#1877F2" />
    },
    {
        name: 'Instagram',
        icon: <Icon icon="ri:instagram-fill" width={20} height={20} color="#D7336D" />
    },
    // {
    //     name: 'Linkedin',
    //     icon: <Icon icon={linkedinFill} width={20} height={20} color="#006097" />
    // },
    // {
    //     name: 'Twitter',
    //     icon: <Icon icon={twitterFill} width={20} height={20} color="#1C9CEA" />
    // }
];
const formatDate = (createdAt: any) => {
    // change it to a date in this format , dd , Month , yyyy
    const date = new Date(createdAt);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;


};

const RootStyle = styled('div')(({ theme }: any) => ({
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'initial',
    // padding: '1rem 0 5rem 0',
    borderBottom: `1px dotted  ${theme.palette.divider}`,
    width: '100%',

}));

const TitleStyle = styled(Typography)(({ theme }: any) => ({
    width: '100%',
    textAlign: 'center',
    fontWeight: '700',
    padding: theme.spacing(1),
    color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',

}));
const DescriptionStyle = styled(Typography)(({ theme }: any) => ({
    width: '100%',
    textAlign: 'center',
    fontWeight: '400',
    padding: theme.spacing(1),
    color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',

}));

const FooterStyle = styled('div')(({ theme }: any) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        // paddingRight: theme.spacing(3)
    },
    padding: theme.spacing(4),
    // [theme.breakpoints.up('lg')]: {
    //     padding: theme.spacing(10)
    // }
}));

const CoverImgStyle = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    maxHeight: 380,
    borderRadius: '1rem'
});
const PostInfos = styled('div')(({ theme }: any) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
    // paddingLeft: theme.spacing(3),
    maxWidth: '90%',
    margin: 'auto',

}));

// ----------------------------------------------------------------------

BlogPostHero.propTypes = {
    post: PropTypes.object.isRequired
};

export default function BlogPostHero({ post, ...other }: any) {
    const { cover, title, user, description, createdAt } = post;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <RootStyle {...other}>
            <CoverImgStyle alt="post cover" src={cover} />
            <PostInfos>

                <TitleStyle variant="h3" >
                    {title}
                </TitleStyle>
                <DescriptionStyle variant="h6" >
                    {description}
                </DescriptionStyle>
            </PostInfos>

            <FooterStyle>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <Avatar alt={user?.name} src={user?.avatar} sx={{ width: 48, height: 48 }} />
                    <Box sx={{ ml: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.8rem' }}>
                        <Typography variant="subtitle1" sx={{
                            color: (theme) => theme.palette.mode === 'light' ? 'black' : 'white',

                        }}>
                            {user?.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.500' }}>
                            {
                                formatDate(post.created_at)
                            }
                        </Typography>
                    </Box>
                </Box>
            </FooterStyle>
        </RootStyle >
    );
}
