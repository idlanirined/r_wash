import React, { Component } from 'react';
import { Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Icon, Container, Header, Content, Button, } from 'native-base';

import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Images from '../Lib/Images'


class NearbyNew extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5f5' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Nearby</Text>
                </View>



                {/* log nearby */}

                <ScrollView style={{ paddingHorizontal: 15, paddingBottom: 10, marginTop: 10, backgroundColor: '#F5F5F5', marginLeft: -15, marginRight: -15 }}>

                    <View style={{ height: 130, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                        <Image source={Images.rwash1} style={{ height: 100, width: 130, position: 'relative', left: 10, top: -8, borderRadius: 9 }} />
                        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10, top: -10 }}>R*Wash Dipatiukur</Text>
                            <View style={{ flex: 1, left: -25, top: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                <Text style={{ alignSelf: 'center', color: 'red', top: 5, left: 5, marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 10 }}>12 km</Text>
                                <Image source={Images.iconPin} style={{ height: 15, width: 15, left: 10, top: -10 }} />
                            </View>


                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>Jl Dipatiukur No.5 Bandung </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>0881 21xx xxx </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'red' }} allowFontScaling={false}>( 5 Min) </Text>

                        </View>
                    </View>
                    <View style={{ height: 130, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                        <Image source={Images.rwash1} style={{ height: 100, width: 130, position: 'relative', left: 10, top: -8, borderRadius: 9 }} />
                        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10, top: -10 }}>R*Wash Dipatiukur</Text>
                            <View style={{ flex: 1, left: -25, top: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                <Text style={{ alignSelf: 'center', color: 'red', top: 5, left: 5, marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 10 }}>12 km</Text>
                                <Image source={Images.iconPin} style={{ height: 15, width: 15, left: 10, top: -10 }} />
                            </View>


                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>Jl Dipatiukur No.5 Bandung </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>0881 21xx xxx </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'red' }} allowFontScaling={false}>( 5 Min) </Text>

                        </View>
                    </View>

                    <View style={{ height: 130, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                        <Image source={Images.rwash1} style={{ height: 100, width: 130, position: 'relative', left: 10, top: -8, borderRadius: 9 }} />
                        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10, top: -10 }}>R*Wash Dipatiukur</Text>
                            <View style={{ flex: 1, left: -25, top: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                <Text style={{ alignSelf: 'center', color: 'red', top: 5, left: 5, marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 10 }}>12 km</Text>
                                <Image source={Images.iconPin} style={{ height: 15, width: 15, left: 10, top: -10 }} />
                            </View>


                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>Jl Dipatiukur No.5 Bandung </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>0881 21xx xxx </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'red' }} allowFontScaling={false}>( 5 Min) </Text>

                        </View>
                    </View>

                    <View style={{ height: 130, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                        <Image source={Images.rwash1} style={{ height: 100, width: 130, position: 'relative', left: 10, top: -8, borderRadius: 9 }} />
                        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10, top: -10 }}>R*Wash Dipatiukur</Text>
                            <View style={{ flex: 1, left: -25, top: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                <Text style={{ alignSelf: 'center', color: 'red', top: 5, left: 5, marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 10 }}>12 km</Text>
                                <Image source={Images.iconPin} style={{ height: 15, width: 15, left: 10, top: -10 }} />
                            </View>


                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>Jl Dipatiukur No.5 Bandung </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>0881 21xx xxx </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'red' }} allowFontScaling={false}>( 5 Min) </Text>

                        </View>
                    </View>

                    <View style={{ height: 130, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                        <Image source={Images.rwash1} style={{ height: 100, width: 130, position: 'relative', left: 10, top: -8, borderRadius: 9 }} />
                        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10, top: -10 }}>R*Wash Dipatiukur</Text>
                            <View style={{ flex: 1, left: -25, top: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                <Text style={{ alignSelf: 'center', color: 'red', top: 5, left: 5, marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 10 }}>12 km</Text>
                                <Image source={Images.iconPin} style={{ height: 15, width: 15, left: 10, top: -10 }} />
                            </View>


                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>Jl Dipatiukur No.5 Bandung </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>0881 21xx xxx </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'red' }} allowFontScaling={false}>( 5 Min) </Text>

                        </View>
                    </View>
                    <View style={{ height: 130, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                        <Image source={Images.rwash1} style={{ height: 100, width: 130, position: 'relative', left: 10, top: -8, borderRadius: 9 }} />
                        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
                            <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10, top: -10 }}>R*Wash Dipatiukur</Text>
                            <View style={{ flex: 1, left: -25, top: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                <Text style={{ alignSelf: 'center', color: 'red', top: 5, left: 5, marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 10 }}>12 km</Text>
                                <Image source={Images.iconPin} style={{ height: 15, width: 15, left: 10, top: -10 }} />
                            </View>


                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>Jl Dipatiukur No.5 Bandung </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>0881 21xx xxx </Text>
                            <Text style={{ paddingLeft: 10, top: 5, color: 'red' }} allowFontScaling={false}>( 5 Min) </Text>

                        </View>
                    </View>






                </ScrollView>

            </View>






        )
    }
}


export default NearbyNew;