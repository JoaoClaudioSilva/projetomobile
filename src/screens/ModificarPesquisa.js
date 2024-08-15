/* eslint-disable prettier/prettier */
import { ScrollView, View, Text, TextInput, Image } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import React from 'react';

import Botao from '../components/Botao';
import EstiloApp from '../styles/style';


const ModificarPesquisa = (props) => {
    const { selectedCard } = props.route.params;
    const [inputDate, setInputDate] = useState(null);


    return (
        <SafeAreaProvider>
            <ScrollView style={EstiloApp.background}>
                <View style={EstiloApp.container}>

                    <View name="Nome">
                        <Text style={EstiloApp.text}>Nome</Text>
                        <TextInput style={EstiloApp.inputText} placeholder={selectedCard.nome}/>

                        <Text style={EstiloApp.text}>Data</Text>
                        <View style={EstiloApp.inputText}>
                            <DatePickerInput style={EstiloApp.inputText} locale="en" label="Data" value={inputDate} onChange={(d) => setInputDate(d)} inputMode="start"/>
                        </View>

                        <Text style={EstiloApp.text}>Imagem</Text>
                        <View style={{width: 400, height: 110, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                            <Image style={{width: 80, height: 80}}source={selectedCard.imagem}/>
                        </View>

                        <Botao cor="#37BD6D" tamanho={34} conteudo="SALVAR"/>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
};



export default ModificarPesquisa;
