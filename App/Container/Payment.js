import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Fonts } from '../Themes'
import Entypo from 'react-native-vector-icons/Entypo'
import { Avatar } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Images from '../Lib/Images'

class Payment extends Component {


    _onPressButton() {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'NO', onPress: () => console.warn('Tidak jadi keluar'), style: 'cancel' },
                //{text: 'YES', onPress:() => this.props.navigation.navigate('Login') }
                { text: 'YES', onPress: () => console.warn('Keluar') },
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        );
    };


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#edeff0' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'center' }} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Account')}style={{ width: '5%', alignSelf: 'center', justifyContent: 'center' }}>
                        <Entypo name='chevron-thin-left' size={30} color='white' />
                    </TouchableOpacity>
                    <View style={{ width: '95%', justifyContent: 'center' }}>
                        <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Nearby</Text>
                    </View>
                </View>   
                </View>


                        {/* OVO */}
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation:2 }} onPress={() => this.props.navigation.navigate('')}>
                      
                            <Image source={Images.iconOvo} style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>OVO</Text>
                            <Text style={{ alignSelf: 'center', marginLeft: 120, fontWeight: 'bold' }}>IDR 50.000,-</Text>
                       
                        
                        </TouchableOpacity>

                        {/* GoPay */}
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation:2 }} onPress={() => this.props.navigation.navigate('')}>
                       
                            <Image source={Images.iconGopay} style={{ width: 35, height: 35, resizeMode: 'contain', alignSelf: 'center' }} />
                            <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium }}>GoPay</Text>
                            <Text style={{ alignSelf: 'center', marginLeft: 107, fontWeight: 'bold' }}>IDR 50.000,-</Text>
                      
                        </TouchableOpacity>

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



export default Payment;