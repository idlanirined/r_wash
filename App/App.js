import React, { Component } from 'react';
import { Container } from 'native-base';

import AppNavigation from './Navigation/AppNavigation.js'

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppNavigation/>
      </Container>
    )
  }
}