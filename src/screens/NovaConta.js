/* eslint-disable prettier/prettier */
import { View, StyleSheet, TextInput, Text, ScrollView } from 'react-native';
import Botao from '../components/Botao';
import { useState } from 'react';
import React from 'react';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';


import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth_mod } from '../firebase/config';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#372775',
    },
};


const Registro = (props) => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [repeatPassword, setRepeatPassword] = useState('');

    const cadastrarUsuario = () => {

        setEmail('');
        setPassword('');
        setRepeatPassword('');


        createUserWithEmailAndPassword(auth_mod, email, password)
            .catch((err) => {
                console.log(err);
            });
    };

    return (
       <PaperProvider theme={theme}>
        <ScrollView style={EstiloLogin.background}>
            <View style={EstiloLogin.container}>

                <Text style={EstiloLogin.text}>E-mail</Text>
                <TextInput style={EstiloLogin.inputText} value={email} onChangeText={setEmail} label="E-mail" placeholder='usuario@dominio.com'/>


                <Text style={EstiloLogin.text}>Senha</Text>
                <TextInput style={EstiloLogin.inputText} value={password} secureTextEntry={true} onChangeText={setPassword} label="Senha" placeholder='••••••••'/>

                <Text style={EstiloLogin.text}>Repetir senha</Text>
                <TextInput style={EstiloLogin.inputText} value={repeatPassword} secureTextEntry={true} onChangeText={setRepeatPassword}  placeholder='•••••••••'/>

                <Botao cor="#37BD6D" tamanho={36} conteudo="CADASTRAR" onPress={cadastrarUsuario}/>

            </View>
        </ScrollView>
       </PaperProvider>
    );
};

const EstiloLogin = StyleSheet.create({
    background: {
        backgroundColor: '#372775',
        flex: 1,
    },
    container: {
        alignSelf: 'center',
        width: '70%',
    },
    text: {
        color:'#FFFFFF',
        fontSize: 28,
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 64,
    },
    inputText: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        width: '100%',
        color:'#3F92C5',
    },
    alert: {
        color: '#FD7979',
        fontSize: 16,
        marginTop: 10, // Espaçamento superior para separar do TextInput
    },
});

export default Registro