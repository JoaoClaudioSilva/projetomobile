/* eslint-disable prettier/prettier */
import { Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import React from 'react';

const Card = (props) => {

    const { nome, data, imagem, onPress } = props;

    let Data = new Date(data.seconds * 1000);

    const day = String(Data.getUTCDate()).padStart(2, '0');
    const month = String(Data.getUTCMonth() + 1).padStart(2, '0');
    const year = Data.getUTCFullYear();

    const dataFormatada = `${day}/${month}/${year}`;

    return (
        <TouchableOpacity style={EstiloCard.card} onPress={onPress}>
            <Image source={{ uri: imagem }} style={EstiloCard.imagem} />
            <Text style={[EstiloCard.texto, EstiloCard.titulo]}>{nome}</Text>
            <Text style={EstiloCard.texto}>{dataFormatada}</Text>
        </TouchableOpacity>
    );
};

const EstiloCard = StyleSheet.create({
    imagem: {
        width: 150,
        height: 150,
    },
    card: {
        width: 300,
        height: 300,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        margin: 30,
    },

    texto: {
        textAlign: 'center',
    },

    titulo: {
        fontSize: 36,
    },
});

export default Card;
