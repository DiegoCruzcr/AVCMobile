import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

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


export default ButtonOption;
