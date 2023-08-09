import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Etapa from './Quiz/const';
import * as pages from './Quiz/quizPages'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from '../components/MyDrawer';


const Drawer = createDrawerNavigator();

function App() {
  return (

    <NavigationContainer>      
    <Drawer.Navigator 
    drawerContent={(props) => <MyDrawer {...props}/>}
    
    screenOptions={{
          headerStyle: {
            backgroundColor: '#24464F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
      }}> 
      <Drawer.Screen name={Etapa[0].description} component={pages.Etapa1}></Drawer.Screen>
      <Drawer.Screen name={Etapa[1].description} component={pages.Etapa1_1}></Drawer.Screen>
      <Drawer.Screen name={Etapa[2].description} component={pages.Etapa1_2}></Drawer.Screen>
    </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default App;