// screens/Main/HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Main/Home/Header';
import CameraView from '../../components/Main/Home/CameraView';
import Form from '../../components/Main/Home/Form';
import colors from '../../constants/colors';

const HomeScreen = () => {
  const [studentData, setStudentData] = useState(null);
  const navigation = useNavigation();

  const handleScan = (result) => {
    setStudentData({
      name: result ? result : '---', // Set name to '---' if null
      document: result,
      course: '---', // Set course to '---' if null
      session: '---', // Set session to '---' if null
    });
  };

  const handleFinalize = (data) => {
    console.log('Final data:', data);
    setStudentData(null);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        {!studentData && <CameraView onScan={handleScan} />}
        {studentData && (
          <Form studentData={studentData} onFinalize={handleFinalize} />
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Report')}>Reportes</Text>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('SpecifReport')}>Reporte Específico</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white, // Use white background
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: colors.blue, // Use blue color for buttons
  },
});

export default HomeScreen;
