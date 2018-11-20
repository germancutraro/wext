import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

class LocationButtons extends Component {
    render() {
        return (
            <View style={styles.iconsWrapper}>
            <TouchableWithoutFeedback onPress={this.props.gpsAgain}>
              <Icon style={styles.icons} name="map-pin" size={28} color="#3B414B" />
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={this.props.reload}>
                 <Icon style={styles.icons} name="refresh-cw" size={28} color="#3B414B" />
              </TouchableWithoutFeedback>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconsWrapper: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    icons: {
        padding: 22
    }
});

export default LocationButtons;