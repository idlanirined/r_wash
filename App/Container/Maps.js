import React, { Component, useState, useEffect } from 'react'
import { View, Text, Image, Picker, StyleSheet, TextInput, TouchableOpacity,PermissionsAndroid } from 'react-native'
import { Fonts } from '../Themes'

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-elements';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'


import Geolocation from '@react-native-community/geolocation';


import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Images from '../Lib/Images'
let myMap;


//create a component



class Maps extends Component {
     
    constructor(props) {
        super(props)
        this.state = {
            mobil: 'Honda Jazz',
            search: '',
            array: [
                { latitude: -6.897774, longitude: 107.613805, title: 'R*Wash Dipatiukur', desc: '7 min' },
              { latitude: -6.899035, longitude: 107.620709, title: 'Goten Wash', desc: '12 min' },
              { latitude: -6.902092, longitude: 107.615473, title: 'Learning Clean', desc: '20 min' },
                { latitude: -6.904738, longitude: 107.588264, title: 'Car Wash', desc: '23 min' }
            ],
        }
    }

    componentDidMount() {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ).then(granted => {
            //   alert(granted) 
        });
        Geolocation.getCurrentPosition(info => console.log(info));
    }

    

    render() {

        const renderDetailMarker = () => (
            <View 
                style={{
                    position: 'absolute',
                    bottom: 0,
                    padding: 10,
                    width: '100%',
                    height:'40%',
                    flexDirection: 'row',
                    backgroundColor: '#FFFFFF'
                }} 
            >

                <Image 
                   // source={{ uri: 'https://serpongku.com/wp-content/uploads/2018/08/Eka-Hospital-BSD-City.jpg'}}
                   source = {Images.rwash1} 
                   resizeMode= "cover"
                    style={{width: 140, height: 100, borderRadius: 10}}
                />

                <View
                style={{ flex:1, paddingLeft: 5, flexDirection: 'column'}}
                >
                    <Text style={{fontWeight: 'bold', alignItems: 'center', fontSize: 18, paddingLeft: 10}}>R*Wash Dipatiukur</Text>
                    <Text style={{paddingLeft: 10}} allowFontScaling={false}>No Telp </Text>

                </View>

            </View>
        )

     


        return (
            <View style={{ flex: 1 }}>
                {/* HEADER */}
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: '80%', width: '24%', alignSelf: 'center' }}>
                        <Image source={Images.rwash} style={{ marginLeft: 20, marginTop: 5, justifyContent: 'center', resizeMode: 'contain', height: '85%', width: '85%' }} />
                    </View>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', width: '20%', marginRight: 20, justifyContent: 'flex-end' }}>
                        <Entypo name='heart' size={24} color='white' style={{ marginRight: 10 }} />
                        <FontAwesome name='shopping-cart' size={24} color='white' />
                    </View>
                </View>

                {/* USER */}
                <View style={{ height: 60, width: '100%', borderBottomColor: 'gray', borderBottomWidth: 0, elevation: 0, paddingHorizontal: 20, flexDirection: 'row' }}>
                    <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center' , height: 35, width:35}} />
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 5 }}>
                        <Text style={{ fontSize: 12, alignSelf: 'center', fontWeight: 'bold' }}>Hi, Hamjah</Text>
                        <Text style={{ fontSize: 10, alignSelf: 'center', color: '#00CCFF', fontWeight: 'bold'}}>Honda Jazz</Text>
                    </View>
                    <Picker
                        selectedValue={this.state.mobil}
                        style={{ height: 60, width: 30, marginLeft: 15 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ mobil: itemValue })}>
                        <Picker.Item label="Honda Jazz" value="Honda Jazz" />
                        <Picker.Item label="Honda Mobilio" value="Honda Mobilio" />
                        <Picker.Item label="Alphard" value="Alphard" />
                    </Picker>
                    <View style={{ height:30, width: 350, justifyContent: 'center', marginTop:15 }}>
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

                <View style={{ flex: 1 }}>
                    <MapView
                        ref={ref => myMap = ref}
                        followsUserLocation={true}
                        showsUserLocation={true}
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        zoomEnabled={true}
                        region={{
                            latitude: -6.9198966,
                            longitude: 107.6197455,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}

                     
                    >
                        {this.state.array.map((item, index) => {
                            return (
                                <Marker
                                    coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                                    title={item.title}
                                    description={item.desc}>
                                <Image source={Images.iconpinrwash2}
                                style={{width:50, height:50}}/>
                                
                                </Marker>
                            )
                        })}
                    </MapView>
                        {renderDetailMarker()}  
                
                </View>
                <View  style={{ backgroundColor: 'transparent', width: '100%', height: 50, borderRadius: 5, marginBottom: 20, paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, position: 'absolute', bottom: 0, }}>
                    <View style={{ width: 180, height: 100, paddingHorizontal: 30 , left: 17.5, top: -20}}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#E8E8E8', '#E8E8E8']} style={{ borderBottomLeftRadius: 20, borderTopLeftRadius: 20, marginVertical: 20, justifyContent: 'flex-end', elevation: 2 }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40 }} onPress={() => this.props.navigation.navigate('Filtersort')} >
                            <MaterialCommunityIcons name='filter-variant' size={20} style={{left:-10}}/>
                                <Text style={{ color: 'Black', fontFamily: Fonts.type.bold, fontSize: 10 }}>Filter&Sort </Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                    <View style={{ backgroundColor: 'transparent', width: 180, height: 130, paddingHorizontal: 30 , right: 42.5, top: -20}}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#E8E8E8', '#E8E8E8']} style={{ borderBottomRightRadius: 20, borderTopRightRadius: 20, marginVertical: 20, justifyContent: 'flex-end', elevation: 2 }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40 }} onPress={() => this.props.navigation.navigate('NearbyNew')} >
                            <Entypo name='list' size={22} color={'black'} style={{left:-10}} />
                                <Text style={{ color: 'Black', fontFamily: Fonts.type.bold, fontSize: 10 }}> List View </Text>
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

    inputIcon2: {
        width: 20,
        height: 20,
        marginLeft: 0,
        justifyContent: 'flex-start',
        tintColor: 'black',
        right: 10
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