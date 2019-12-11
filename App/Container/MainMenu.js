import React, { Component } from 'react';
import { Text, Image, TextInput, Picker, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';

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
                <View style={{ height: 100, width: '100%', backgroundColor: '#00CCFF', borderBottomColor: 'gray', borderBottomWidth: 0, elevation: 0, paddingHorizontal: 20, flexDirection: 'row' }}>
                    <Avatar rounded source={Images.avatar} containerStyle={{ alignSelf: 'center', height: 57, width: 57 }}size='large' />
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 5 }}>
                        <Text style={{ fontSize: 16, alignSelf: 'flex-start', fontFamily: Fonts.type.bold, paddingLeft:5 }}>Hamjah</Text>
                        <Text style={{ fontSize: 14, alignSelf: 'center', color: '#808080', fontFamily: Fonts.type.regular , paddingLeft:5 }}>Balance IDR 50.000</Text>
                    </View>
                    {/* Button TOP-UP*/}
                    <View style={{ alignSelf: 'center', flex: 1, width: '20%', justifyContent: 'flex-end' }}>

                        <View style={{ width: 100, paddingHorizontal: 0, alignSelf: 'flex-end' }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#FFFFFF', '#FFFFFF']} style={{ borderRadius: 10, marginVertical: 12, justifyContent: 'flex-end' }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('HomeNavigation')} >
                                    <Text style={{ color: 'black', fontFamily: Fonts.type.bold, fontSize: 15, alignSelf: 'center' }}> Top Up </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>

                </View>

                {/* Konten */}

                <View style={styles.container}>
               

               {/* Car wash arround */}
                <Text style={{paddingBottom:5, paddingLeft:40, fontFamily: Fonts.type.regular, color: 'grey'}}>Car Wash Arround</Text>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconArround}/>
                    <TextInput style={styles.inputs}
                        placeholder="City"
                        underlineColorAndroid='transparent'    
                    />
                </View>

                  {/* Pilih Mobil */}
                <Text style={{paddingBottom:5, fontFamily: Fonts.type.regular, color: 'grey', paddingTop: 10, paddingLeft:40}}>Vehicle</Text>
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={Images.iconCarProfile}/>
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
 
                    </Picker>
                </View>

                  {/* Filter */}

                  <Text style={{paddingBottom:5, fontFamily: Fonts.type.regular, color: 'grey', paddingTop: 10, paddingLeft:40}}>Filter</Text>
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={Images.iconFilter}/>
                    <Picker
                        selectedValue={this.state.filter}
                        style={{ width: '90%'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({filter: itemValue})
                          }
                    
                    >
                        <Picker.Item label="Nearby" value="nearby" />
                        <Picker.Item label="Lowest Price" value="price" />
                        <Picker.Item label="The Fastes" value="fastes" />
 
                    </Picker>
                </View>

                 {/* Button search */}
               
                <View style={{ width: 325, paddingHorizontal: 10}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 29, marginVertical: 40, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height: 50}} onPress={()=> this.props.navigation.navigate('Login')}>
                            <Text style={{color: 'white', fontFamily: Fonts.type.bold, fontSize: 18}}> Search Car Wash </Text>
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FAFAFA',
        flex: 1,
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
});

export default MainMenu;