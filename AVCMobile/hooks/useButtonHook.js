import { useState } from 'react';
import { grade } from '../pages/App';

const useButtonHook = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [sum, setSum] = useState(0);
  const [isPressed, setPressed] = useState(null);

  const handleButtonPress = (value, gradeIndex) => {
    setPressed(value);
    if (value == 5) {
      value = 0;
    }
    setSelectedValue(value);
    setSum(value); 
    grade[gradeIndex] = value;
  };

  return { selectedValue, sum, handleButtonPress, isPressed };
};

export default useButtonHook;

