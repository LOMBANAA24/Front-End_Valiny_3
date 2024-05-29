import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

const ReportChart = ({ data }) => {
  const Labels = ({ x, y, bandwidth, data }) => (
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={y(value) - 10}
        fontSize={14}
        fill="black"
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        {value}
      </Text>
    ))
  );

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 10, bottom: 10 }}
        spacingInner={0.2}
        spacingOuter={0.2}
      >
        <Grid />
        <Labels />
      </BarChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    padding: 20,
    flexDirection: 'row',
  },
  chart: {
    flex: 1,
  },
});

export default ReportChart;
