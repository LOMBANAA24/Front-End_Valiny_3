// components/Main/Home/Form.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import colors from '../../../constants/colors';

const CameraView = ({ onScan }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    onScan(data);
  };

  if (hasPermission === null) {
    return <View />; // Mostrar un indicador de carga mientras se solicita el permiso
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.camera}
      >
        <View style={styles.topContent}>
          <Text style={styles.centerText}>Alinee el código QR dentro del marco</Text>
        </View>
      </BarCodeScanner>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    backgroundColor: colors.lightGray, // Use lightGray background
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 25, // Set border radius
    borderWidth: 2, // Add border
    borderColor: colors.gray, // Use gray border color
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add semi-transparent background
    padding: 20, // Add padding
  },
  centerText: {
    textAlign: 'center',
    padding: 16,
    fontSize: 16,
    color: colors.white, // Use white text color
  },
});

export default CameraView;
