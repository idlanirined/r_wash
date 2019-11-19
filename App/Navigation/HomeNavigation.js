
import React from 'react';  
import {StyleSheet, Text, View,Image} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  


//Screen
import HomePageScreen from '../Container/Homepage/HomePageScreen'
import MyOrderScreen from '../Container/MyOrder'
import NearbyScreen from '../Container/Nearby'
import HistoryScreen from '../Container/History'
import AccountScreen from '../Container/Account'
import Images from '../Lib/Images';

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomePageScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                  <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                        {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>   */}
                        <Image source={Images.iconHome} style={{ width: 20, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
                    </View>),  
            }  
        },  
        MyOrder: { screen: MyOrderScreen,  
            navigationOptions:{  
                tabBarLabel:'My Order',  
                tabBarIcon: ({ tintColor }) => (  
                  <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                        <Image source={Images.iconMyOrder} style={{ width: 20, height: 25, tintColor: tintColor, resizeMode: 'contain'}}/>
                    </View>),  
                // activeColor: '#f60c0d',  
                // inactiveColor: '#f65a22',  
                // barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Nearby: { screen: NearbyScreen,  
            navigationOptions:{  
                tabBarLabel:'Nearby',  
                tabBarIcon: ({ tintColor }) => (  
                  <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                        <Image source={Images.iconNearby} style={{ width: 20, height: 35, tintColor: tintColor, resizeMode: 'center'}}/>
                    </View>),  
                // activeColor: '#615af6',  
                // inactiveColor: '#46f6d7',  
                // barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        History: {  
            screen: HistoryScreen,  
            navigationOptions:{  
                tabBarLabel:'History',  
                tabBarIcon: ({ tintColor }) => ( 
                  <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                        <Image source={Images.iconhistory} style={{ width: 25, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>  
                    </View>),  
            }  
        },  
        Account: {  
          screen: AccountScreen,  
          navigationOptions:{  
              tabBarLabel:'Account',  
              tabBarIcon: ({ tintColor }) => (  
                  <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                        <Image source={Images.iconAccount} style={{ width: 20, height: 25, tintColor: tintColor, resizeMode: 'contain'}}/>
                  </View>),  
        }  
      },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#9e9e9e',  
      barStyle: { backgroundColor: 'gray' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  