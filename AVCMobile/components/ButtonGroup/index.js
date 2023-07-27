// components/ButtonGroup.js
import React from 'react';
import { View } from 'react-native';
import useButtonHook from '../../hooks/useButtonHook';
import { Text } from 'react-native';
import styles from './styles';
import Button from '../Button';

const ButtonGroup = () => {
  const { selectedValues, sum, handleButtonPress } = useButtonHook();

  return (
    <View style={styles.container}>
        <View style={styles.buttonRow}>
            <Button text="Alerta" onPress={() => handleButtonPress(1)}/>
            <Button text="Sonolento, mas despertavel com minima estimulação" onPress={() =>handleButtonPress(2)}/>
        </View>
        <View style={styles.buttonRow}>
            <Button text="Sonolento, requer estimulação repetida para responder" onPress={() =>handleButtonPress(3)}/>
            <Button text="Coma" onPress={() => handleButtonPress(4)}/>
        </View>
      <View>
        <Text>Sum: {sum}</Text>
      </View>
    </View>
  );
};

export default ButtonGroup;