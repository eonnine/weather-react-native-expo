import React, { Component } from 'react';
import { StyleSheet, Text ,View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Raining',
    subtitle: 'For more info look outside',
    icon: 'weather-rainy'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny',
    subtitle: 'Go outside',
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['##00ECBC', '#007ADF'],
    title: 'Thunderstorm',
    subtitle: 'Dangerous',
    icon: 'weather-lightning'
  },
  Clouds: {
    colors: ['#07D2CC', '#304353'],
    title: 'Clouds',
    subtitle: 'boring',
    icon: 'weather-cloudy'
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: 'Snow',
    subtitle: 'Do you want to build a snowman?',
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'What?',
    icon: 'cloud-drizzle'
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subtitle: 'my eyes...',
    icon: 'weather-fog'
  },
  Mist: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Mist',
    subtitle: 'chok chok',
    icon: 'weather-fog'
  }
};

function Weather({ temp, name }) {
  return(
    <LinearGradient 
        colors={['#00C6FB', '#005BEA']} 
        style={styles.container} 
      >
        <View style={styles.upper}>
          <MaterialCommunityIcons 
           color='white' 
           size={144} 
           name={weatherCases[name].icon}
        />
          <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{weatherCases[name].title}</Text>
          <Text style={styles.subtitle}>{weatherCases[name].subtitle}</Text>
        </View>
      </LinearGradient>
  )
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 40,
    backgroundColor: 'transparent',
    color:'white',
    marginTop:10
  }, 
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft:25
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color:'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color:'white',
    marginBottom: 24
  }
});