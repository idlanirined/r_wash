import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Images from '../Lib/Images'
import { ConfirmDialog } from 'react-native-simple-dialogs';

class Profile extends Component {
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
                            <Text style={{ fontFamily: Fonts.type.bold, marginTop: 10, alignSelf: 'center', fontSize: 16}}>HAMJAH HUAILID</Text>
                            <Text style={{ fontFamily: Fonts.type.light, alignSelf: 'center', fontSize: 12}}>082240206592</Text>
                        </View>

                        {/* Profile */}
                        <View style={{ height: 150, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 15}}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 16}}>Komplek Bumi Pakusarakan 2</Text>
                                <Image source={Images.iconHome1} style={{height: 23, width: 23, position:'absolute', left: 20}}/>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 55, fontFamily: Fonts.type.medium , fontSize: 16}}>082240206592</Text>
                                <Image source={Images.iconPhone} style={{height: 23, width: 23, position:'absolute', left: 20}}/>
                            </View>
                            <View style={{ flex: 1, marginBottom: 20, alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 16}}>hamjah.huailid18@gmail.com</Text>
                                <Image source={Images.iconEmail1} style={{height: 23, width: 23, position:'absolute', left: 20}}/>
                            </View>
                        </View>

                        {/* Payment */}
                        <View style={{ backgroundColor:'white' , width: '100%', height: 60, borderRadius: 15, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20}}>
                        <Image source={Images.iconCar} style={{width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center'}}/>
                            <Text style={{ alignSelf: 'center', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 16}}>Vehicle</Text>
                        </View>

                        
    
                    </View>

                 
                </View>
               
            </View>
        )
    }
}

export default Profile;