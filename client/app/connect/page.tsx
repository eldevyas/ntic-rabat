"use client";
import React, { useEffect } from "react";
import Flux from "./flux/Flux";
import { Provider } from "react-redux";
import Store from "@/redux/Store";
import { Reducers } from "@/redux/Reducers";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Page() {
    // const store = configureStore({
    //     reducer: Reducers,
    // });
    useEffect(() => {
        axios
            .get(`${process.env.SERVER_PUBLIC_API_URL}/users`)
            .then((response) => {
                const users = response.data.users;
                Store.dispatch({
                    type: "GET_ALL_USERS",
                    payload: users,
                });
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return (
        <Provider store={Store}>
            <Flux />
        </Provider>
    );
}
