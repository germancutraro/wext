import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const Weather = props => {
    return (
        <View style={styles.weatherWrapper}>
            <View style={styles.weatherIcon}>
                <Icon name="cloud-rain" size={80} color="#462535" />
            </View>
            <Text style={styles.description}>{props.other.description.toUpperCase()}</Text>

            <View style={styles.information}>
                <Text style={styles.temperature}> {/*props.other.icon*/} {props.temperature.temp}°</Text>
                 <Text>   
                <Icon name="trending-up" size={16} color="#462535" /> {props.temperature.temp_max}


                <Icon name="trending-down" size={16} color="#462535" /> {props.temperature.temp_min}


                <Icon name="droplet" size={16} color="#462535" /> {props.other.humidity}
                </Text>
            </View>
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
        marginBottom: 20
    },
    temperature: {
        color: '#462535',
        fontWeight: 'bold',
        fontSize: 50
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