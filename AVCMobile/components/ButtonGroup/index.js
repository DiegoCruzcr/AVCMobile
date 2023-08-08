// components/ButtonGroup.js
import React from 'react';
import { View } from 'react-native';
import useButtonHook from '../../hooks/useButtonHook';
import { Text } from 'react-native';
import styles from './styles';
import ButtonOption from '../ButtonOption';

const ButtonGroup = ({questions}) => {
  const { selectedValues, sum, handleButtonPress } = useButtonHook();

  return (
    <View style={styles.container}>
        <View style={styles.buttonRow}>
          {questions.map((question, index) => (
            <ButtonOption 
              key={index}
              title={question}
              number={index}
              onPress={() => handleButtonPress(index)}
            />
          ))}
        </View>
      <View style={styles.buttonSum}>
        <Text style={styles.buttonSum}>Sum: {sum}</Text>
      </View>
    </View>
  );
};

export default ButtonGroup;