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
      <Text style={EstiloApp.textPrincipal}>O que você achou do {selectedCard.nome}?</Text>
      <View style={EstiloApp.menu}>
        <Opcao imagem={Icons.Pessimo} onPress={() => model.incPesquisa(selectedCard.id, 0)}/>
        <Opcao imagem={Icons.Ruim} onPress={() => model.incPesquisa(selectedCard.id, 1)}/>
        <Opcao imagem={Icons.Neutro} onPress={() => model.incPesquisa(selectedCard.id, 2)}/>
        <Opcao imagem={Icons.Bom} onPress={() => model.incPesquisa(selectedCard.id, 3)}/>
        <Opcao imagem={Icons.Excelente} onPress={() => model.incPesquisa(selectedCard.id, 4)}/>
      </View>
    </View>
  );
};

export default ColetaDados