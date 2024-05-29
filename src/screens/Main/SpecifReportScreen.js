//screens/ Main/ SpecifReportScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ReportChart from '../../components/Main/SpecifReport/ReportChart';

const SpecifReportScreen = () => {
  const navigation = useNavigation();

  // Ejemplo de datos para el gráfico
  const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reporte Específico</Text>
      <ReportChart data={data} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default SpecifReportScreen;
