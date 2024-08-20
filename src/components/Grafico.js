/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PieChart } from "react-native-svg-charts";

class PieChartWithDifferentArcs extends React.PureComponent {
  renderLegend = () => {
    const { ratings } = this.props;
    const data = [
      { key: "Excelente", svg: { fill: "#F1CE7E" } },
      { key: "Bom", svg: { fill: "#6994FE" } },
      { key: "Neutro", svg: { fill: "#5FCDA4" } },
      { key: "Ruim", svg: { fill: "#EA7288" } },
      { key: "Péssimo", svg: { fill: "#53D8D8" } },
    ];

    return (
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColorBox, { backgroundColor: item.svg.fill }]} />
            <Text style={styles.legendText}>{item.key}</Text>
          </View>
        ))}
      </View>
    );
  };

  render() {
    const { ratings } = this.props;

    const data = [
      {
        key: "Péssimo",
        value: ratings[0],
        svg: { fill: "#53D8D8" },
        arc: { outerRadius: "80%", cornerRadius: 0 },
      },
      {
        key: "Ruim",
        value: ratings[1],
        svg: { fill: "#6994FE" },
        arc: { outerRadius: "80%" },
      },
      {
        key: "Neutro",
        value: ratings[2],
        svg: { fill: "#5FCDA4" },
        arc: { outerRadius: "80%" },
      },
      {
        key: "Bom",
        value: ratings[3],
        svg: { fill: "#EA7288" },
        arc: { outerRadius: "80%" },
      },
      {
        key: "Excelente",
        value: ratings[4],
        svg: { fill: "#F1CE7E" },
        arc: { outerRadius: "80%" },
      },
    ];

    return (
      <View style={styles.container}>
        <PieChart
          style={styles.pieChart}
          innerRadius={20}
          data={data}
        />
        {this.renderLegend()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieChart: {
    height: 500,
    width: 500,
  },
  legendContainer: {
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
    color: '#FFFFFF'
  },
});

export default PieChartWithDifferentArcs;
