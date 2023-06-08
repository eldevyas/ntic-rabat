export type PostType = {
    id: string;
    cover: string;
    user: {
        name: string;
        avatar: string;
        id: string;
        username: string;
    };
    created_at: string;
    updated_at: string;
    title: string;
    likes: any;
    comments: any;
    content: string;
};

export type PostsType = PostType[];
