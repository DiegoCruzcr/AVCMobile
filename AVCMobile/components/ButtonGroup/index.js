// components/ButtonGroup.js
import React from 'react';
import { View } from 'react-native';
import useButtonHook from '../../hooks/useButtonHook';
import { Text } from 'react-native';
import styles from './styles';
import Button from '../Button';
import ButtonOption from '../ButtonOption';

const ButtonGroup = () => {
  const { selectedValues, sum, handleButtonPress } = useButtonHook();

  return (
    <View style={styles.container}>
        <View style={styles.buttonRow}>
            <ButtonOption title="Alerta; reponde com entusiasmo" number={0} onPress={() => handleButtonPress(1)}/>
            <ButtonOption title="Não alerta, mínima estimulação obedece, responde ou reage." number={1} onPress={() => handleButtonPress(1)}/>
            <ButtonOption title="Não alerta, requer repetida estimulação ou estimulação dolorosa" number={2} onPress={() => handleButtonPress(1)}/>
            <ButtonOption title="Responde somente com reflexo motor ou reações autonômicas" number={3} onPress={() => handleButtonPress(1)}/>
        </View>
      <View>
        <Text style={styles.buttonSum}>Sum: {sum}</Text>
      </View>
    </View>
  );
};

export default ButtonGroup;