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

const RootStyle = styled('div')(({ theme }: any) => ({
    height: 400,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '&:before': {
        top: 0,
        zIndex: 9,
        content: "''",
        width: '100%',
        height: 380,
        borderRadius: '1rem',

        position: 'absolute',
        backgroundColor: alpha(theme.palette.grey[900], 0.72)
    }
}));

const TitleStyle = styled(Typography)(({ theme }: any) => ({
    // top: 0,
    zIndex: 10,
    width: '100%',
    padding: theme.spacing(1),
    color: theme.palette.common.white,

}));
const DescriptionStyle = styled(Typography)(({ theme }: any) => ({
    zIndex: 10,
    width: '100%',
    padding: theme.spacing(1),
    color: theme.palette.common.white,
}));

const FooterStyle = styled('div')(({ theme }: any) => ({
    bottom: "15%",
    zIndex: 10,
    width: '100%',
    display: 'flex',
    // display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        paddingRight: theme.spacing(3)
    },
    // [theme.breakpoints.up('lg')]: {
    //     padding: theme.spacing(10)
    // }
}));

const CoverImgStyle = styled('img')({
    top: 0,
    zIndex: 8,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    maxHeight: 380,
    borderRadius: '1rem'
});
const PostInfos = styled('div')(({ theme }: any) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    gap: '0.7rem',
    paddingLeft: theme.spacing(3),
    maxWidth: '80%',

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
                <DescriptionStyle variant="body1" >
                    {description}
                </DescriptionStyle>
            </PostInfos>

            <FooterStyle>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={user?.name} src={user?.avatar} sx={{ width: 48, height: 48 }} />
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
                            {user?.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.500' }}>
                            {post.created_at}
                        </Typography>
                    </Box>
                </Box>

                <SpeedDial
                    direction={isMobile ? 'up' : 'left'}
                    ariaLabel="Share post"
                    icon={<Icon icon="material-symbols:share" />}
                    sx={{ '& .MuiSpeedDial-fab': { width: 48, height: 48 } }}
                >
                    {SOCIALS.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipPlacement="top"
                            FabProps={{ color: 'default' }}
                        />
                    ))}
                </SpeedDial>
            </FooterStyle>
        </RootStyle >
    );
}
