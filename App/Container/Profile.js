import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Icon, Container, Header, Content, Button, } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Images from '../Lib/Images'


class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
                <View style={{ height: 120, width: '100%', backgroundColor: '#00CCFF' }}>
                </View>
                <View style={{ justifyContent: 'space-between', flex: 1, paddingBottom: 20 }}>
                    <View style={{ paddingHorizontal: 15, marginTop: -80, elevation: 2 }}>
                        <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, alignSelf: 'center', color: 'white' }}>Profile</Text>

                        {/* Account */}
                        <View style={{ backgroundColor: 'white', width: '100%', height: 140, borderRadius: 5, marginTop: 5, paddingVertical: 5, elevation:2 }}>
                            <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center' }} size='large' />
                            <Text style={{ fontFamily: Fonts.type.bold, marginTop: 10, alignSelf: 'center', fontSize: 16 }}>HAMJAH HUAILID</Text>
                            <Text style={{ fontFamily: Fonts.type.light, alignSelf: 'center', fontSize: 12 }}>082240206592</Text>
                        </View>

                        {/* Profile */}

                        <View style={{ height: 150, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, elevation:2 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 16 }}>Komplek Bumi Pakusarakan 2</Text>
                                <Image source={Images.iconHome1} style={{ height: 23, width: 23, position: 'absolute', left: 20 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 16 }}>082240206592</Text>
                                <Image source={Images.iconPhone} style={{ height: 23, width: 23, position: 'absolute', left: 20 }} />
                            </View>
                            <View style={{ flex: 1, marginBottom: 20, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 16 }}>hamjah.huailid18@gmail.com</Text>
                                <Image source={Images.iconEmail1} style={{ height: 23, width: 23, position: 'absolute', left: 20 }} />
                            </View>


                        </View>

                        {/* Vehicle */}
                        <View style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation: 2 }}>
                            <Image source={Images.iconCar} style={{ width: 25, height: 25, resizeMode: 'contain', alignSelf: 'center' }} />
                            <Text style={{ alignSelf: 'center', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 16 }}>Vehicle</Text>
                        </View>

                        {/* Tampilan Daftar Mobil */}
                        <ScrollView style={{width: 300, height: 120,paddingTop:10, paddingHorizontal: 10, paddingBottom: 10, marginTop: 10, left: 24, backgroundColor: 'white', marginLeft: -15, marginRight: -15, elevation:2, borderRadius: 5 }}>
                       
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 35, fontFamily: Fonts.type.medium, fontSize: 16 }}>1. Honda Jazz / D 1514 BFF</Text>

                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 35, fontFamily: Fonts.type.medium, fontSize: 16 }}>2. Honda Civic / D 7920 DU</Text>

                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 35, fontFamily: Fonts.type.medium, fontSize: 16 }}>3. Toyota Avanza / D 8070 AUH</Text>

                            </View>
                            <View style={{ flex: 1, marginBottom: 20, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <Text style={{ alignSelf: 'flex-start', marginLeft: 35, fontFamily: Fonts.type.medium, fontSize: 16 }}>4. Alphard / D 8208 KLM</Text>

                            </View>

                            
    
                        </ScrollView>

                        {/* Button Add Vihecle */}


                        <View style={{ backgroundColor: 'transparent', width: '100%', height: 80, borderRadius: 5, marginTop: 5, paddingVertical: 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                            <View style={{ width: 180, height: 100, paddingHorizontal: 30, alignContent: 'center', left: -30 }}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('')} >
                                        <Text style={{ color: 'white', fontFamily: Fonts.type.bold, fontSize: 14 }}> Add Vehicle </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>

                        {/* Button Edit Profile */}
                            <View style={{ backgroundColor: 'transparent', width: 180, height: 100, paddingHorizontal: 30, alignContent: 'center', right: 50 }}>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('EditProfil')} >
                                        <Text style={{ color: 'white', fontFamily: Fonts.type.bold, fontSize: 14 }}> Edit Profile </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>

                        </View>






                    </View>
                </View>



            </View>

        )
    }
}


export default Profile;