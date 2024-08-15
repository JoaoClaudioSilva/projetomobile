/* eslint-disable prettier/prettier */
const validate = require('../scripts/validate');

import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Botao from '../components/Botao';
import EstiloApp from '../styles/style';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth_mod } from '../firebase/config';



const Login = (props) => {


    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const goTo = (Tela) => {
        props.navigation.navigate(Tela);
    };

    const handlePress = () => {
        setEmail('');
        setPassword('');
        signInWithEmailAndPassword(auth_mod, email, password)
            .then((userCredentials) => {
                console.log(userCredentials);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <ScrollView style={EstiloApp.background}>
            <View style={EstiloApp.container}>

                <View name="Titulo">
                    <Text style={[EstiloApp.text, EstiloApp.titulo]}>Satisfying.you</Text>
                </View>

                <View name="Input">
                    <Text style={EstiloApp.text}>Email</Text>
                    <TextInput style={EstiloApp.inputText} value={email} onChangeText={setEmail} label="E-mail" placeholder='usuario@dominio.com'/>


                    <Text style={EstiloLogin.text}>Senha</Text>
                    <TextInput style={EstiloApp.inputText} value={password} secureTextEntry={true} onChangeText={setPassword} label="Senha" placeholder='••••••••'/>

                    <Botao cor="#37BD6D" tamanho={34} conteudo="Entrar" onPress={ handlePress }/>
                </View>

                <View name="Extra">
                    <Botao cor="#419ED7" tamanho={22} conteudo="Criar minha conta" onPress={ () => props.navigation.navigate('Nova Conta') }/>
                    <Botao cor="#B5C7D1" tamanho={22} conteudo="Esqueci minha senha" onPress={ () => {sendPasswordResetEmail(auth_mod, email)}}/>
                </View>

            </View>
        </ScrollView>
    );
};
const EstiloLogin = StyleSheet.create({
    alert: {
        color: '#FD7979',
        fontSize: 16,
        marginTop: 10,
    },
});

export default Login;
