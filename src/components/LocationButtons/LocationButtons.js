import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

class LocationButtons extends Component {
    render() {
        return (
            <View style={styles.iconsWrapper}>
              <Icon style={styles.icons} name="map-pin" size={28} color="#3B414B" />
              <Icon  style={styles.icons} name="refresh-cw" size={28} color="#3B414B" />
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