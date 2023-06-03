export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = () => (dispatch:any) => {
    dispatch({
        type:GET_ALL_USERS, 
    });
};