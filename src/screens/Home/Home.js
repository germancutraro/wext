import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { getInformation } from "../../store/actions/weather";
// Components
import Layout from "../../hoc/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Weather from "../../components/Weather/Weather";

class Home extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let { latitude } = position.coords,
        { longitude } = position.coords;
      this.props.getInformation('gps', {latitude, longitude});
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.weather.name !== this.props.weather.name) 
      this.props.getInformation('manual', null, this.props.weather.name);
  }

  render() {
    const { weather } = this.props;
    if (!Object.keys(weather).length)
      return (
        <View style={[styles.container, styles.spinner]}>
          <ActivityIndicator size={90} color="#000" />
        </View>
      );
    return (
      <View style={styles.container}>
        <Layout>
          <NavBar cityName={weather.name} cityCountry={weather.sys.country} />
          <Weather {...weather} />
        </Layout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff"
  },
  spinner: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { getInformation }
)(Home);
