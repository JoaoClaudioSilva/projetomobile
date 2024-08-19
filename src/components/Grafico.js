/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { PieChart } from "react-native-svg-charts";

class PieChartWithDifferentArcs extends React.PureComponent {
  renderLegend = () => {
    const { ratings } = this.props;
    const data = [
      { key: "Péssimo", svg: { fill: "#D71616" } },
      { key: "Ruim", svg: { fill: "#FF360A" } },
      { key: "Neutro", svg: { fill: "#FFC632" } },
      { key: "Bom", svg: { fill: "#37BD6D" } },
      { key: "Excelente", svg: { fill: "#25BC22" } },
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
        svg: { fill: "#D71616" },
        arc: { outerRadius: "80%", cornerRadius: 0 },
      },
      {
        key: "Ruim",
        value: ratings[1],
        svg: { fill: "#FF360A" },
        arc: { outerRadius: "80%" },
      },
      {
        key: "Neutro",
        value: ratings[2],
        svg: { fill: "#FFC632" },
        arc: { outerRadius: "80%" },
      },
      {
        key: "Bom",
        value: ratings[3],
        svg: { fill: "#37BD6D" },
        arc: { outerRadius: "80%" },
      },
      {
        key: "Excelente",
        value: ratings[4],
        svg: { fill: "#25BC22" },
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
  },
});

export default PieChartWithDifferentArcs;
