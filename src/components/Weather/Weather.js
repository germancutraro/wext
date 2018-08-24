import React from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Image } from 'react-native';
import Extra from './Extra';
import Icon from 'react-native-vector-icons/Feather';

const setIcon = (code) => {
    if (!code.startsWith('01')) {
        code = code.substring(0, 2);
    }
    switch(code) {
        case '01d':
            return <Icon name="sun" size={80} color="#462535"/>
        case '01n':
            return <Icon name="moon" size={80} color="#462535"/>
        case '02': case '03': case '04':
            return <Icon name="cloud" size={80} color="#462535"/>
        case '09':
            return <Icon name="cloud-drizzle" size={80} color="#462535"/>
        case '10':
            return <Icon name="cloud-rain" size={80} color="#462535"/>
        case '11':
            return <Icon name="cloud-lightning" size={80} color="#462535"/>
        case '13':
            return <Icon name="cloud-snow" size={80} color="#462535"/>
        case '50':
            return <Icon name="wind" size={80} color="#462535"/>
    }
};

axios(`https://glosbe.com/gapi/translate?from=en&dest=es&format=json&phrase=hello&pretty=true`).then((res) => {
    console.log(res.data.tuc.meanings);

})

const Weather = props => {

    return (
        <View style={styles.weatherWrapper}>
            <View style={styles.weatherIcon}>
               { setIcon(props.weather[0].icon) }
            </View>
            <Text style={styles.description}>{props.weather[0].description}</Text>
            <Text style={styles.temperature}> {/*props.other.icon*/} {props.main.temp}°</Text>
            <Extra 
                temp={props.main.temp}
                temp_max={props.main.temp_max}
                temp_min={props.main.temp_min}
                humidity={props.main.humidity}
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
        marginBottom: 1,
        //textTransform: 'uppercase'
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