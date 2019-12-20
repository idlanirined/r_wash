import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid, ScrollView, Button } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';
import Modal from 'react-native-modal'


class RwashDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalbooking: false
        }
    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <Modal
                    onBackdropPress={() => this.setState({ modalbooking: false })}
                    isVisible={this.state.modalbooking}
                >
                    <View style={{ height: 200, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 24 }}>Booking</Text>
                        <Text style={{ alignSelf: 'center', flexWrap: 'wrap', marginTop: 10 }}>Slot 1</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 40, paddingBottom: 30 }}>
                            <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.setState({ modalbooking: true })}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center' }}>Yes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.setState({ modalbooking: false })}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center' }}>No</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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

                    <View style={{ justifyContent: 'space-between', backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>Jl Dipatiukiur No.5 Bandung</Text>
                        <Text style={{ alignSelf: 'center', left: 15, fontFamily: Fonts.type.medium, fontSize: 18, color: '#000000', fontWeight: 'bold' }}>IDR 25.000,-</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', width: '100%', height: 20, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                        <Text style={{ alignSelf: 'flex-start', left: -10, top: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>088121xxxxxx</Text>

                    </View>

                </View>

                {/*Facilities*/}
                <View style={{ height: 120, top: 185, backgroundColor: 'white', marginTop: 10, borderRadius: 0 }}>
                    <View style={{ backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 22, fontWeight: 'bold' }}>Facilities</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-start', backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>1. Working Space</Text>
                    </View>
                    <View style={{ backgroundColor: 'white', width: '100%', height: 30, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'flex-start', left: -10, top: -10, fontFamily: Fonts.type.medium, fontSize: 16, color: 'grey' }}>2. Mosque</Text>
                    </View>
                </View>

                {/*Date Time*/}
                <View style={{ height: 180, top: 170, backgroundColor: 'white', marginTop: 10, borderRadius: 0 }}>
                    <View style={{ backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', left: -10, fontFamily: Fonts.type.medium, fontSize: 22, fontWeight: 'bold' }}>Hours of operation</Text>
                    </View>


                    {/* Day */}
                    <View style={{ borderBottomWidth: 1, backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' }}>


                        <TouchableOpacity style={{ alignItems: 'center', height: 40, left: 10 }} >
                            <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 14 }}> Sun </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', height: 40, left: 0 }} >
                            <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 14 }}> Mon </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', height: 40, left: -10 }} >
                            <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 14 }}> Tue </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', height: 40, left: -10 }} >
                            <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 14 }}> Wed </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', height: 40, left: -15 }} >
                            <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 14 }}> Thu </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', height: 40, left: -20 }} >
                            <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 14 }}> Fri </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', height: 40, left: -20 }} >
                            <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 14 }}>Sat </Text>

                        </TouchableOpacity>

                    </View>

                    {/* Time */}

                    <View style={{ backgroundColor: 'white', width: '100%', height: 90, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' }}>
                        <View style={{ backgroundColor: 'white', width: '25%', height: 80, paddingVertical: 5, left: -15, flexDirection: 'row', paddingHorizontal: 20 }}>
                            <Image style={styles.inputIconGrey} source={Images.iconSunGrey} />
                        </View>

                        <View style={{ backgroundColor: 'white', width: '25%', height: 80, paddingVertical: 0, left: -10, flexDirection: 'column', paddingHorizontal: 20 }}>
                            <Text style={{ alignSelf: 'center', left: -10, top: 20, fontFamily: Fonts.type.medium, fontSize: 10, fontWeight: 'bold', color: 'grey' }}>Open</Text>
                            <Text style={{ alignSelf: 'center', left: -10, top: 20, fontFamily: Fonts.type.medium, fontSize: 15, fontWeight: 'bold' }}>8 AM</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: '25%', height: 80, paddingVertical: 5, left: 10, flexDirection: 'column', paddingHorizontal: 20 }}>
                            <Text style={{ alignSelf: 'center', left: 8, top: 15, fontFamily: Fonts.type.medium, fontSize: 10, fontWeight: 'bold', color: 'grey' }}>Close</Text>
                            <Text style={{ alignSelf: 'center', left: 8, top: 15, fontFamily: Fonts.type.medium, fontSize: 15, fontWeight: 'bold' }}>6 PM</Text>
                        </View>

                        <View style={{ backgroundColor: 'white', width: '25%', height: 80, paddingVertical: 5, right: -15, flexDirection: 'row', paddingHorizontal: 20 }}>
                            <Image style={styles.inputIconBlack} source={Images.iconSunBlack} />
                        </View>

                    </View>


                </View>

                {/* Booking */}
                <View style={{ backgroundColor: 'white', top: 170, width: '100%', height: 100, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between' }}>
                    <Text style={{ alignSelf: 'center', top: -40, left: 100, fontFamily: Fonts.type.medium, fontSize: 22, fontWeight: 'bold' }}>Booking</Text>

                    <View style={{ backgroundColor: 'transparent', left: -110, width: '100%', height: 80, borderRadius: 5, marginTop: 5, paddingVertical: 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <View style={{ width: 150, height: 100, paddingHorizontal: 30, alignContent: 'center', left: -30, elevation: 10 }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.setState({ modalbooking: true })} >
                                    <Text style={{ color: 'white', fontFamily: Fonts.type.bold, fontSize: 14 }}> Slot 1 </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>

                        {/* Button Edit Profile */}
                        <View style={{ backgroundColor: 'transparent', width: 150, height: 100, paddingHorizontal: 30, alignContent: 'center', right: 80 }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('')} >
                                    <Text style={{ color: 'white', fontFamily: Fonts.type.bold, fontSize: 14 }}> Slot 2 </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>

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
    inputIconGrey: {
        width: 80,
        height: 80,
        left: -22,
        top: -5,
        alignSelf: 'center',
        justifyContent: 'center',
        tintColor: 'grey'
    },

    inputIconBlack: {
        width: 80,
        height: 80,
        left: -22,
        top: -3,
        alignSelf: 'center',
        justifyContent: 'center',
        tintColor: 'black'
    },
});

export default RwashDetail;