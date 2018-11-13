import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  NetInfo
} from "react-native";
import { connect } from "react-redux";
import { getInformation } from "../../store/actions/weather";
// Components
import Layout from "../../hoc/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Weather from "../../components/Weather/Weather";
import OfflineNotice from '../../components/Connection/OfflineNotice';
import LocationButtons from '../../components/LocationButtons/LocationButtons';

androidStatusBarColor = "#fff"

class Home extends Component {

  state = {
    error: false,
    unit: 'metric',
    data: false,
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let { latitude } = position.coords,
        { longitude } = position.coords;
      this.props.getInformation('extended', { latitude, longitude }, this.props.unit)

      this.props.getInformation('gps', { latitude, longitude }, this.props.unit)
        .then(msg => {
          this.setState({ error: false })
          setTimeout(() => {
            this.setState({ data: true })
          }, 5000);
        })
        .catch(err => this.setState({ error: true }));
    });

    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.weather.name !== this.props.weather.name)
      this.props.getInformation('manual', null, this.props.weather.name, this.props.unit)
        .then(msg => {
          this.setState({ error: false })
        })
        .catch(err => this.setState({ error: true }));

    // if this.props.unit change
    if (prevProps.unit !== this.props.unit) {
      this.props.getInformation('manual', null, this.props.weather.name, this.props.unit)
        .then(msg => this.setState({ error: false }))
        .catch(err => this.setState({ error: true }));
    }
  }

  render() {

    const { weather } = this.props;
    //console.log('pronostico extendido', this.props.extended)

    if (!Object.keys(weather).length)
      return (
        <View style={[styles.container, styles.spinner]}>
          <ActivityIndicator size={90} color="#000" />
        </View>
      );

    if (weather.hasOwnProperty('message')) {
      return (
        <View style={styles.notFound}>
          <OfflineNotice />
          <Text style={{ fontSize: 170, textAlign: 'center' }}>404!</Text>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>¡Ciudad no encontrada!</Text>
        </View>
      );
    } else {
      if (Object.keys(weather).length > 1) {
        return (
          <View style={styles.container}>
            <OfflineNotice />
            <Layout>
              <NavBar cityName={weather.name} cityCountry={weather.sys.country} />
              <LocationButtons />
              <Weather {...weather} />
            </Layout>
          </View>
        );
      } else {
        return (
          <View style={[styles.container, styles.spinner]}>
            <ActivityIndicator size={90} color="#000" />
          </View>
        );
      }
    }
  }//end super if
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  notFound: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

const mapStateToProps = state => ({
  weather: state.weather,
  extended: state.extended,
  unit: state.unit
});

export default connect(
  mapStateToProps,
  { getInformation }
)(Home);
