/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import * as Icons from '../icons/icons' 
import EstiloApp from '../styles/style'
import React from 'react'
import Opcao from '../components/Opcao'
import model from '../firebase/model'

const ColetaDados = (props) => {
  const { selectedCard } = props.route.params;

  return (
    <View style={EstiloApp.background}>
      <Text style={{fontSize: 48, color: '#FFFFFF', textAlign: 'center'}}>O que você achou do {selectedCard.nome}?</Text>
      <View style={EstiloApp.menu}>
        <Opcao imagem={Icons.Pessimo} onPress={() => model.incPesquisa(selectedCard.id, 0)}/>
        <Opcao imagem={Icons.Ruim}/>
        <Opcao imagem={Icons.Neutro}/>
        <Opcao imagem={Icons.Bom}/>
        <Opcao imagem={Icons.Excelente}/>
      </View>
    </View>
  );
};

export default ColetaDados