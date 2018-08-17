import React from 'react';
import { View, StyleSheet, Button, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';

import Icon from 'react-native-vector-icons/Feather';

const Extra = props => {
    return (
        <View style={styles.information}>
            <View>
                <Text style={styles.text}>
                    <Icon name="trending-up" size={16} color="#462535" /> {" "}
                    Max. Temperature:
                    {" " + props.temp_max + "°C"}
                </Text>

                <Text style={styles.text}>
                    <Icon name="trending-down" size={16} color="#462535" />
                    {" "}
                    Min. Temperature:
                    {" " + props.temp_min + "°C"}
                </Text>
                <Text style={styles.text}>
                    <Icon name="droplet" size={16} color="#462535" /> {" "}
                    Humidity:
                    {" " + props.humidity + "°C"}
                </Text>
                <Text style={styles.text}>
                    <Icon name="droplet" size={16} color="#462535" /> {" "}
                    Humidity:
                    {" " + props.humidity + "°C"}
                </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <LinearGradient
                    colors={['#ff5f6d', '#ffc371']}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 10,
                        width: 70,
                        height: 25,
                        borderRadius: 5,
                        justifyContent: 'center'
                    }}
                >

                    <TouchableWithoutFeedback onPress={() => alert('test')}>
                        <View>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10, fontWeight: 'bold' }}>MORE</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </LinearGradient>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    information: {
        flexDirection: 'column',
        width: 300,
        alignItems: 'center',
        height: 153,
        borderRadius: 5,
        borderColor: '#eee',
        borderWidth: 1,
        marginTop: 10,
        padding: 12
    },
    text: {
        color: '#462535',
        fontWeight: 'bold',
        marginBottom: 7
    }
});

export default Extra;