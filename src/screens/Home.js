/* eslint-disable prettier/prettier */
import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';
import Botao from '../components/Botao';
import EstiloApp from '../styles/style';
import Card from '../components/Card';
import * as Icons from '../icons/icons';
import { useState, useEffect } from 'react';

import model from '../firebase/model';

import { Searchbar } from 'react-native-paper';

import { useDispatch } from 'react-redux'
import { reducerSetSelectedCard } from '../components/redux/selectedCardSlice'
import { useFocusEffect } from '@react-navigation/native';

const Home = (props) => {

    const [cards, setCards] = useState([]);

    const dispatch = useDispatch()

    const goTo = (Tela) => {
        props.navigation.navigate(Tela);
    };

    const handlePress = (pesquisa) => {
        dispatch(reducerSetSelectedCard({id: pesquisa.id, nome: pesquisa.nome, data: JSON.stringify(pesquisa.data), imagem: pesquisa.url, ratings: pesquisa.ratings}))
        props.navigation.navigate('Acoes Pesquisa');
    };

    const getCards = async () => {
        const pesquisas = await model.getPesquisas();
        const cardElements = pesquisas.map((pesquisa, index) => (
            <Card
                key={index}
                nome={pesquisa.nome}
                data={pesquisa.data}
                imagem={pesquisa.url}
                onPress={() => handlePress(pesquisa)}
            />
        ));
        setCards(cardElements);
    };

    useFocusEffect(
        React.useCallback(() => {
            getCards();
        }, [])
    );

    return (
        <View style={EstiloApp.background}>
            <View style={EstiloApp.container}>
                <Searchbar style={EstiloApp.inputText} placeholder="Insira o termo de busca..." mode="view"/>
            </View>

            <View style={estilo.cards}>
                <ScrollView horizontal>
                    {cards}
                </ScrollView>
            </View>


            <View style={EstiloApp.container}>
                <Botao cor="#37BD6D" tamanho={34} conteudo="NOVA PESQUISA" onPress={ () => goTo('Nova Pesquisa') }/>
            </View>
        </View>
    );
};

const estilo = StyleSheet.create({
    cards: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Home;
