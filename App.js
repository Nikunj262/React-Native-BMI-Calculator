/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }
  state = {
    height: 0,
    mass: 0,
    resultNumber: 0,
    resultText: '',
  }

  handleCalculate = () => {

    let value = (this.state.mass * 703) / Math.pow(this.state.height, 2);
    this.setState({
      resultNumber: value.toFixed(),
    });

    if (value < 18.5) {
      this.setState({ resultText: 'UnderWeight' })
    } else if (value >= 18.5 && value < 25) {
      this.setState({ resultText: 'Normal Weight' })
    } else if (value >= 25 && value < 30) {
      this.setState({ resultText: 'OverWeight' })
    } else {
      this.setState({ resultText: 'Obesity' })
    }
  }
  render() {
    return (
      <ImageBackground source={require('./assets/bg1.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Image
            style={{ width: 90, height: 70, borderRadius: 400, alignSelf: 'center', marginTop: 60 }}
            source={require('./assets/icon2.png')}
          />
          <View style={styles.intro}>
            <TextInput placeholder="Height" keyboardType="numeric" style={styles.input} onChangeText={height => this.setState({ height })} />
            <TextInput placeholder="Mass" keyboardType="numeric" style={styles.input} onChangeText={mass => this.setState({ mass })} />
          </View>
          <TouchableOpacity onPress={this.handleCalculate}>
            <Text style={styles.buttonText}>Calculate BMI</Text>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>{this.state.resultText}</Text>
        </View >
      </ImageBackground >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
  },
  intro: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
    color: '#0c4f42',
  },
  button: {
    backgroundColor: '#b9c7b3',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6d8563',
    fontWeight: 'bold',
  },
  result: {
    alignSelf: 'center',
    color: '#FFCB1F',
    fontSize: 65,
    padding: 15,
  },
});

