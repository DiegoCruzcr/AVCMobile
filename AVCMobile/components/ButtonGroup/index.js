import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import useButtonHook from '../../hooks/useButtonHook';
import { Text } from 'react-native';
import styles from './styles';
import ButtonOption from '../ButtonOption';

const ButtonGroup = ({questions, hasNT}) => {
  const { selectedValues, sum, handleButtonPress } = useButtonHook();
  const [SixQuestions, setSixQuestions] = useState(false);
  const [lastIndex, setLastIndex] = useState(null);
  useEffect(() => {
    if (questions.length > 4) {
      setSixQuestions(true);
    }
    setLastIndex(questions.length - 1)
  }, [questions])
  
  return (
    <View style={styles.container}>
        <View style={styles.buttonRow}>
          {questions.map((question, index) => (
            <ButtonOption 
              lastIndex={lastIndex}
              hasNT={hasNT}
              questions={SixQuestions}
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