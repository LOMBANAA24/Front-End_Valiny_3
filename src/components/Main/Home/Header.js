// components/Main/Home/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import colors from '../../../constants/colors';

const Header = () => (
  <View>
    <Appbar.Header>
      <Appbar.Content title="Lectura Código QR" />
    </Appbar.Header>
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>Entrada Comedor Escolar</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  subtitleContainer: {
    backgroundColor: colors.gray,
    padding: 10,
    alignItems: 'center',
  },
  subtitle: {
    color: colors.black,
    fontSize: 16,
  },
});

export default Header;
