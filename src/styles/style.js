/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';

const EstiloApp = StyleSheet.create({
    background: {
        backgroundColor: '#372775',
        flex: 1,
    },
    container: {
        marginVertical: 20,
        alignSelf: 'center',
        width: '90%',
    },
    text: {
        color:'#FFFFFF',
        fontSize: 32,
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 76,
    },
    inputText: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        width: '100%',
        height: 60,
        borderRadius: 0,
        textAlignVertical: 'center',
    },
});

export default EstiloApp;
