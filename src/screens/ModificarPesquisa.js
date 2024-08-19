/* eslint-disable prettier/prettier */
import { ScrollView, View, Text, TextInput, Image } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useSelector } from 'react-redux';

import model from '../firebase/model';
import Botao from '../components/Botao';
import EstiloApp from '../styles/style';


const ModificarPesquisa = (props) => {
    const [inputDate, setInputDate] = useState(undefined);
    const [nome, setNome] = useState('');
    const id = useSelector((state) => state.selected_card.id);

    return (
        <SafeAreaProvider>
            <ScrollView style={EstiloApp.background}>
                <View style={EstiloApp.container}>

                    <View name="Nome">
                        <Text style={EstiloApp.text}>Nome</Text>
                        <TextInput style={EstiloApp.inputText} placeholder={useSelector((state) => state.selected_card.nome)} onChange={(text) => setNome(text)}/>

                        <Text style={EstiloApp.text}>Data</Text>
                        <View style={EstiloApp.inputText}>
                            <DatePickerInput style={EstiloApp.inputText} locale="en" label="Data" value={inputDate} defaultValue={''} onChange={(date) => setInputDate(date)} inputMode="start"/>
                        </View>

                        <Text style={EstiloApp.text}>Imagem</Text>

                        <Botao cor="#37BD6D" tamanho={34} conteudo="SALVAR" onPress={() => model.updatePesquisas(id, { nome: nome, data: inputDate })}/>
                        <Botao cor="#FF0000" tamanho={34} conteudo="DELETAR" onPress={() => model.deletePesquisas(id)}/>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
};



export default ModificarPesquisa;
