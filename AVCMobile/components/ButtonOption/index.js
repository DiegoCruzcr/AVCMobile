import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ButtonOption = ({ title, number, onPress, questions, hasNT, lastIndex}) => {
  const [numberText, setNumberText] = useState(null);
 

  useEffect(() => {
    if (hasNT) {
      if (number === lastIndex) {
        setNumberText("NT");
      } else {
        setNumberText(number);
      }
    } else { 
      setNumberText(number);
    }
  }, [number, questions, hasNT]);

  return (
    <TouchableOpacity style={questions === false ? styles.buttonContainer : styles.buttonContainerSixRows} onPress={onPress}>
      <View style={styles.numberContainer}>
        <Text style={[styles.numberText, hasNT ? {fontSize: 25} : {fontSize:30}]}>{numberText}</Text>
      </View>
      <Text style={[styles.buttonText, hasNT === true ? {paddingLeft: 60} : {paddingLeft: 50}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOption;