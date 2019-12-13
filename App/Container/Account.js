import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Images from '../Lib/Images'


class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalLogout: false
        }
    }


    _onPressButton() {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'NO', onPress: () => console.warn('Tidak jadi keluar'), style: 'cancel' },
                //{text: 'YES', onPress:() => this.props.navigation.navigate('Login') }
                {
                    text: 'YES', onPress: () => {
                        return this.props.navigation.navigate('Login');
                    }
                }
            ],

            //clicking out side of alert will not cancel
        );
    };


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
                <View style={{ height: 120, width: '100%', backgroundColor: '#00CCFF' }}>
                </View>
                <View style={{ justifyContent: 'space-between', flex: 1, paddingBottom: 20 }}>
                    <View style={{ paddingHorizontal: 20, marginTop: -80, elevation: 2 }}>
                        <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, alignSelf: 'center', color: 'white' }}>Account</Text>

                        {/* Account */}
                        <View style={{ backgroundColor: 'white', width: '100%', height: 140, borderRadius: 5, marginTop: 5, paddingVertical: 5 }}>
                            <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center' }} size='large' />
                            <Text style={{ fontFamily: Fonts.type.bold, marginTop: 10, alignSelf: 'center', fontSize: 16 }}>HAMJAH HUAILID</Text>
                            <Text style={{ fontFamily: Fonts.type.light, alignSelf: 'center', fontSize: 12 }}>082240206592</Text>
                        </View>

                        {/* Profile */}
                       
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }} onPress={() => this.props.navigation.navigate('Profile')}>

                            <Image source={Images.iconAccount} style={{ width: 20, height: 20, resizeMode: 'contain', alignSelf: 'center' }} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }} >Profile</Text>

                        </TouchableOpacity>

                        {/* Payment */}
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }} onPress={() => this.props.navigation.navigate('Payment')}>

                            <Fontisto name='wallet' size={20} style={{ alignSelf: 'center' }} color={'gray'} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>Payment</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{ paddingHorizontal: 20, }}>
                        {/* Logout */}
                        {/* Logout */}
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20 }} onPress={() => this.setState({ modalLogout: true })}>
                            <Fontisto name='power' size={20} style={{ alignSelf: 'center' }} color={'gray'} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>Logout</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default Account;