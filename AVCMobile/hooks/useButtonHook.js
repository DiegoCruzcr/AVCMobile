// hooks/useButtonHook.js
import { useState } from 'react';

const useButtonHook = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [sum, setSum] = useState(0);

  const handleButtonPress = (value) => {
    // Add the selected button value to the array of selectedValues
    setSelectedValues([...selectedValues, value]);

    // Calculate the new sum based on the selectedValues
    const newSum = selectedValues.reduce((acc, val) => acc + val, 0);
    setSum(newSum + value);
  };
  return { selectedValues, sum, handleButtonPress };
};

export default useButtonHook;
