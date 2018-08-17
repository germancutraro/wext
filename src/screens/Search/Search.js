import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { setCity } from '../../store/actions/weather';
import Icon from 'react-native-vector-icons/Feather';

class Search extends Component {
    test = () => {
        this.props.setCity({name: 'Buenos Aires'}, () => {
            console.log('xd', this.props.weather)

        })
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.searchWrapper}>
                    <TextInput placeholder="City..." style={styles.input} underlineColorAndroid={'transparent'}  /> 
                </View>    
                <View style={ styles.content }>
                  <Icon name="search" color="#462535" size={100} />
                  <Text style={{ fontSize: 30, padding: 4 }}>Wext Searcher</Text>
                  <Text style={{ fontSize: 11 }}>Find information about any city</Text>
                </View>
                <Button onPress={this.test} title="tst">Test</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: '#fafafa'
    },
    searchWrapper: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    input: {
        padding: 10,
        width: '85%',
        fontSize: 18
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({
    weather: state.weather
});

export default connect(mapStateToProps, {setCity})(Search);