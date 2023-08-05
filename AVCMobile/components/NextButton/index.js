import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const NextButton = () => {
  return (
    <>
    <TouchableOpacity style={styles.nextButton} onPress={() => handleButtonPress}>
    <View style={styles.next_button}>
      <Text style={styles.nextButtonText}>Next</Text>
    </View>
  </TouchableOpacity>
  </>
  );
};



export default NextButton;
