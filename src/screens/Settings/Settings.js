import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, StatusBar } from 'react-native';
import CartOption from './CartOption';
import CartButton from './CartButton';

class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CartOption title="App Theme">
                    <CartButton buttonText="LIGHT" left={0} top={20} active={ true } />
                    <CartButton buttonText="DARK" left={150} top={20} active={false} />
                </CartOption>
                <CartOption title="Units">
                    <CartButton buttonText="METRIC" left={0} top={20} active={ true } />
                    <CartButton buttonText="IMPERIAL" left={150} top={20} active={false} />
                </CartOption>

            <CartOption>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Habilitar localización</Text>
                
            </CartOption>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default Settings;