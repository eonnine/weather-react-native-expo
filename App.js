import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '2dec17f71ae4341f472c9f477e486554';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather= (lat, lng) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    });
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.loading}>
        <StatusBar hidden={true} />
        {isLoaded 
        ? (
          <Weather 
            temp={Math.round(temperature - 273.15)} 
            name={name}
          />
        ) 
        : (
          <View>
            <Text style={styles.loadingText}>Getting the fucking wather</Text>
            {error
            ? <Text style={styles.errorText}>{error}</Text>
            : null
            }
          </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color:'red',
    backgroundColor:'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end'
  },
  loadingText:{
    fontSize:38,
    marginBottom: 24
  }
});
