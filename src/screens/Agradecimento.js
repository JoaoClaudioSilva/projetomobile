/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EstiloApp from '../styles/style'

const Agradecimento = () => {
  return (
    <View style={EstiloApp.background}>
      <Text style={EstiloApp.textPrincipal}>Obrigado por participar da pesquisa!</Text>
      <Text style={EstiloApp.textPrincipal}>Aguardamos você no próximo ano!</Text>
    </View>
  )
}

export default Agradecimento
