import React from "react";
import { View, Text } from 'react-native';
import styles from "./styles";
import {  DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Fontisto';

const MyDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.drawerContainer}>
            <View style={styles.drawerTitleContainer}>
                <Icon name="close-a" size={15} color={'#fff'} style={styles.icon} onPress={props.navigation.closeDrawer}></Icon>
                <Text style={styles.drawerTitle}>Etapas</Text>
            </View>
            <DrawerItemList {...props} style={styles.drawerTeste}/>  
        </DrawerContentScrollView>
    )
}

export default MyDrawer;