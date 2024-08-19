/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit/react";

const initialValues = {
    id: null,
    nome: null,
    data: null,
    imagem: null,
    ratings: null,
}

export const selectedCardSlice = createSlice({
    name: 'selected_card',
    initialState: initialValues,
    //reducers são funcões que recebem uma action. podendo alterar os valores
    reducers: {
        reducerSetSelectedCard: (state, action) => {
            state.id = action.payload.id
            state.nome = action.payload.nome
            state.data = action.payload.data
            state.imagem = action.payload.imagem
            state.ratings = action.payload.ratings
        }
    }
})

export const { reducerSetSelectedCard } = selectedCardSlice.actions

export default selectedCardSlice.reducer