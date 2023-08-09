import React from "react";
import styles from "./styles";
import { DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Etapa from "../../pages/Quiz/const";

const MyDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props} style={styles.drawerContainer}>
            <DrawerItemList {...props}/>
            
        </DrawerContentScrollView>
    )
}

export default MyDrawer;