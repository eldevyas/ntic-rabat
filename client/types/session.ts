export type SessionType = {
    user: {
        name: String;
        email: String;
        id: Number;
        username: String;
        token: String;
        email_verified: Boolean;
        role: "stagiaire" | "admin";
    },
    expires: String
}