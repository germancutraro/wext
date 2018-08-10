import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
        height: 55, // 50 original
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cityName: {
        textAlign: 'center',
        fontSize: 14,
        color: '#462535',
        fontWeight: 'bold'
    },
    cityCountry: {
        textAlign: 'center',
        fontSize: 11,
        color: '#462535'
    }
})

export default NavBar;