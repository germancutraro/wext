import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/Feather';

const Extra = props => {
    return (
        <View style={styles.information}>
            <View>
                <Text style={styles.text}>
                    <Icon name="trending-up" size={16} color="#462535" /> {" "}
                    Temp.Máxima:
                    {" " + props.temp_max + "°C"}
                </Text>

                <Text style={styles.text}>
                    <Icon name="trending-down" size={16} color="#462535" />
                    {" "}
                    Temp.Mínima:
                    {" " + props.temp_min + "°C"}
                </Text>
                <Text style={styles.text}>
                    <Icon name="droplet" size={16} color="#462535" /> {" "}
                    Humedad:
                    {" " + props.humidity + "%"}
                </Text>
                <Text style={styles.text}>
                    <Icon name="chevrons-down" size={16} color="#462535" /> {" "}
                    Presión:
                    {" " + props.pressure + " mb"}
                </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <LinearGradient
                    colors={['#008785', '#22B58A']}
                    start={[0,0]}
                    end={[1,1]}
                    style={{
                        position: 'absolute',
                        left: 50,
                        top: 0,
                        bottom: 10,
                        width: 70,
                        height: 25,
                        borderRadius: 30,
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
        height: 163,
        borderRadius: 5,
        borderColor: '#eee',
        borderWidth: 1,
        marginTop: 25,
        padding: 12
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 7
    }
});

export default Extra;