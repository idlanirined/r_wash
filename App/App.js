import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { Container } from 'native-base';
import DeviceInfo from 'react-native-device-info'

import AppNavigation from './Navigation/AppNavigation.js'

export default class App extends Component {
  render() {
    return (
      <Container style={{ marginTop: DeviceInfo.hasNotch() ? 25 : 25}}>
        <StatusBar backgroundColor='black' translucent  barStyle={'light-content'}/>
        <AppNavigation/>
      </Container>
    )
  }
}