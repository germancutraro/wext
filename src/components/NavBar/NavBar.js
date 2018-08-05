import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';
console.log('statusBarHeight: ', StatusBar.currentHeight);

const NavBar = props => {
    return (
        <View style={styles.navWrapper}>       
            <Text style={styles.cityName}>{props.cityName.toUpperCase()}</Text>
            <Text style={styles.cityCountry}>{props.cityCountry}</Text>
        </View>
    );
};

NavBar.propTypes = {
    cityName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    navWrapper: {
        backgroundColor: '#1E3D75', // 3c6dcc
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cityName: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },
    cityCountry: {
        textAlign: 'center',
        fontSize: 11,
        color: '#fff'
    }
})

export default NavBar;