/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import React from 'react';
import PieChartWithDifferentArcs from '../components/Grafico';
import EstiloApp from '../styles/style';

const Relatorio = (props) => {

  const { selectedCard } = props.route.params;

  return (
    <View style={EstiloApp.background}>
      <PieChartWithDifferentArcs ratings={selectedCard.ratings}/>
    </View>
  );
};

export default Relatorio;
