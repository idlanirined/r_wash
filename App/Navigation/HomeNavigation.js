
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
//Screen
import HomePageScreen from '../Container/Homepage/HomePageScreen'
import MyOrderScreen from '../Container/MyOrder'
import NearbyScreen from '../Container/Nearby'
import HistoryScreen from '../Container/History'
import AccountScreen from '../Container/Account'
//import ProfileScreen from '../Container/Profil'

import Images from '../Lib/Images'


// import { Colors, Images } from '../Themes'
import { Image, Text } from 'react-native'
import { View } from 'native-base';


export default HomeNavigation = createBottomTabNavigator({
    Home: {
        screen: HomePageScreen,
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Home</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>   */}
                    <Image source={Images.iconHome} style={{marginTop:10, width: 23, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
                </View>),  
        }
    },
    MyOrder: {
        screen: MyOrderScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>My Order</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <Image source={Images.iconMyOrder} style={{ marginTop:10, width: 23, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
                </View>),  
        }
    },
    Nearby: {
        screen: NearbyScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Nearby</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <Image source={Images.iconNearby} style={{ marginTop:10, width: 23, height: 30, tintColor: tintColor, resizeMode: 'center'}}/>
                </View>),
        }
    },
    History: {
        screen: HistoryScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>History</Text>
            ),
            tabBarIcon: ({ tintColor }) => ( 
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <Image source={Images.iconhistory} style={{ marginTop:10, width: 23, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>  
                </View>), 
        }
    },
    Account: {
        screen: AccountScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Account</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                        <Image source={Images.iconAccount} style={{ marginTop:10, width: 23, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
                </View>),
        }
    }

   // Profil: {
    //    screen: ProfileScreen, navigationOptions: {
     //       header: null,
    //        tabBarLabel: ({ tintColor }) => (
       //         <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Account</Text>
   //         ),
     //       tabBarIcon: ({ tintColor }) => (  
    //            <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
        //                <Image source={Images.iconAccount} style={{ marginTop:10, width: 23, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
    //            </View>),
     //   }
  //  }


    
}, { 
        tabBarOptions: {
            inactiveTintColor: '#808080',
            activeTintColor: '#00CCFF',
            style: {
                backgroundColor: '#FAFAFA',
                width: 360,
                height: 60,
            },
            labelStyle: {
                color: 'black'
            }
        },
    })

const styles = {
    label: {
        textAlign: 'center', fontSize: 10
    }
}
