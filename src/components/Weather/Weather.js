import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Extra from './Extra';
import setIcon from '../../utils/setIcon';


import { connect } from 'react-redux';

const Weather = props => {

    let unit = props.unit === "metric" ? "°C" : "°F"; 

    // hacerlo mejor!!
    let description = props.weather[0].description[0].toUpperCase() + props.weather[0].description.substring(1, props.weather[0].description.length);

    return (
        <View style={styles.weatherWrapper}>
            <View style={styles.weatherIcon}>
               { setIcon(props.weather[0].icon) }
            </View>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.temperature}> {props.main.temp}{unit}</Text>
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


const mapStateToProps = state => ({
    unit: state.unit
});

export default connect(mapStateToProps)(Weather);