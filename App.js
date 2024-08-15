/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import Home from './src/screens/Home';
import Modificar from './src/screens/ModificarPesquisa';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import NovaPesquisa from './src/screens/NovaPesquisa';
import NovaConta from './src/screens/NovaConta';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="Nova Pesquisa" component={NovaPesquisa} options={{title: 'Nova Pesquisa', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
            <Stack.Screen name="Acoes Pesquisa" component={AcoesPesquisa} options={{title: 'Ações Pesquisa', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
            <Stack.Screen name="Login" component={Login} options={{title: 'Login', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
            <Stack.Screen name="Nova Conta" component={NovaConta} options={{title: 'Nova Conta', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
            <Stack.Screen name="Modificar Pesquisa" component={Modificar} options={{title: 'Modificar Pesquisa', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        </Stack.Navigator>
    );
};


const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Home'}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
