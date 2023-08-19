// hooks/useButtonHook.js
import { useState } from 'react';
import { grade } from '../pages/App';

const useButtonHook = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [sum, setSum] = useState(0);

  const handleButtonPress = (value, gradeIndex) => {
    setSelectedValue(value);
    setSum(value); // Set the sum to the selected value
    grade[gradeIndex] = value;
  };

  return { selectedValue, sum, handleButtonPress };
};

export default useButtonHook;

