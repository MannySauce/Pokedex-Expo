import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import axios from "axios";

export default function App() {

  return (
    <View style={styles.container}>
      <Text>¡Bienvenido!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4000f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
