import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, Image } from 'react-native';

import { Fonts } from '../Themes';
import Images from '../Lib/Images'


class Nearby extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Nearby</Text>
                </View>

                {/* Content  */}
                <ScrollView style={{ paddingHorizontal: 15, paddingBottom: 10, marginTop: 10, backgroundColor: '#F5F5F5', marginLeft: -15, marginRight: -15 }}>
                    <View style={{ height: 200, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                        <Image source={Image.Rwash1}></Image>
                        <Text>hhkkkkkkkkk</Text>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
        tintColor: '#30dae3'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
})


export default Nearby;