import React, {Component, component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { ElementFlags } from 'typescript';

export default class CalculatorScreen extends Component{
    constructor() {
        super()
        this.state = {}
    }
    render(){
        let rows = {} 
        for (let i = 0; i < 4; i++){
            let row = []
            for (let j = 0; j < 3; j++){
                row.push(<TouchableOpacity style = {styles.btn}>
                    <Text>{i+1}</Text>
                </TouchableOpacity>)
            }
            rows.push(<View style = {styles.row}>{row}</View>)
        }
        return(
            <View style = {styles.container}>
                <View style = {styles.result}>
                    <Text style = {styles.resultText}>2*2</Text>
                    </View>
                <View style = {styles.calculation}>
                    <Text style = {styles.calculationText}>4</Text>
                    </View>
                <View style = {styles.buttons}>
                    <View style = {styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        <Button title = "+"/>
                        <Button title = "-"/>
                        <Button title = "X"/>
                        <Button title = "/"/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultText:{
        fontSize:30,
        color: 'white'
    },
    CalculationText:{
        fontSize:24,
        color: 'white'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'strech',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    result: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculation: {
        flex:1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        backgroundColor: 'yellow'
    },
    operations:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'black'
    }
})