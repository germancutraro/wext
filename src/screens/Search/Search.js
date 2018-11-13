import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { setCity, emptyWeather } from "../../store/actions/weather";
import Icon from "react-native-vector-icons/Feather";

class Search extends Component {
  state = {
    text: "",
    error: ""
  };

  getCity = () => {

    let { text } = this.state; 

    if (text.trim() === "") {
      this.setState({error: "Debes ingresar una ciudad!"})
    }  else {
      this.props.navigation.navigate('Home')
      this.props.emptyWeather();
      this.props.setCity({name: text})
       .then(() => console.log('x') )
       .catch(err => console.log('err', err))
    }
      
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="Busca una ciudad..."
            style={styles.input}
            underlineColorAndroid={"transparent"}
            onChangeText={text => this.setState({ text })}
            placeholderTextColor="#aaa" 

          />
          <TouchableOpacity style={styles.searchButtonWrapper} onPress={this.getCity}>
          <View>
            <Icon style={styles.searchIcon} name="search" size={25} color="#aaa" />
          </View>
          </TouchableOpacity>  
        </View>
        <Text style={{ color: "#b52424", textAlign: "center", fontSize: 17.5 }}>{this.state.error || " "}</Text>
        <View style={styles.content}>
          <Icon name="search" size={100} />
          <Text style={{ fontSize: 30, padding: 4 }}>Buscador Wext</Text>
          <Text style={{ fontSize: 18, fontWeight: "100" }}>Encuentra información sobre cualquier ciudad</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  searchWrapper: {
    borderRadius: 10,
    margin: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e8e8e8",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: "85%",
    fontSize: 22,
    fontWeight: "300"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  searchButtonWrapper: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { setCity, emptyWeather }
)(Search);
