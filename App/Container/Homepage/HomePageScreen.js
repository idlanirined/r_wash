import React, { Component } from 'react'
import { View, Text, Image, Picker, StyleSheet, TextInput, PermissionsAndroid } from 'react-native'
import Images from '../../Lib/Images'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class HomePageScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobil: 'Honda Jazz',
            search: '',
            array: [
                { latitude: -6.897774, longitude: 107.613805, title: 'R*Wash Dipatiukur', desc: '7 min' },
                { latitude: -6.899035, longitude: 107.620709, title: 'Goten Wash', desc: '12 min'},
                { latitude: -6.902092, longitude: 107.615473, title: 'Learning Clean', desc: '20 min'}
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
        return (
            <View style={{ flex: 1 }}>
                {/* HEADER */}
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: '80%', width: '24%', alignSelf: 'center' }}>
                        <Image source={Images.rwash} style={{ marginLeft: 20, justifyContent: 'center', resizeMode: 'contain', height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', width: '20%', marginRight: 20, justifyContent: 'flex-end' }}>
                        <Entypo name='heart' size={24} color='white' style={{ marginRight: 20 }} />
                        <FontAwesome name='shopping-cart' size={24} color='white' />
                    </View>
                </View>

                {/* USER */}
                <View style={{ height: 60, width: '100%', borderBottomColor: 'gray', borderBottomWidth: 0, elevation: 0, paddingHorizontal: 20, flexDirection: 'row' }}>
                    <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center' }} />
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 15 }}>
                        <Text style={{ fontSize: 16, alignSelf: 'center' }}>Hi, ( User )</Text>
                        <Text style={{ fontSize: 12, alignSelf: 'center', color: '#00CCFF' }}>Honda Jazz</Text>
                    </View>
                    <Picker
                        selectedValue={this.state.mobil}
                        style={{ height: 50, width: 20, marginLeft: 15 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ mobil: itemValue })}>
                        <Picker.Item label="Honda Jazz" value="Honda Jazz" />
                        <Picker.Item label="Honda Mobilio" value="Honda Mobilio" />
                    </Picker>
                    <View style={{ width: '100%', justifyContent: 'center' }}>
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
                        followsUserLocation={true}
                        showsUserLocation={true}
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        zoomEnabled={true}
                        region={{
                            latitude: -6.9032739,
                            longitude: 107.573116,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        {this.state.array.map((item, index) => {
                            return (
                                <Marker
                                    coordinate={{ latitude: item.latitude, longitude: item.longitude }}
                                    title={item.title}
                                    description={item.desc}
                                // icon={image}
                                />
                            )
                        })}
                    </MapView>
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

export default HomePageScreen;