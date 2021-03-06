import React, { Component } from 'react';
import { Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Icon, Container, Header,Left,Right, Content, Button, } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Appbar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Images from '../Lib/Images'


class NearbyNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrayDummy: [
                { src: Images.rwash1, tempat: 'R*Wash Dipatiukur', jarak: '12 Km', jalan: 'Jl Dipatiukur No.5 Bandung', tlp: '088121xxxxxx', waktu: '(5 min)' },
                { src: Images.rwash2, tempat: 'R*Wash Dipatiukur', jarak: '12 Km', jalan: 'Jl Dipatiukur No.5 Bandung', tlp: '088121xxxxxx', waktu: '(5 min)' },




            ],
            modalvehicle: false
        }
    }



    render() {
        return (
            
            <View style={{ flex: 1, backgroundColor: '#F5F5f5' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Entypo name='chevron-thin-left' size={30} color='white' />
                    </TouchableOpacity>
                    <View style={{ width: '95%', justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Nearby</Text>
                    </View>
                   
                </View>
                </View>
            
                

                {/* log nearby */}

                <ScrollView style={{ paddingHorizontal: 15, paddingBottom: 10, marginTop: 0, backgroundColor: '#F5F5F5', marginLeft: -15, marginRight: -15 }}>
                    {this.state.arrayDummy.map((item, index) => {
                        return (
                            <TouchableOpacity style={{ height: 130, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }} onPress={() => this.props.navigation.navigate('RwashDetail')}>
                                <Image source={item.src} style={{ height: 100, width: 130, position: 'relative', left: 10, top: -8, borderRadius: 9 }} />
                                <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10, top: -10 }}>{item.tempat}</Text>
                                    <View style={{ flex: 1, left: -25, top: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                                        <Text style={{ alignSelf: 'center', color: 'red', top: 5, left: 5, marginLeft: 55, fontFamily: Fonts.type.medium, fontSize: 10 }}>{item.jarak}</Text>
                                        <Image source={Images.iconPin} style={{ height: 15, width: 15, left: 10, top: -10 }} />
                                    </View>
                                    <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>{item.jalan} </Text>
                                    <Text style={{ paddingLeft: 10, top: 5, color: 'grey' }} allowFontScaling={false}>{item.tlp} </Text>
                                    <Text style={{ paddingLeft: 10, top: 5, color: 'red' }} allowFontScaling={false}>{item.waktu} </Text>
                                </View>
                            </TouchableOpacity>
                        )

                        })}
                </ScrollView>

                <View style={{ backgroundColor: 'transparent', width: '100%', height: 50, borderRadius: 5, marginBottom: 20, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, position: 'absolute', bottom: 0, }}>
                    <View style={{ width: 180, height: 100, paddingHorizontal: 30, left: 17.5, top: -20 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#E8E8E8', '#E8E8E8']} style={{ borderBottomLeftRadius: 20, borderTopLeftRadius: 20, marginVertical: 20, justifyContent: 'flex-end', elevation: 2 }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40 }} onPress={() => this.props.navigation.navigate('Filtersort')} >
                                <Image style={styles.inputIcon} source={Images.iconFilterBlack} />
                                <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 10 }}>Filter&Sort </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={{ backgroundColor: 'transparent', width: 180, height: 130, paddingHorizontal: 30, right: 42.5, top: -20 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#E8E8E8', '#E8E8E8']} style={{ borderBottomRightRadius: 20, borderTopRightRadius: 20, marginVertical: 20, justifyContent: 'flex-end', elevation: 2 }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40 }} onPress={() => this.props.navigation.navigate('Maps')} >
                                <Image style={styles.inputIcon} source={Images.iconMapView} />
                                <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 10 }}> Maps View </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </View>

            </View>






        )
    }
}

const styles = StyleSheet.create({

    inputIcon: {
        width: 20,
        height: 20,
        marginLeft: 0,
        justifyContent: 'flex-start',
        tintColor: 'black',
        right: 10
    },


});


export default NearbyNew;