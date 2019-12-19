import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid, ScrollView } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';

class RwashDetail extends Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* Slide Show */}
                <ScrollView horizontal={true} style={{ position: 'absolute', backgroundColor: 'white', flexDirection: 'row', top: 0, left: 0, right: 0, height: '27%', width: 360 }}>
                    <View style={{ height: 180, width: 220, borderRadius: 0, backgroundColor: 'transparent', top: 0, left: 0, right: 0 }}>
                        <Image source={Images.rwash1} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 0 }} />
                    </View>
                    <View style={{ marginRight: 3 }}></View>
                    <View style={{ height: 180, width: 220, borderRadius: 0, backgroundColor: 'transparent', top: 0, left: 3, right: 3 }}>
                        <Image source={Images.rwash2} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 0 }} />
                    </View>
                    <View style={{ marginRight: 3 }} ></View>
                    <View style={{ height: 180, width: 220, borderRadius: 0, backgroundColor: 'transparent', top: 0, left: 3, right: 3 }}>
                        <Image source={Images.rwash3} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 0 }} />
                    </View>
                </ScrollView>

                {/*Deskripsi */}
                <View style={{ height: 130, top: 185, backgroundColor: 'white', marginTop: 10, borderRadius: 0 }}>

                    <View style={{ backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 22, fontWeight: 'bold' }}>R*Wash Dipatiukur</Text>
                    </View>

                    <View style={{ justifyContent: 'space-between', backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20}}>

                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>Jl Dipatiukiur No.5 Bandung</Text>
                        <Text style={{ alignSelf: 'center', left: 15, fontFamily: Fonts.type.medium, fontSize: 18, color: '#000000', fontWeight: 'bold' }}>IDR 25.000,-</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', width: '100%', height: 20, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                        <Text style={{ alignSelf: 'flex-start', left: -10, top: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>088121xxxxxx</Text>

                    </View>

                </View>

                {/*Facilities*/}
                <View style={{ height: 120, top: 185, backgroundColor: 'white', marginTop: 10, borderRadius: 0  }}>

                    <View style={{ backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 22, fontWeight: 'bold' }}>Facilities</Text>
                    </View>

                    <View style={{justifyContent: 'flex-start', backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>1. Working Space</Text>
                      
                    </View>

                    <View style={{ backgroundColor: 'white', width: '100%', height: 30, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                        <Text style={{ alignSelf: 'flex-start', left: -10, top: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>2. Mosque</Text>

                    </View>

                </View>



            </View>




        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default RwashDetail;