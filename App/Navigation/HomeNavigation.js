
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
//Screen
import HomePageScreen from '../Container/Homepage/HomePageScreen'
import MyOrderScreen from '../Container/MyOrder'
import NearbyScreen from '../Container/Nearby'
import HistoryScreen from '../Container/History'
import AccountScreen from '../Container/Account'
//import ProfileScreen from '../Container/Profil'
import MenuPageScreen from '../Container/MainMenu'
import Images from '../Lib/Images'


// import { Colors, Images } from '../Themes'
import { Image, Text } from 'react-native'
import { View } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default HomeNavigation = createBottomTabNavigator({
    Home: {
        screen: MenuPageScreen,
        navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Home</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    {/* <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>   */}
                    <FontAwesome name='home' size={27} color={tintColor} style={{marginTop:10}}/>
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
                    <FontAwesome5 name='clipboard-list' size={21} color={tintColor} style={{ marginTop:8}}/>
                </View>),  
        }
    },
    Nearby: {
        screen: HomePageScreen, navigationOptions: {
            header: null,
            tabBarLabel: ({ tintColor }) => (
                <Text style={[styles.label, { color: tintColor, marginBottom:10 }]}>Maps</Text>
            ),
            tabBarIcon: ({ tintColor }) => (  
                <View style={{ justifyContent: 'center', alignSelf: 'center'}}>  
                    <FontAwesome5 name='map-marked-alt' size={21} color={tintColor} style={{ marginTop:8}}/>
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
                        <FontAwesome name='user' size={23} color={tintColor} style={{ marginTop:10}}/>
                </View>),
        }
    }
}, { 
        tabBarOptions: {
            inactiveTintColor: '#808080',
            activeTintColor: '#00CCFF',
            style: {
                backgroundColor: '#FAFAFA',
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
