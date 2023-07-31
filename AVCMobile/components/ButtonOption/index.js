import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonOption = ({ title, number,  onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // alignItems: 'center',
    padding: 10,
    margin: 10,
    width: 166,
    height: 129,
    backgroundColor: '#249E96',
    borderRadius: 10,
  },
  numberContainer: {
    position: 'absolute',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 31,
    textAlign: 'start',
    left: 5,
    backgroundColor: 'transparent',
  },
  numberText: {
    textAlign: 'center',
    fontSize: 31,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ButtonOption;
