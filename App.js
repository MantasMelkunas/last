/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View, Button, TouchableOpacity, Alert} from 'react-native';

export default class App extends Component<{}> {

    constructor() {
        super()

    }
    
    render() {

        return (
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        flexDirection: 'row',
    },
    mygtukas:{
      marginTop:35,
      borderWidth: 5,
      padding:5,
      marginRight: 25,
      width:150,
      textAlign: 'center',
      fontSize: 26,
      marginLeft: 5,
      borderColor: 'yellow',
      backgroundColor: '#ffffff',
      color: 'black'
    },
    left: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: "15%",
        paddingBottom: '40%',
    },
    right: {
        height: '100%',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    box: {
        height: 80,
        width: 120,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:15,
        textAlignVertical: "center"
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: 'green',
        alignItems: 'center',
        borderWidth: 5,
    },
    buttonText: {
        height: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
});