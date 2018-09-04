import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, StatusBar } from 'react-native';
import CartOption from './CartOption';
import CartButton from './CartButton';
import FlipToggle from 'react-native-flip-toggle-button'

class Settings extends Component {
    state = {
        themeActive: false,
        unitsActive: false,
        locationActive: false
    };
    render() {
        return (
            <View style={styles.container}>
                <CartOption title="App Theme">
                    {/*<CartButton buttonText="LIGHT" left={0} top={20} active={ true } />
                    <CartButton buttonText="DARK" left={150} top={20} active={false} />*/}
                   <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <FlipToggle
                    value={this.state.themeActive}
                    buttonWidth={100}
                    buttonHeight={50}
                    buttonRadius={50}
                    sliderWidth={20}
                    sliderHeight={20}
                    sliderRadius={50}
                    onLabel={'Noche'}
                    offLabel={'Dia'}
                    labelStyle={{ color: '#f2f2f2', fontSize: 11 }}
                    onToggle={() => this.setState({ themeActive: !this.state.themeActive })}
                    buttonOffColor="#ff886f"
                    buttonOnColor="#193843"
                    sliderOffColor="#ffeda8"
                    sliderOnColor="#fff"
                />   
                </View>
                </CartOption>
                <CartOption title="Units">
                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <FlipToggle
                    value={this.state.unitsActive}
                    buttonWidth={100}
                    buttonHeight={50}
                    buttonRadius={50}
                    sliderWidth={20}
                    sliderHeight={20}
                    sliderRadius={50}
                    onLabel={'Imperial'}
                    offLabel={'Metric'}
                    labelStyle={{ color: '#f2f2f2', fontSize: 11 }}
                    onToggle={() => this.setState({ unitsActive: !this.state.unitsActive })}
                    buttonOffColor="#8e9192"
                    buttonOnColor="#414343"
                    sliderOffColor="#ffeda8"
                    sliderOnColor="#fff"
                />   
                </View>
                </CartOption>

            <CartOption>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Habilitar localización</Text>
                <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <FlipToggle
                    value={this.state.locationActive}
                    buttonWidth={100}
                    buttonHeight={50}
                    buttonRadius={50}
                    sliderWidth={20}
                    sliderHeight={20}
                    sliderRadius={50}
                    onLabel={'On'}
                    offLabel={'Off'}
                    labelStyle={{ color: '#f2f2f2', fontSize: 11 }}
                    onToggle={() => this.setState({ locationActive: !this.state.locationActive })}
                    buttonOffColor="#8e9192"
                    buttonOnColor="#414343"
                    sliderOffColor="#ffeda8"
                    sliderOnColor="#fff"
                />   
                </View>
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