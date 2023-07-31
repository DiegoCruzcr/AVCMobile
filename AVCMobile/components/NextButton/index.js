import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NextButton = () => {
  return (
    <TouchableOpacity style={styles.nextButton} onPress={() => handleButtonPress}>
    <View style={styles.next_button}>
      <Text style={styles.nextButtonText}>Next</Text>
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    next_button: {
        backgroundColor: '#249E96',
        alignItems: 'right',
        justifyContent: 'flex-end',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
        borderRadius: 8,
        // marginHorizontal: 5,
        },
    nextButton: {
        backgroundColor: '#249E96',
        left: 110,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 20,
        },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        },
});

export default NextButton;
