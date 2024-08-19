/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit/react";

const initialValues = {
  email: null,
  senha: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    //reducers são funcões que recebem uma action. podendo alterar os valores
    reducers: {
      reducerSetLoginSlice: (state, action) => {
            state.email = action.payload.email,
            state.senha = action.payload.senha
        }
    }
})

export const { reducerSetLoginSlice } = loginSlice.actions

export default loginSlice.reducer