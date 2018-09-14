import React from 'react';

import { LinearGradient } from 'expo';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const CardButton = props => {
    return (
        <View>
            <TouchableWithoutFeedback onPress={() => alert('test')}>
                <LinearGradient
                    colors={(props.active) ? ['#ff5f6d', '#ffc371'] : ['#333', '#636363']}
                    style={{
                        position: 'absolute',
                        left: props.left,
                        top: props.top,
                        bottom: 10,
                        width: 128,
                        height: 35,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>


                    <View>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 14.5, fontWeight: 'bold' }}>{props.buttonText}</Text>
                    </View>

                </LinearGradient>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    Button: {

    }
});

export default CardButton;