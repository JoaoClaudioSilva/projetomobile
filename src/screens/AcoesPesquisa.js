/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Opcao from '../components/Opcao';
import * as Icons from '../icons/icons';

const AcoesPesquisa = (props) => {
    const { selectedCard } = props.route.params;

    const handlePress = () => {
        props.navigation.navigate('Modificar Pesquisa', { selectedCard });
    };

    return (
        <View style={estilo.container}>
            <Opcao imagem={Icons.Modificar} descricao="Modificar" onPress={ handlePress }/>
            <Opcao imagem={Icons.Coletar} descricao="Coletar dados"/>
            <Opcao imagem={Icons.Relatorio} descricao="Relatório"/>
        </View>
    );
};

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
});

export default AcoesPesquisa;

