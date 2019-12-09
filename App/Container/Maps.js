import React, { Component, useState, useEffect } from 'react'
import {ActivityIndicator, View, Text, Image, Picker, StyleSheet, TextInput, PermissionsAndroid } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


//create a component

const initialState = {
    latitude: -6.9198966,
    longitude: 107.6197455,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

}

const Maps = () => {
    const [curentPosition, setCurentPosition] = useState(initialState );

    useEffect(() => {
        setCurentPosition({
            ...curentPosition,
            latitude: -6.9198966,
            longitude: 107.6197455,
        })
    }, [])
    return(

        <MapView 
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            showsUserLocation
            initialRegion={curentPosition}
            />
    ) ;
};

export default Maps;