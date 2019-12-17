import React, { Component, useState, useEffect } from 'react'
import { ActivityIndicator, View, Text, Image, Picker, StyleSheet, TextInput, PermissionsAndroid } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-elements';

import Geolocation from '@react-native-community/geolocation';


import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Images from '../Lib/Images'


//create a component

const initialState = {
    latitude: -6.9198966,
    longitude: 107.6197455,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

}

const Maps = () => {
    const [curentPosition, setCurentPosition] = useState(initialState);

    useEffect(() => {
        setCurentPosition({
            ...curentPosition,
            latitude: -6.9198966,
            longitude: 107.6197455,
        })
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ height: '80%', width: '24%', alignSelf: 'center' }}>
                    < Image source={Images.rwash} style={{ marginLeft: 20, marginTop: 5, justifyContent: 'center', resizeMode: 'contain', height: '85%', width: '85%' }} />
                </View>

                <View style={{ alignSelf: 'center', flexDirection: 'row', width: '20%', marginRight: 20, justifyContent: 'flex-end' }}>
                    <Entypo name='heart' size={24} color='white' style={{ marginRight: 10 }} />
                    <FontAwesome name='shopping-cart' size={24} color='white' />
                </View>



            </View>

            <View style={{ height: 60, width: '100%', borderBottomColor: 'gray', borderBottomWidth: 0, elevation: 0, paddingHorizontal: 20, flexDirection: 'row' }}>
                <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center', height: 35, width: 35 }} />
                <View style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 5 }}>
                    <Text style={{ fontSize: 12, alignSelf: 'center', fontWeight: 'bold' }}>Hi, Hamjah</Text>
                    <Text style={{ fontSize: 10, alignSelf: 'center', color: '#00CCFF', fontWeight: 'bold' }}>Honda Jazz</Text>
                </View>

           
                <View style={{ height:30, width: 350, justifyContent: 'center', marginTop:15, left: 40 }}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="Search.."
                                underlineColorAndroid='transparent'
                                onChangeText={(search) => this.setState({ search })}
                            />
                            <AntDesign name='search1' size={20} style={{ marginRight: 5 }} />
                        </View>
                    </View>
            </View>


            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                showsUserLocation={true}
                followsUserLocation={true}
                zoomEnabled={true}
                initialRegion={curentPosition}


            />
        </View>


    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: '55%',
        height: 30,
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
        borderBottomColor: '#FAFAFA',
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default Maps;