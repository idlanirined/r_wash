import React, { Component, useState } from 'react'
import { Dimensions, ActivityIndicator, TouchableOpacity, View, Text, Image, Picker, StyleSheet, TextInput, PermissionsAndroid, Platform, Alert } from 'react-native'
import Images from '../../Lib/Images'
import LinearGradient from 'react-native-linear-gradient'
import Carousel from 'react-native-snap-carousel';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Avatar } from 'react-native-elements';
import { request, PERMISSIONS } from 'react-native-permissions';
import MapView, { PROVIDER_GOOGLE, Marker, Polygon, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Entypo';
import { Fonts } from '../../Themes';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal'
let myMap;

//const [marker, setMarker] = useState ({})

class HomePageScreen extends Component {
     
    constructor(props) {
        super(props)
        this.state = {
            modalbooking: false,
            mobil: 'Honda Jazz',
            search: '',
            markers: [
                { pin: Images.iconpinrwash2}
            ],
            coordinates: [
                { latitude: -6.897774, longitude: 107.613805, title: 'R*Wash Dipatiukur', desc: '7 min', src: Images.rwashimage, iconpin: Images.iconPin, jarak: '12Km', alamat: 'Jl.Dipatiukur No.5 Bandung', notlp: '082127078200', price: 'IDR 25.000,-', booking: 'Booking', slot: 'Slot 1', waktu: '7 min' },
                { latitude: -6.899035, longitude: 107.620709, title: 'Goten Wash', desc: '12 min', src: Images.goten, iconpin: Images.iconPin, jarak: '17Km' },
                { latitude: -6.902092, longitude: 107.615473, title: 'Learning Clean', desc: '20 min', src: Images.rwashimage, iconpin: Images.iconPin, jarak: '20Km'},
                { latitude: -6.904738, longitude: 107.588264, title: 'Car Wash', desc: '23 min', src: Images.rwashimage, iconpin: Images.iconPin, jarak: '25Km' }
            ],
        }
    }
    
    componentDidMount() {
        this.requestLocationPermission();
    }

    requestLocationPermission = async () => {
        if(Platform.OS === 'android'){
         var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
         console.log('Android: ' + response);

         if(response === 'granted'){
             this.locateCurrentPosition();
         }
        } else {
          var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
          console.log('IPhone: ' + response);

          if(response === 'granted'){
             this.locateCurrentPosition();
        }
    }
}

    locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position));

                let initialPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }

                this.setState({initialPosition});
            }
            )
            
    }


    onCarouselItemChange = (index) => {
        let location = this.state.coordinates[index];

        this.myMap.animateToRegion({
            latitude: location.latitude,
            longitude:location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })

        this.state.markers[index].showCallout()
    }

    onMarkerPressed = (location, index) => {
        this.myMap.animateToRegion({
            latitude: location.latitude,
            longitude:location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });

        this._carousel.snapToItem(index);
    }

    renderCarouselItem = ({item}) =>
        <View style={styles.cardCarousel}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('RwashDetail')}> 
        <Image style={styles.cardImage} source={item.src}/>
        </TouchableOpacity>
        <Image style={styles.cardPin} source={item.iconpin}/>
        <Text style={styles.cardJarak}>{item.jarak}</Text>
        <Text style={styles.cardAlamat}>{item.alamat}</Text>
        <Text style={styles.cardNotlp}>{item.notlp}</Text>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <Text style={styles.cardBooking}>{item.booking}</Text>
        <View style={{ width: 150, height: 100, paddingHorizontal: 30, alignContent: 'center', left: -30, elevation: 10, top:-20 }}>
                        <Text style={styles.cardSlot}>{item.slot}</Text>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.setState({ modalbooking: true })} >
                                    <Image source={Images.iconwaktu} style={{width:20, height:20, alignSelf:'flex-start', top:-2, left:10}}></Image>
                                    <Text style={styles.cardWaktu}>{item.waktu}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
        </View>

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
                    <Text style={{paddingLeft: 10}} allowFontScaling={false}>No Telp nn </Text>

                </View>

            </View>
        )

     


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
                            <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }}onPress={() => this.props.navigation.navigate('MyOrder')}>
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

                <View style={styles.container1}>
                <View style={{ flex: 1 }}>
                    <MapView
                        ref={map => this.myMap = map}
                        showsUserLocation={true}
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        zoomEnabled={true}
                        initialRegion={this.state.initialPosition}>

                        {this.state.coordinates.map((item, index, markers) => {
                            return (
                                <Marker
                                    draggable
                                    key={item.title}
                                    ref={ref => this.state.markers[index] = ref}
                                    onPress={() => this.onMarkerPressed(item, index)}
                                    coordinate={{ latitude: item.latitude, longitude: item.longitude }}>
                                    <Image source={Images.iconpinrwash2} style={{width:50, height:50}}/>
                                
                                <Callout style={{width:100, height:30, alignItems:'center'}}>       
                                    <Text>{item.title}</Text>
                                    <Text>{item.desc}</Text>
                                </Callout>
                                
                            </Marker>
                            )
                        })}
                    </MapView>
                        {/*renderDetailMarker() */}  
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.coordinates}
                            containerCustomStyle={styles.carousel}
                            renderItem={this.renderCarouselItem}
                            sliderWidth={Dimensions.get('screen').width}
                            itemWidth={350}
                            removeClippedSubviews={true}
                            onSnapToItem={(index) => this.onCarouselItemChange(index)}
            />
                    
                        </View>
                </View>
            
            
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container1: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 110
    },
    container: {
        flex:1,
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
    carousel: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 5,
    },
    cardCarousel: {
        backgroundColor: 'white',
        height: 200,
        width: 350,
        padding: 10,
        borderRadius: 7,
    },
    cardImage: {
        height: 100,
        width:135,
        marginTop:-20,
        borderRadius: 5,
    },
    cardTitle: {
        paddingLeft: 155,
        fontSize: 20,
        fontFamily: Fonts.type.bold
    },
    cardPin: {
        height: 20,
        width:20,
        marginTop: -80,
        marginLeft: 150
    },
    cardJarak: {
        paddingLeft: 173,
        fontSize: 14,
        marginTop:-17,
        color: 'red',
        fontFamily: Fonts.type.regular
    },
    cardAlamat: {
        paddingLeft: 155,
        fontSize: 14,
        marginTop: 5,
        color: '#808080',
        fontFamily: Fonts.type.regular
    },
    cardNotlp: {
        paddingLeft: 155,
        fontSize: 14,
        marginTop: 3,
        color: '#808080',
        fontFamily: Fonts.type.regular
    },
    cardPrice: {
        paddingLeft: 230,
        fontSize: 18,
        marginTop: 7,
        color: 'black',
        fontFamily: Fonts.type.bold
    },
    cardBooking: {
        paddingLeft: 130,
        fontSize: 18,
        marginTop: 10,
        color: 'red',
        fontFamily: Fonts.type.bold
    },
    cardSlot: {
        fontFamily: Fonts.type.bold,
        paddingLeft: 25,
        paddingTop:15,
        marginBottom:-20
        
    },
    cardWaktu: {
        fontFamily: Fonts.type.bold,
        paddingLeft: 25,
        marginTop:-20,
        color: 'white'
        
    },
})

export default HomePageScreen;