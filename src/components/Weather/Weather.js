import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


import * as icons from '../../assets/Icons/';



const Weather = props =>  {
     //const iconos = Object.keys({...icons}).map(icon => console.log(icon.substring(1, icon.length)))
    return (
        <View style={styles.weatherWrapper}>
            <Text style={styles.description}>{props.other.description.toUpperCase()}</Text>
            <Image source='' style={styles.icons} />
            <Text style={styles.temperature}> {props.other.icon} {props.temperature.temp}°</Text>
            <Text>
                Temp_Max: {props.temperature.temp_max}
                Temp_Min: {props.temperature.temp_min}
                Humidity: {props.other.humidity}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    weatherWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    description: {
        color: '#462535',
        fontSize: 43,
        fontWeight: 'bold',
        marginBottom: 20
    },
    temperature: {
        color: '#462535',
        fontWeight: 'bold',
        fontSize: 50
    },
    icons: {
        width: 200,
        height: 200
    }
});

export default Weather;