import React, { Component } from 'react';
import { Text, Image, TextInput, Picker, StyleSheet, TouchableOpacity, PermissionsAndroid, ScrollView } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

class MainMenu extends Component {

    constructor() {
        super()
        this.state= {
            typevehicle: [
                'Type Vehicle',
                'Small Car',
                'Sedan',
                'Mini Bus',
                'VAN'
            ],
            Vehiclebrand: '',
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
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
                <View style={{ height: 100, width: '100%', backgroundColor: '#00CCFF', borderBottomColor: 'gray', borderBottomWidth: 0, elevation: 0, paddingHorizontal: 20, flexDirection: 'row' }}>
                    <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center', height: 57, width: 57 }}size='large' />
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 5 }}>
                        <Text style={{ fontSize: 16, alignSelf: 'flex-start', fontFamily: Fonts.type.bold, paddingLeft:5 }}>Hamjah</Text>
                      {/*  <Text style={{ fontSize: 14, alignSelf: 'center', color: '#808080', fontFamily: Fonts.type.regular , paddingLeft:5 }}>Hamjah</Text> */}
                    </View>
                    {/* Button TOP-UP*/}
                    <View style={{ alignSelf: 'center', flex: 1, width: '20%', justifyContent: 'flex-end'}}>

                        <View style={{ width: 100, paddingHorizontal: 0, alignSelf: 'flex-end' }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#FFFFFF', '#FFFFFF']} style={{ borderRadius: 10, marginVertical: 12, justifyContent: 'flex-end', elevation: 10 }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('Payment')} >
                                    <Image source={Images.iconTopUp} style={{height:20, width:20, position:'absolute', marginLeft:13, alignSelf:'flex-start'}}></Image>
                                    <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 15, alignSelf: 'center', marginLeft:20 }}> Top Up </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>

                </View>

                {/* Konten */}

                <View style={styles.container}>
               

               {/* Car wash arround */}
                <Text style={{paddingBottom:5, paddingLeft:28, fontFamily: Fonts.type.regular, color: 'grey'}}>Car Wash Arround</Text>
                <View style={styles.inputContainer}> 
                    <Image source={Images.iconArround} style={{width:20, height:20}}/>
                    <TextInput style={styles.inputs}
                        placeholder="City"
                        underlineColorAndroid='transparent'    
                    />
                </View>

                  {/* Pilih Mobil */}
                <Text style={{paddingBottom:5, fontFamily: Fonts.type.regular, color: 'grey', paddingTop: 10, paddingLeft:30}}>Vehicle</Text>
                <View style={styles.inputContainer}>
                <Image source={Images.iconCarProfile} style={{width:25, height:25}}/>
                    <Picker
                        selectedValue={this.state.vehicle}
                        style={{ width: '90%'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({vehicle: itemValue})
                          }
                    
                    >
                        <Picker.Item label="Vehicle" value="car" />
                        <Picker.Item label="Honda Jazz" value="jazz" />
                        <Picker.Item label="Honda Civic" value="civic" />
                        <Picker.Item label="Toyota Avanza" value="avanza" />
                        <Picker.Item label="Alphard" value="alphard" />
 
                    </Picker>
                </View>

                  {/* Filter */}

                  <Text style={{paddingBottom:5, fontFamily: Fonts.type.regular, color: 'grey', paddingTop: 10, paddingLeft:30}}>Filter</Text>
                <View style={styles.inputContainer}>
                <Image source={Images.iconFilter} style={{width:23, height:23}}/>
                    <Picker
                        selectedValue={this.state.filter}
                        style={{ width: '91%'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({filter: itemValue})
                          }
                    
                    >
                        <Picker.Item label="Nearby" value="nearby" />
                        <Picker.Item label="Lowest Price" value="price" />
                        <Picker.Item label="Fastest" value="fastest" />
 
                    </Picker>
                </View>


                            {/* Search */}
                <Text style={{paddingTop:10, paddingLeft:32, fontFamily: Fonts.type.regular, color: 'grey'}}>Search</Text>
                <View style={styles.inputContainer}>
                <Image source={Images.iconSearch} style={{width:23, height:23}}/>
                    <TextInput style={styles.inputs}
                        placeholder="Search by Car Wash Name"
                        underlineColorAndroid='transparent'    
                    />
                </View>
</View>
                 

                 {/* Button search */}
               
                <View style={{ width: 325, paddingHorizontal: 10, alignSelf:'center', marginTop: -25}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#00CCFF', '#00CCFF']} style={{elevation: 3, borderRadius: 29, marginVertical: 30, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height: 60}} onPress={()=> this.props.navigation.navigate('NearbyNew')}>
                            <Text style={{color: 'white', fontFamily: Fonts.type.bold, fontSize: 18}}> Search Car Wash </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {/* Promo */}
                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: Fonts.type.bold, fontSize:20, marginTop:-10}}>Ongoing Promo</Text>
                </View>
                <View style={{flexDirection: 'row', paddingLeft:20}}>
                <Text style={{fontFamily: Fonts.type.regular, fontSize:14, marginTop:5, color:'#808080'}}>Always save more with our special offers</Text>
                    <Image source={Images.iconNextBiru} style={{width:20, height:20, marginLeft:70}}></Image>
                </View>
                <ScrollView horizontal={true} style={{flexDirection:'row', paddingLeft:20}}>
                  <View style={{marginRight:16}}>
                      <Image source={Images.promo1} style={{width: 180, height:130, marginTop:20, borderRadius:5}}></Image> 
                </View>
                  <View style={{marginRight:16}}>
                  <Image source={Images.promo2} style={{width: 240, height:130, marginTop:20, borderRadius:5}}></Image>
                </View>
                  <View style={{marginRight:16}}>
                    <View style={{backgroundColor: '#00CCFF', height: 130, width: 160, marginTop:20, borderRadius:5}}></View>
                        <Text></Text> 
                </View>   
                </ScrollView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
    },
    inputs: {
        height: 45,
        marginLeft: 10,
        paddingLeft: -5,
        borderBottomColor: '#FAFAFA',
        flex: 1,
        fontSize: 13,
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        width: 350,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputIcon: {
        width: 25,
        height: 25,
        marginLeft: 0,
        justifyContent: 'center',
        tintColor: 'grey'
    },

    inputSearch: {
        borderColor: 'gray',
        borderWidth: 1,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width: 290,
        height:50,
        flexDirection: 'row',
        alignItems:'center'
    },
    label: {
        paddingLeft: 10,
    }
});

export default MainMenu;