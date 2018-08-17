import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
// Components
import Layout from '../../hoc/Layout/Layout';
import NavBar from '../../components/NavBar/NavBar';
import Weather from '../../components/Weather/Weather';

class Home extends Component {

  state = {
    data: {},
    cityName: ''
  };

  getWeather = async city => {
    const API_KEY = '7c02b1090f42b77e30cac4cd89ffea05';
    const API = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const res = await axios("https://" + API);
      const data = res.data;
      console.log('data', data)
      this.setState({ data: {
        city: {
          name: data.name,
          country: data.sys.country,
        },
        temperature: {
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
        },
        other: {
          humidity: data.main.humidity,
          description: data.weather[0].main,
          icon: data.weather[0].icon
        }
      }});
      
    } catch (err) {
      console.log(err.message)
    }  
  };

  test = () =>  {
    this.setState({cityName: this.props.weather.name}, () => {
      this.getWeather(this.state.cityName)
    })
  }
  componentDidMount() {
    this.test()
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('1', this.props.weather.name)
    console.log('2', nextState.cityName);
    if (this.props.weather.name !== nextState.cityName) {
      this.test()
      return true;
    } 
    return true;
  }


  render() {
    console.log('H STATE', this.state.cityName)
    const { data } = this.state;
    if (!Object.keys(data).length)
      return (
        <View style={[styles.container, styles.spinner]}>
          <ActivityIndicator size={90} color="#462535" />
        </View>
    )
    return (
      <View style={styles.container}>
          <Layout>
            <NavBar cityName={data.city.name} cityCountry={data.city.country} />
            <Weather {...data} />
          </Layout>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff'
  },
  spinner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(Home);