
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
//Screen
import HomePageScreen from '../Container/Homepage/HomePageScreen'
import MyOrderScreen from '../Container/MyOrder'
import NearbyScreen from '../Container/Nearby'
import HistoryScreen from '../Container/History'
import AccountScreen from '../Container/Account'
import Images from '../Lib/Images';

// import { Colors, Images } from '../Themes'
import { Image, Text } from 'react-native'
import { View } from 'native-base';


export default HomeNavigation = createBottomTabNavigator({
    Home: {
        screen: HomePageScreen,
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor }]}>Home</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>   */}
                    <Image source={Images.iconHome} style={{ width: 20, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
                </View>),  
        }
    },
    MyOrder: {
        screen: MyOrderScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor }]}>My Order</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <Image source={Images.iconMyOrder} style={{ width: 20, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
                </View>),  
        }
    },
    Nearby: {
        screen: NearbyScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor }]}>Nearby</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <Image source={Images.iconNearby} style={{ width: 20, height: 30, tintColor: tintColor, resizeMode: 'center'}}/>
                </View>),
        }
    },
    History: {
        screen: HistoryScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor }]}>History</Text>
            ),
            tabBarIcon: ({ tintColor }) => ( 
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <Image source={Images.iconhistory} style={{ width: 20, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>  
                </View>), 
        }
    },
    Account: {
        screen: AccountScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor }]}>Account</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                        <Image source={Images.iconAccount} style={{ width: 20, height: 30, tintColor: tintColor, resizeMode: 'contain'}}/>
                </View>),
        }
    }
}, { 
        tabBarOptions: {
            inactiveTintColor: '#808080',
            activeTintColor: '#00CCFF',
            style: {
                backgroundColor: '#FFFFFF',
                width: '100%',
            },
            labelStyle: {
                color: 'black'
            }
        },
    })

const styles = {
    label: {
        textAlign: 'center', fontSize: 12
    }
}
