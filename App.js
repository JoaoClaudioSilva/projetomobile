/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

import React from 'react';

import Home from './src/screens/Home';
import Modificar from './src/screens/ModificarPesquisa';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import NovaPesquisa from './src/screens/NovaPesquisa';
import NovaConta from './src/screens/NovaConta';
import Login from './src/screens/Login';
import Relatorio from './src/screens/Relatorio';
import ColetaDados from './src/screens/ColetaDados';
import Agradecimento from './src/screens/Agradecimento';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Ionicons name="menu" size={24} color="black" style={{ marginLeft: 15 }} />
                    </TouchableOpacity>
                ),
            }}
        />
        <Stack.Screen name="Nova Pesquisa" component={NovaPesquisa} options={{title: 'Nova Pesquisa', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        <Stack.Screen name="Acoes Pesquisa" component={AcoesPesquisa} options={{title: 'Ações Pesquisa', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        <Stack.Screen name="Nova Conta" component={NovaConta} options={{title: 'Nova Conta', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        <Stack.Screen name="Modificar Pesquisa" component={Modificar} options={{title: 'Modificar Pesquisa', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        <Stack.Screen name="Relatório" component={Relatorio} options={{title: 'Relatório', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        <Stack.Screen name="Coletar Dados" component={ColetaDados} options={{title: 'Coletar Dados', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
        <Stack.Screen name="Agradecimento" component={Agradecimento} options={{title: 'Agradecimento', headerStyle: { backgroundColor: '#2B1D62' }, headerTintColor: 'white' }}/>
    </Stack.Navigator>
);

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="MainStack">
                <Drawer.Screen name="MainStack" component={MainStack} options={{ headerShown: false }} />
                <Drawer.Screen name="Perfil" component={Login} />
                <Drawer.Screen name="Sair" component={Login} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
