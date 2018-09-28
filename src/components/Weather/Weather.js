import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Extra from './Extra';
import setIcon from '../../utils/setIcon';

const Weather = props => (
    <View style={styles.weatherWrapper}>
        <View style={styles.weatherIcon}>
            {setIcon(props.weather[0].icon)}
        </View>
        <Text style={styles.description}>{props.weather[0].description[0].toUpperCase() + props.weather[0].description.substring(1, props.weather[0].description.length)}</Text>
        <Text style={styles.temperature}> {props.main.temp}°C</Text>
        <Extra
            temp={props.main.temp}
            temp_max={props.main.temp_max}
            temp_min={props.main.temp_min}
            humidity={props.main.humidity}
            pressure={props.main.pressure}
        />
    </View>
);

const styles = StyleSheet.create({
    weatherWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    description: {
        fontSize: 37,
        fontWeight: 'bold',
        marginBottom: 1,
        
    },
    temperature: {
        fontWeight: 'bold',
        fontSize: 25
    },
    weatherIcon: {
        borderColor: '#eee',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 512,
        padding: 30
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default Weather;