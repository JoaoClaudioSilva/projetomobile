/* eslint-disable prettier/prettier */
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const Botao = (props) => {

    const { conteudo, cor, tamanho, onPress } = props;

    const EstiloBotao = StyleSheet.create({
        botao: {
            marginVertical: 5,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: cor,

        },
        texto: {
            color: '#E6E8E6',
            textAlign: 'center',
            fontSize: tamanho,
        },
    });

    return (
        <TouchableOpacity style={EstiloBotao.botao} onPress={onPress}>
            <Text style={EstiloBotao.texto}>{conteudo}</Text>
        </TouchableOpacity>
    );
};

export default Botao;
