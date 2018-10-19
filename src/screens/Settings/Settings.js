import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CardOption from './CardOption';
import FlipToggle from 'react-native-flip-toggle-button'
import { connect } from "react-redux";
import { setUnit } from "../../store/actions/unit";

class Settings extends Component {
    state = {
        themeActive: false,
        unitsActive: false,
        unit: ''
    };
    render() {
        if (this.state.unitsActive) 
            this.setState({unit: 'imperial'})
        else
            this.setState({unit: 'metric'})    


        return (
            <View style={styles.container}>
                <CardOption title="App Theme">
                   <View style={{ marginTop: 20, marginBottom: 50 }}>
                    <FlipToggle
                    value={this.state.themeActive}
                    buttonWidth={100}
                    buttonHeight={35}
                    buttonRadius={100}
                    sliderWidth={25}
                    sliderHeight={25}
                    sliderRadius={50}
                    onLabel={'Noche'}
                    offLabel={'Dia'}
                    labelStyle={{ color: '#f2f2f2', fontSize: 11 }}
                    onToggle={() => {
                        this.setState({ themeActive: !this.state.themeActive })
                    }}
                    buttonOffColor="#ff886f"
                    buttonOnColor="#193843"
                    sliderOffColor="#ffeda8"
                    sliderOnColor="#fff"
                />   
                </View>
                </CardOption>
                <CardOption title="Units">
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
                    onToggle={() => {
                        this.setState({ unitsActive: !this.state.unitsActive })
                        this.props.setUnit(this.state.unit)
                    }}
                    buttonOffColor="#8e9192"
                    buttonOnColor="#414343"
                    sliderOffColor="#ffeda8"
                    sliderOnColor="#fff"
                />   
                </View>
                </CardOption>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});   
const mapStateToProps = state => ({
    unit: state.unit
});
  
  export default connect(
    mapStateToProps,
    { setUnit }
  )(Settings);