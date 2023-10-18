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
import { Provider } from 'react-redux';
import store from '../redux/store';
import { LoadPage } from './LoadPage';
import FinishPage from './FinishPage';
import ErrorPage from './ErrorPage';
import ComplementUserData from './ComplementUserData';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export const grade: (number | null)[] = Array.from({ length: 15 }, () => null);



function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='home'>
            <Stack.Screen name='home' component={Home}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='quiz' component={QuizPage}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='confirmData' component={ConfirmData}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='loadPage' component={LoadPage}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='finishPage' component={FinishPage}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='errorPage' component={ErrorPage}
              options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='userData' component={UserData}
              options={{ headerShown: true, headerTitle: "Dados do Paciente I", headerStyle: {
                backgroundColor: '#24464F',
              },
              headerTintColor: '#fff', }}></Stack.Screen>
            <Stack.Screen name='complementUserData' component={ComplementUserData}
              options={{ headerShown: true, headerTitle: "Dados do Paciente II", headerStyle: {
                backgroundColor: '#24464F',
              },
              headerTintColor: '#fff', }}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
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
          fontFamily: 'Roboto-Bold',
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
                fontSize: 16,
                fontFamily: 'Roboto-Bold',
              }
            }} ></Drawer.Screen>
        ))
      }
    </Drawer.Navigator>
  );
};



export default App;