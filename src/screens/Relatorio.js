/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import React from 'react';
import PieChartWithDifferentArcs from '../components/Grafico';
import EstiloApp from '../styles/style';
import { useSelector } from 'react-redux'

const Relatorio = (props) => {


  return (
    <View style={EstiloApp.background}>
      <PieChartWithDifferentArcs ratings={useSelector((state) => state.selected_card.ratings)}/>
    </View>
  );
};

export default Relatorio;
