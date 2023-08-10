import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const NextButton = () => {
  return (
    <>
    <TouchableOpacity style={styles.nextButton}>
      <Text style={styles.nextButtonText}>Next</Text>
    </TouchableOpacity>
  </>
  );
};

export default NextButton;
