import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { Container } from 'native-base';

import AppNavigation from './Navigation/AppNavigation.js'

export default class App extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="black" translucent barStyle={'light-content'}/>
        <AppNavigation/>
      </Container>
    )
  }
}