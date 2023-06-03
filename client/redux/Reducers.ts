import { GET_ALL_USERS } from "./Actions";

// Define the initial state without fetching the users
const initialState = {
    users: [],
    search: [],
};


// Reducer function
export const Reducers = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};


