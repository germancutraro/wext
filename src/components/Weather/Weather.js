import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Extra from './Extra';
import setIcon from '../../utils/setIcon';
import {BoxShadow} from 'react-native-shadow'

const Weather = props => {
    const shadowOpt = {
        width:225,
        height:215,
        color:"#eee",
        border:15,
        radius:100,
        opacity:0.3,
        x:0,
        y:-22,
    }
    return (
        <View style={styles.weatherWrapper}>

            <BoxShadow  setting={shadowOpt}>
                <View style={styles.weatherIcon}>
                    { setIcon(props.weather[0].icon) }
                </View>
            </BoxShadow>

            <Text style={styles.description}>{props.weather[0].description}</Text>
            <Text style={styles.temperature}> {props.main.temp}°</Text>
            <Extra 
                temp={props.main.temp}
                temp_max={props.main.temp_max}
                temp_min={props.main.temp_min}
                humidity={props.main.humidity}
                pressure={props.main.pressure}
            />
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
        color: '#000',
        fontSize: 37,
        fontWeight: 'bold',
        marginBottom: 1
    },
    temperature: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25
    },
    weatherIcon: {
        marginTop: -25,
        borderRadius: 150,
        padding: 30,
        backgroundColor: "#fff"
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default Weather;