import React from 'react'

//Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, fromTop, flipY, fadeOut, fromRight, fromBottom } from 'react-navigation-transitions';
import { headerStyle, headerTitleStyle, headerRighStyle, headerBgStyle } from '../Container/Styles/AppBarStyle'
import IconBack from 'react-native-vector-icons/Ionicons'

//Screen
import Login from '../Container/LoginScreen'
import Register from '../Container/RegisterScreen'
import HomeNavigation from './HomeNavigation'
import SplashScreen from '../Container/SplashScreen'
import Profil from '../Container/Profil'



const MainNavigator = createStackNavigator({
    Login : { screen: Login, navigationOptions: { header: null} },
    Register: { screen: Register, navigationOptions: { header: null } },
    HomeNavigation: { screen: HomeNavigation, navigationOptions: { header: null} },
    SplashScreen: { screen: SplashScreen, navigationOptions: { header: null}},
    Profil: { screen: Profil, navigationOptions: { header: null}},
   
   
    
}, {
    headerMode: 'screen',
    initialRouteName: 'Login',
    // transitionConfig: () => fromLeft(500),
    defaultNavigationOptions: {
      headerStyle,
      headerTitleStyle,
    //   headerBackground: (<Image source={Images.backgroundHomeTop} style={headerBgStyle} />),
      headerTintColor: 'white',
      headerBackImage: (
        // <Image source={Images.buttonBack} style={{width: 30, height: 20}}/>
        <IconBack name='arrow-back' size={30} color={'white'} />
      )
    }
  });
  
  export default createAppContainer(MainNavigator);