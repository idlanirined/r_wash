import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Images from '../Lib/Images'

class Account extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#edeff0'}}> 
                <View style={{ height: 120, width: '100%', backgroundColor: '#00CCFF'}}>
                </View>
                <View style={{ justifyContent: 'space-between', flex: 1, paddingBottom: 20}}>
                    <View style={{ paddingHorizontal: 20, marginTop: -80, elevation: 2}}>
                        <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, alignSelf : 'center', color: 'white'}}>Account</Text>

                        {/* Account */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 140, borderRadius: 15, marginTop: 5, paddingVertical: 5}}>
                            <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center' }} size='large'/>
                            <Text style={{ fontFamily: Fonts.type.bold, marginTop: 10, alignSelf: 'center'}}>HAMJAH HUAILID</Text>
                            <Text style={{ fontFamily: Fonts.type.light, alignSelf: 'center', fontSize: 12}}>082240206592</Text>
                        </View>

                        {/* Profile */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 60, borderRadius: 15, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20}}>
                            <Image source={Images.iconAccount} style={{width: 20, height: 20, resizeMode: 'contain', alignSelf: 'center'}}/>
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium}}>Profile</Text>
                        </View>

                        {/* Payment */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 60, borderRadius: 15, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20}}>
                            <Fontisto name='wallet' size={20} style={{ alignSelf: 'center' }} color={'gray'} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium}}>Payment</Text>
                        </View>
    
                    </View>

                    <View style={{ paddingHorizontal: 20, }}>
                        {/* Logout */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 60, borderRadius: 15, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>
                            <Fontisto name='power' size={20} style={{ alignSelf: 'center' }} color={'gray'} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium}}>Logout</Text>
                        </View>
                        
                    </View>
                </View>
               
            </View>
        )
    }
}

export default Account;