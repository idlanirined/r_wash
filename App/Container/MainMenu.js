import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';

class MainMenu extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* Header */}
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: '80%', width: '24%', alignSelf: 'center' }}>
                        <Image source={Images.rwash} style={{ marginLeft: 20, marginTop: 5, justifyContent: 'center', resizeMode: 'contain', height: '85%', width: '85%' }} />
                    </View>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', width: '20%', marginRight: 20, justifyContent: 'flex-end' }}>
                        <Entypo name='heart' size={24} color='white' style={{ marginRight: 10 }} />
                        <FontAwesome name='shopping-cart' size={24} color='white' />
                    </View>
                </View>

                {/* User */}
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', borderBottomColor: 'gray', borderBottomWidth: 0, elevation: 0, paddingHorizontal: 20, flexDirection: 'row' }}>
                    <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center', height: 35, width: 35 }}></Avatar>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 5 }}>
                        <Text style={{ fontSize: 12, alignSelf: 'flex-start', fontWeight: 'bold' }}>Hamjah</Text>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: '#000000' }}>Balance IDR 50.000</Text>
                    </View>
                    {/* Button TOP-UP*/}
                    <View style={{ alignSelf: 'center', flex: 1, width: '20%', justifyContent: 'flex-end' }}>

                        <View style={{ width: 100, paddingHorizontal: 10, alignSelf: 'flex-end' }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#FFFFFF', '#FFFFFF']} style={{ borderRadius: 10, marginVertical: 12, justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('HomeNavigation')} >
                                    <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 15, alignSelf: 'center', fontWeight: 'bold' }}> Top Up </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>

                </View>

                {/* Konten */}

                <View style={styles.container}>
                  
                    <Text style={{ flexDirection: 'row', }}>Car Wash Arround</Text>
                     <TextInput
                        style={styles.inputs}
                        placeholder="City"
                        underlineColorAndroid='transparent'
                     
                     ></TextInput>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FAFAFA',
        flex: 1,
    },
});

export default MainMenu;