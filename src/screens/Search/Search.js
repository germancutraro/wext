import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import { setCity } from "../../store/actions/weather";
import Icon from "react-native-vector-icons/Feather";

class Search extends Component {
  state = {
    text: ""
  };

  test = () => {
    this.props.setCity({name: this.state.text});
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
        <Icon style={styles.searchIcon} name="search" size={20} color="#aaa" onPress={this.test}/>
        </View>
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
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fafafa"
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
  }
});

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  { setCity }
)(Search);
