import React, {Component, component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class CalculatorScreen extends Component{
    constructor() {
        super()
        this.state = {}
    }
    render(){
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
                        <View style = {styles.row}>
                            <Button title = "1"/>
                            <Button title = "2"/>
                            <Button title = "3"/>
                        </View>
                        <View style = {styles.row}>
                            <Button title = "4"/>
                            <Button title = "5"/>
                            <Button title = "6"/>
                        </View>
                        <View style = {styles.row}>
                            <Button title = "7"/>
                            <Button title = "8"/>
                            <Button title = "9"/>
                        </View>
                        <View style = {styles.row}>
                            <Button title = "*"/>
                            <Button title = "0"/>
                            <Button title = "#"/>
                        </View>
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