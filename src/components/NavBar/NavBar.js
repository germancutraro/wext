import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
const NavBar = props => (
    <View style={styles.navWrapper}>
        <Text style={styles.cityName}>{props.cityName.toUpperCase()}</Text>
        <Text style={styles.cityCountry}>{props.cityCountry}</Text>
    </View>
);

NavBar.propTypes = {
    cityName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    navWrapper: {
        height: 55,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cityName: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cityCountry: {
        textAlign: 'center',
        fontSize: 14,    
    }
})

export default NavBar;