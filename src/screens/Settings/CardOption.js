import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardOption = props => {
    return (
        <View style={styles.optionCartContainer}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.title}</Text>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    optionCartContainer: {
        margin: 10,
        height: 80,
        marginLeft: 30
    }
});

export default CardOption;