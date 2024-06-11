//navigation/stack/DetailsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Main/HomeScreen';
import ReportScreen from '../../screens/Main/ReportScreen';
import SpecifReportScreen from '../../screens/Main/SpecifReportScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
    <Stack.Screen name="Report" component={ReportScreen} options={{ title: 'Reportes' }} />
    <Stack.Screen name="SpecifReport" component={SpecifReportScreen} options={{ title: 'Reporte Específico' }} />
  </Stack.Navigator>
);

export default DetaisStack;
