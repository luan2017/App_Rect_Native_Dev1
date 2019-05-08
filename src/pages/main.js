//importando React e Component
import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {  // Menu superior
    title: "Calculadora"
  };

  render()
  {
    return (
      <View>
        <Text> Página Principal </Text> 
      </View>
    );
  }
}