import React, { Component } from 'react';
import { Text, Image, TextInput, Picker, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

class EditProfil extends Component {

    render(){
        return(
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center'}}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20}}>Edit Profil</Text>
                </View>

                {/* Konten */}

                <View style={styles.container}>
               

               {/* Full Name */}
                <Text style={{paddingBottom:5, paddingLeft:0, fontFamily: Fonts.type.regular, color: 'grey'}}>Full Name*</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Hamjah Huailid"
                        underlineColorAndroid='transparent'    
                    />
                </View>


                            {/*Address */}
                <Text style={{paddingTop:10, paddingLeft:0, fontFamily: Fonts.type.regular, color: 'grey'}}>Address*</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Komplek Bumi Pakusarakan 2"
                        underlineColorAndroid='transparent'    
                    />
                </View>

                    {/*Phone Number */}
                <Text style={{paddingTop:10, paddingLeft:0, fontFamily: Fonts.type.regular, color: 'grey'}}>Phone Number*</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="082240206592"
                        underlineColorAndroid='transparent'    
                    />
                </View>
                 
                 {/*Email */}
                <Text style={{paddingTop:10, paddingLeft:0, fontFamily: Fonts.type.regular, color: 'grey'}}>Email*</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="hamjah.huailid18@gmail.com"
                        underlineColorAndroid='transparent'    
                    />
                </View>


                 {/* Button Confirm */}
               
                <View style={{ width: 250, paddingHorizontal: 10, alignSelf:'center'}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 29, marginVertical: 40, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height: 50}} onPress={()=> this.props.navigation.navigate('Profile')}>
                            <Text style={{color: 'white', fontFamily: Fonts.type.bold, fontSize: 18}}> Confirm </Text>
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
        padding: 15,
    },
    inputs: {
        height: 45,
        marginLeft: 0,
        paddingLeft: 0,
        borderBottomColor: '#00CCFF',
        flex: 1,
        fontSize: 14,
        
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderWidth: 0,
        elevation: 0,
        paddingLeft: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        width: 320,
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

export default EditProfil;