/* eslint-disable prettier/prettier */
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Opcao from '../components/Opcao';
import * as Icons from '../icons/icons';
import EstiloApp from '../styles/style';

const AcoesPesquisa = (props) => {

    const handlePress = (titulo) => {
        props.navigation.navigate(titulo);
    };

    return (
        <View style={EstiloApp.menu}>
            <Opcao imagem={Icons.Modificar} descricao="Modificar" onPress={() => handlePress('Modificar Pesquisa')} />
            <Opcao imagem={Icons.Coletar} descricao="Coletar dados" onPress={() => handlePress('Coletar Dados')}/>
            <Opcao imagem={Icons.Relatorio} descricao="Relatório" onPress={() => handlePress('Relatório')} />
        </View>
    );
};



export default AcoesPesquisa;
