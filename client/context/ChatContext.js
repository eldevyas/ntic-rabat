import { useSession } from "next-auth/react";
import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const { data } = useSession();
    const INITIALSTATE = {
        chatId: null,
        user: [],
    };
    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    ...state,
                    chatId:
                        data?.user?.username > action.payload.username
                            ? data?.user?.username + action.payload.username
                            : action.payload.username + data?.user?.username,
                    user: action.payload,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(chatReducer, INITIALSTATE);

    return (
        <ChatContext.Provider value={{ userChat: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};
