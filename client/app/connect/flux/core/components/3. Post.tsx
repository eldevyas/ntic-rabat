import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
import { Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import { PostType } from "@/app/connect/types/Posts.types";

const CardVariantOne = ({ PostData }: { PostData: PostType }) => {
    const P = PostData;
    return (
        <Card variant="outlined">
            <CardMedia component="img" src={P.Banner} alt="Post Banner" />
            <CardHeader
                avatar={<Avatar src={P.Author.Avatar} alt={P.Author.Name} />}
                title={P.Author.Name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {P.Date}
                </Typography>
                <Typography variant="h6" component="div">
                    {P.Title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: 1,
                        }}
                    >
                        <FavoriteIcon color="error" fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                            {P.Likes}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ChatIcon color="primary" fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                            {P.Comments}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

const CardVariantTwo = ({ PostData }: { PostData: PostType }) => {
    const P = PostData;
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={<Avatar src={P.Author.Avatar} alt={P.Author.Name} />}
                title={P.Author.Name}
            />
            <CardMedia component="img" src={P.Banner} alt="Post Banner" />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {P.Date}
                </Typography>
                <Typography variant="h6" component="div">
                    {P.Title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: 1,
                        }}
                    >
                        <FavoriteIcon color="error" fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                            {P.Likes}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ChatIcon color="primary" fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                            {P.Comments}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export { CardVariantOne, CardVariantTwo };

export default function Post({ PostData }: { PostData: PostType }) {
    return <CardVariantOne PostData={PostData} />;
}
