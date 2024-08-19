/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Temp from './Temp';

const Drawer = createDrawerNavigator();

const DrawerWrapper = ({ children }) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Perfil" component={Temp} />
            <Drawer.Screen name="Sair" component={Temp} />
        </Drawer.Navigator>
    );
};

export default DrawerWrapper;
