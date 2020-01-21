import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';
import { Avatar } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo'




class MyOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOrder: false,
            checked: false
        }


    }

    render() {
        const { checked } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <Modal
                    onBackdropPress={() => this.setState({ modalOrder: false })}
                    isVisible={this.state.modalOrder}
                >
                    <View style={{ height: 200, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 24 }}>Hello</Text>
                        <Text style={{ alignSelf: 'center', flexWrap: 'wrap', marginTop: 10 }}>Thank you for making payments</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 40, paddingBottom: 30 }}>
                            <TouchableOpacity style={{left: 70, height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.props.navigation.navigate('Home')}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center' }}>Ok</Text>
                                </View>
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                </Modal>

                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
           
                    <View style={{ width: '95%', justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>My Order</Text>
                    </View>
                   
                </View>
                {/*
                <View style={styles.container}>
                    <View style={{ width: 100, height: 180 }}>
                        <Image source={Images.noorder} style={{ marginBottom: 50, width: 300, height: 400, justifyContent: 'center', alignSelf: 'center' }} resizeMode='contain' />
                    </View>
                    <View style={styles.container}>
                        <Text style={{ fontFamily: Fonts.type.bold, fontSize: 23 }}>No Order Available </Text>
                        <Text style={styles.instruction}>find the nearest car wash</Text>
                        <Text style={styles.instructions}>and order now</Text>
                    </View>
                </View>
*/}
                {/* Car Wash */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 40, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }}>

                    <Text style={{ alignSelf: 'center', left: 70, fontFamily: Fonts.type.medium, fontSize: 22, fontWeight: 'bold' }}>R*Wash Dipatiukur</Text>
                </View>

                {/* User */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 50, borderRadius: 0, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: 'grey' }}>
                    <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center', height: 30, width: 30 }} size='large' />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 16 }}>Hamjah Huailid</Text>
                </View>

                {/* Date / time */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 50, borderRadius: 0, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: 'grey' }}>
                    <Image source={Images.iconCalender} style={{ width: 30, height: 30 }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 16 }}>THU, 24 October / 13.20.05</Text>
                </View>

                {/* Alamat */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 50, borderRadius: 0, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: 'grey' }}>
                    <Image source={Images.iconLocation} style={{ width: 30, height: 30 }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 16 }}>Jl. Dipatiukur No.5 Bandung</Text>
                </View>

                {/* Car */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 50, borderRadius: 0, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: 'grey' }}>
                    <Image source={Images.iconCarProfile} style={{ height: 30, width: 30 }} />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 16 }}>Honda Jazz / D 1514 BFF</Text>
                </View>

                {/* Slot */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 30, borderRadius: 0, marginTop: 0, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 0, borderColor: 'grey' }}>

                    <Text style={{ alignSelf: 'center', alignContent: 'flex-end', marginLeft: 280, fontFamily: Fonts.type.medium, fontSize: 18, fontWeight: 'bold' }}>Slot</Text>
                </View>
                {/* total */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 40, borderRadius: 0, marginTop: 0, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 0, borderColor: 'grey', justifyContent: 'space-between' }}>

                    <Text style={{ alignSelf: 'center', alignContent: 'flex-end', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 18, fontWeight: 'bold' }}>Total</Text>
                    <Text style={{ alignSelf: 'center', alignContent: 'flex-end', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 18, fontWeight: 'bold' }}>IDR 25.000,-</Text>
                </View>

                {/* Payment */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 30, borderRadius: 0, marginTop: 0, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 0, borderColor: 'grey' }}>

                    <Text style={{ alignSelf: 'center', alignContent: 'flex-end', marginLeft: 10, fontFamily: Fonts.type.medium, fontSize: 16, fontWeight: 'bold' }}>Payment</Text>
                </View>



                {/* Checkbox OVO */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 40, borderRadius: 0, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 0, borderColor: 'grey' }}>

                    <Checkbox
                        value="1"
                        status={checked === '1' ? 'checked' : 'unchecked'}

                        onPress={() => { this.setState({ checked: '1' }); }}
                    />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, top: 4, fontFamily: Fonts.type.medium, fontSize: 16 }}>OVO</Text>
                    <Image source={Images.iconOvo} style={{ width: 35, height: 35, left: 205, resizeMode: 'contain', alignSelf: 'center' }} />

                </View>


                {/* Checkbox Gopay */}
                <View style={{ backgroundColor: 'white', width: '100%', height: 40, borderRadius: 0, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 0, borderColor: 'grey' }}>

                    <Checkbox
                        value="2"
                        status={checked === '2' ? 'checked' : 'unchecked'}

                        onPress={() => { this.setState({ checked: '2' }); }}
                    />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, top: 4, fontFamily: Fonts.type.medium, fontSize: 16 }}>Gopay</Text>
                    <Image source={Images.iconGopay} style={{ width: 35, height: 35, left: 190, resizeMode: 'contain', alignSelf: 'center' }} />

                </View>


                {/* Checkbox Cash */}

                <View style={{ backgroundColor: 'white', width: '100%', height: 40, borderRadius: 0, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 0, borderColor: 'grey' }}>

                    <Checkbox
                        value="3"
                        status={checked === '3' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: '3' }); }}
                    />
                    <Text style={{ alignSelf: 'center', marginLeft: 10, top: 4, fontFamily: Fonts.type.medium, fontSize: 16 }}>Cash</Text>


                </View>

                {/* Button */}

                <View style={{ backgroundColor: 'transparent', left: 20, width: '100%', height: 80, borderRadius: 5, marginTop: 5, paddingVertical: 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={{ width: 180, height: 100, paddingHorizontal: 30, alignContent: 'center', left: -30, elevation: 10 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('Home')} >
                                <Text style={{ color: 'white', fontFamily: Fonts.type.bold, fontSize: 14 }}> Back </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    {/* Button Edit Profile */}
                    <View style={{ backgroundColor: 'transparent', width: 180, height: 100, paddingHorizontal: 30, alignContent: 'center', right: 50 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.setState({ modalOrder: true })} >
                                <Text style={{ color: 'white', fontFamily: Fonts.type.bold, fontSize: 14 }}> Place Order </Text>
                            </TouchableOpacity>
                        </LinearGradient>
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

export default MyOrder;