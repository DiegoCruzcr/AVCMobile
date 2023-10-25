import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Dropdown = ({dados, disabled, handleClick}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('Selecione uma opção');

    useEffect(() => {
        if(disabled) {
          setIsOpen(false);
        }
      }, [disabled]);
    
      const toggleDropdown = () => {
        if (!disabled) {
          setIsOpen(!isOpen);
        }
      };

    const toggleButton = (value) => {
        setValue(value)
        setIsOpen(false)
        if (handleClick) {  
            if (value === 'Selecione uma opção') {
                value = '';
            }
            handleClick(value)
        }
    }
    return(
        <>
            <View style={[styles.container, disabled ? styles.disabled : '']}>
            <TouchableOpacity style={isOpen ? styles.dropdownOpen : styles.dropdown} onPress={toggleDropdown} disabled={disabled}>
                <Text style={styles.buttonText}>{value}</Text>
                <Icon name={isOpen ? 'caret-up' : 'caret-down'} size={20} color={'#fff'} />
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownContent}>
                    {dados.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => toggleButton(item)} value={item}>
                            <Text style={styles.itemText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            </View>
        </>
    )
}

export default Dropdown;