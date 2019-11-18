import React from 'react'

//Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, fromTop, flipY, fadeOut, fromRight, fromBottom } from 'react-navigation-transitions';

//Screen
import LoginScreen from '../Container/LoginScreen'


const MainNavigator = createStackNavigator({
    LoginScreen: { screen: LoginScreen, navigationOptions: { header: null} },
}, {
    headerMode: 'screen',
    initialRouteName: 'LoginScreen',
    transitionConfig: () => fromLeft(500),
    // defaultNavigationOptions: {
    //   headerStyle,
    //   headerTitleStyle,
    //   headerBackground: (<Image source={Images.backgroundHomeTop} style={headerBgStyle} />),
    //   headerTintColor: 'white',
    //   headerBackImage: (
    //     // <Image source={Images.buttonBack} style={{width: 30, height: 20}}/>
    //     <IconBack name='arrow-back' size={30} color={'white'} />
    //   )
    // }
  });
  
  export default createAppContainer(MainNavigator);