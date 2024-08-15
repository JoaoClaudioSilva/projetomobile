/* eslint-disable prettier/prettier */
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Botao = (props) => {

    const { imagem, descricao, onPress } = props;

    const EstiloOpcao = StyleSheet.create({

        botao: {
            height: 240,
            width: 270,
            backgroundColor: '#312464',
            justifyContent: 'center',
            alignItems: 'center',
        },

        texto: {
            color: '#FFFFFF',
            fontSize: 20,
        },
    });

    return (
        <TouchableOpacity style={EstiloOpcao.botao} onPress={onPress}>
            <Image style={EstiloOpcao} source={imagem}/>
            <Text style={EstiloOpcao.texto}>{descricao}</Text>
        </TouchableOpacity>
    );
};

export default Botao;
