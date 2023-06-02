export type PostType = {
    Id: string;
    Banner: string;
    Author: {
        Name: string;
        Avatar: string;
    };
    Date: string;
    Title: string;
    Likes: number;
    Comments: number;
};

export type PostsType = PostType[];
