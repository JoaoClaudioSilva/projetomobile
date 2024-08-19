/* eslint-disable prettier/prettier */
import { Image, ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


import model from '../firebase/model';

import React, { useState } from 'react';

import Botao from '../components/Botao';
import EstiloApp from '../styles/style';


const NovaPesquisa = () => {

    const [inputDate, setInputDate] = useState(undefined);
    const [nome, setNome] = useState('');
    const [urlFoto, setUrlFoto] = useState('');
    const [foto, setFoto] = useState();

    const capturarImagem = () => {
        launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
        .then(
            (result) => {
                setUrlFoto(result.assets[0].uri);
                setFoto(result.assets[0]);
            }
        )
        .catch(
            (err) => {
                console.log(JSON.stringify(err));
            }
        );
    };

    return (
        <SafeAreaProvider>
            <ScrollView style={EstiloApp.background}>
                <View style={EstiloApp.container}>

                    <View name="Nome">
                        <Text style={EstiloApp.text}>Nome</Text>
                        <TextInput style={EstiloApp.inputText} onChangeText={(text) => setNome(text)}/>

                        <Text style={EstiloApp.text}>Data</Text>
                        <View style={EstiloApp.inputText}>
                            <DatePickerInput style={EstiloApp.inputText} locale="en" label="Data" value={inputDate} defaultValue={''} onChange={(date) => setInputDate(date)} inputMode="start"/>
                        </View>

                        <Text style={EstiloApp.text}>Imagem</Text>

                        {
                            urlFoto ?
                                <Image source={{ uri: urlFoto }} style={{ width: 100, height: 100 }}/>
                            :
                            null
                        }
                        

                        <Botao cor="#37BD6D" tamanho={34} conteudo="CAPTURAR IMAGEM" onPress={() => capturarImagem()}/>

                        <Botao cor="#37BD6D" tamanho={34} conteudo="CADASTRAR" onPress={() => model.addPesquisas({ nome: nome, data: inputDate, ratings: [0,0,0,0,0]}, urlFoto)}/>


                    </View>

                </View>
            </ScrollView>
        </SafeAreaProvider>
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
    },
    alert: {
        color: '#FD7979',
        fontSize: 16,
        marginTop: 10, // Espaçamento superior para separar do TextInput
    }
});

export default NovaPesquisa;
