import { useRouter } from "next/router";

const UserProfile = (props: any) => {
    const user = props.user;
    const router = useRouter();

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username:{user.name}</p>
        </div>
    );
};

export default UserProfile;

export const getServerSideProps = ({ params: string }) => {
    return { props: { username: params.username } };
};
