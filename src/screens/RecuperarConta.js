/* eslint-disable prettier/prettier */
import { View, StyleSheet, TextInput, Text, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import Botao from '../components/Botao'
import { useState } from 'react'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import validate from '../scripts/validate'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#372775'
    }
}


const RecuperarSenha = (props) => {

    const [emailRecovery, setEmailRecovery] = useState('')
    const [showRecovery, setShowRecovery] = useState(false)
    const [showErrorEmail, setErrorEmaill] = useState(false)




    const Recuperar = () =>{

        if (!validate.validarEmail(emailRecovery)) {
            setErrorEmaill(true);
        }
        else{
            setShowRecovery(true);
            setEmailRecovery('');
            setErrorEmaill(false);
        }
    }


    return (
       <PaperProvider theme={theme}>
        <ScrollView style={EstiloRecover.background}>
            <View style={EstiloRecover.container}>


                <Text style={EstiloRecover.text}>Email</Text>
                <TextInput 
                    style={EstiloRecover.inputText}
                    value={emailRecovery} 
                    onChangeText={setEmailRecovery} 
                    label="E-mail" 
                    placeholder='Insira o e-mail'
                />

                {showErrorEmail && (
                    <Text style={EstiloRecover.alert}>O campo não é um email válido.</Text>
                )}
                <Botao cor="#37BD6D" tamanho={36} conteudo="Recuperar" onPress={Recuperar}/> 

                {showRecovery && (
                    <Text style={EstiloRecover.alert}>Um e-mail de recuperação foi enviado.</Text>
                )}
            

            </View>
        </ScrollView>
       </PaperProvider>
    )
    
}

const EstiloRecover = StyleSheet.create({
    alert: {
        color: '#FD7979',
        fontSize: 16,
        marginTop: 10, // Espaçamento superior para separar do TextInput
    }
});

export default RecuperarSenha