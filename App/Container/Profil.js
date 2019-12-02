import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Images from '../Lib/Images'

class Profil extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#edeff0'}}> 
                <View style={{ height: 120, width: '100%', backgroundColor: '#00CCFF'}}>
                </View>
                <View style={{ justifyContent: 'space-between', flex: 1, paddingBottom: 20}}>
                    <View style={{ paddingHorizontal: 20, marginTop: -80, elevation: 2}}>
                        <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, alignSelf : 'center', color: 'white'}}>Profile</Text>

                        {/* Account */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 140, borderRadius: 15, marginTop: 5, paddingVertical: 5}}>
                            <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center' }} size='large'/>
                            <Text style={{ fontFamily: Fonts.type.bold, marginTop: 10, alignSelf: 'center'}}>HAMJAH HUAILID</Text>
                            <Text style={{ fontFamily: Fonts.type.light, alignSelf: 'center', fontSize: 12}}>082240206592</Text>
                        </View>

                        {/* Profile */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 150, borderRadius: 15, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20}}>
                            <Image source={Images.iconHome1} style={{width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center'}}/>
                            
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium}}>komplek Bumi Pakusarakan 2</Text>
                            

                           
                           
                        </View>

                        {/* Payment */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 60, borderRadius: 15, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20}}>
                        <Image source={Images.iconCar} style={{width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center'}}/>
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium}}>Payment</Text>
                        </View>
    
                    </View>

                 
                </View>
               
            </View>
        )
    }
}

export default Profil;