import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

class Settings extends Component {
    render() {
        return(
            <View>
                <TextInput placeholder="City..." /> 
            </View>
        );
    }
}

export default Settings;