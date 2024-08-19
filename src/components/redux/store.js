/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import selectedCardSlice from "./selectedCardSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
    reducer: {
        //Estados Globais
        selected_card: selectedCardSlice,
        login: loginSlice
    }
})