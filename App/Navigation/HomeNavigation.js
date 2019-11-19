import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Container } from 'native-base';
import { StatusBar, View } from 'react-native'; 
import { withNavigationFocus } from 'react-navigation';

import { fromLeft } from 'react-navigation-transitions';
// import Color from '../Lib/Color'

//BottomScreen
import HomePageScreen from '../Container/Homepage/HomePageScreen'
import MyOrderScreen from '../Container/MyOrder'
import NearbyScreen from '../Container/Nearby'
import HistoryScreen from '../Container/History'
import AccountScreen from '../Container/Account'

class MyComponent extends React.Component {
  
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home', color: 'white'},
      { key: 'myOrder', title: 'My Order', icon: 'assignment', color: 'white'},
      { key: 'nearby', title: 'Nearby', icon: 'map', color: 'white'},
      { key: 'history', title: 'History', icon: 'history', color: 'white'},
      { key: 'account', title: 'Account', icon: 'person-outline', color: 'white'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomePageScreen,
    myOrder: MyOrderScreen,
    nearby: NearbyScreen,
    history: HistoryScreen,
    account: AccountScreen
  });

  render() {
    return (
        <Container>
            <StatusBar backgroundColor={'blue'} barStyle={'light-content'} translucent={false} />
            <BottomNavigation
                activeColor={'blue'}
                inactiveColor={'#a69ead'}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                // onTabPress={(index) => alert(JSON.stringify(index))} 
            />
        </Container>
        
    );
  }
}

export default withNavigationFocus(MyComponent);