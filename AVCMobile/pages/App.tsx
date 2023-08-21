import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Etapa from './Quiz/const';
import * as pages from './Quiz'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from '../components/MyDrawer';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmData from './ConfirmData';
import UserData from './UserData';
import CheckUsers from './CheckUsers';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export const grade: (number | null)[] = Array.from({ length: 15 }, () => null);



function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='home'>
            <Stack.Screen name='home' component={Home}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='quiz' component={QuizPage}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='confirmData' component={ConfirmData}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='userBD' component={CheckUsers}
             options={{ headerShown: true, headerTitle: "Relatórios", headerStyle: {
              backgroundColor: '#24464F',
            },
            headerTintColor: '#fff', }}></Stack.Screen>
            <Stack.Screen name='userData' component={UserData}
              options={{ headerShown: true, headerTitle: "Dados do Usuário", headerStyle: {
                backgroundColor: '#24464F',
              },
              headerTintColor: '#fff', }}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
  );
}

function QuizPage() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MyDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24464F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "rgba(255, 255, 255, 0.7)"
      }}>
      {
        pages.Etapas.map((etapa, index) => (
          <Drawer.Screen
            key={index}
            name={Etapa[index].description }
            component={etapa}
            options={{
              headerTitleStyle: {
                fontSize: 16
              }
            }} ></Drawer.Screen>
        ))
      }
    </Drawer.Navigator>
  );
};



export default App;