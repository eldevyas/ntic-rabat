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
import Link from "next/link";

const CardVariantOne = ({ PostData }: { PostData: PostType }) => {
    const P = PostData;
    const formatDate = (createdAt: any) => {
        const ONE_MINUTE = 60 * 1000; // milliseconds
        const ONE_HOUR = 60 * ONE_MINUTE;
        const ONE_DAY = 24 * ONE_HOUR;
        const ONE_WEEK = 7 * ONE_DAY;

        const currentTime = new Date().getTime();
        const createdTime = new Date(createdAt).getTime();
        const elapsedTime = currentTime - createdTime;

        if (elapsedTime < ONE_HOUR) {
            const minutes = Math.floor(elapsedTime / ONE_MINUTE);
            return `${minutes} mins ago`;
        } else if (elapsedTime < ONE_DAY) {
            const hours = Math.floor(elapsedTime / ONE_HOUR);
            return `${hours} hrs ago`;
        } else if (elapsedTime < ONE_WEEK) {
            const days = Math.floor(elapsedTime / ONE_DAY);
            return `${days} days ago`;
        } else {
            const date = new Date(createdAt);
            return date.toDateString();
        }
    };
    const humanDate = formatDate(P.created_at);
    return (
        <Link href={`/connect/posts/${P.id}`}>
            <Card variant="outlined"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    cursor: "pointer",
                }}
            >
                <CardMedia component="img" src={P.cover} alt="Post Banner"
                    style={{ height: "200px" }}
                />
                <CardHeader
                    avatar={<Avatar src={P.user.avatar} alt={P.user.name} />}
                    title={P.user.name}
                />
                <CardContent
                    style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                    <Typography variant="body2" color="textSecondary">
                        {humanDate}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {P.title}
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
                                {P.likes.length}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ChatIcon color="primary" fontSize="small" />
                            <Typography variant="body2" color="textSecondary">
                                {P.comments.length}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Link>

    );
};

const CardVariantTwo = ({ PostData }: { PostData: PostType }) => {
    const P = PostData;
    const formatDate = (createdAt: any) => {
        const ONE_MINUTE = 60 * 1000; // milliseconds
        const ONE_HOUR = 60 * ONE_MINUTE;
        const ONE_DAY = 24 * ONE_HOUR;
        const ONE_WEEK = 7 * ONE_DAY;

        const currentTime = new Date().getTime();
        const createdTime = new Date(createdAt).getTime();
        const elapsedTime = currentTime - createdTime;

        if (elapsedTime < ONE_HOUR) {
            const minutes = Math.floor(elapsedTime / ONE_MINUTE);
            return `${minutes} mins ago`;
        } else if (elapsedTime < ONE_DAY) {
            const hours = Math.floor(elapsedTime / ONE_HOUR);
            return `${hours} hrs ago`;
        } else if (elapsedTime < ONE_WEEK) {
            const days = Math.floor(elapsedTime / ONE_DAY);
            return `${days} days ago`;
        } else {
            const date = new Date(createdAt);
            return date.toDateString();
        }
    };
    const humanDate = formatDate(P.created_at);
    return (
        <Card variant="outlined">
            <CardHeader

                avatar={<Avatar src={P.user.avatar} alt={P.user.name} />}
                title={P.user.name}
            />
            <CardMedia component="img" src={P.cover} alt="Post Banner"
                height="200px"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {humanDate}
                </Typography>
                <Typography variant="h6" component="div">
                    {P.title}
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
                            {P.likes.length}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ChatIcon color="primary" fontSize="small" />
                        <Typography variant="body2" color="textSecondary">
                            {P.comments.length}
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
