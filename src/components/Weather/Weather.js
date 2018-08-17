import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Extra from './Extra';
import Icon from 'react-native-vector-icons/Feather';

const Weather = props => {
    return (
        <View style={styles.weatherWrapper}>
            <View style={styles.weatherIcon}>
                <Icon name="cloud-rain" size={80} color="#462535" />
            </View>
            <Text style={styles.description}>{props.other.description.toUpperCase()}</Text>
            <Text style={styles.temperature}> {/*props.other.icon*/} {props.temperature.temp}°</Text>
            <Extra 
                temp={props.temperature.temp}
                temp_max={props.temperature.temp_max}
                temp_min={props.temperature.temp_min}
                humidity={props.other.humidity}
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
        color: '#462535',
        fontSize: 37,
        fontWeight: 'bold',
        marginBottom: 1
    },
    temperature: {
        color: '#462535',
        fontWeight: 'bold',
        fontSize: 25
    },
    weatherIcon: {
        borderColor: '#F3CBB6',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 100,
        padding: 30
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default Weather;