import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email   : '',
            password: '',
            pass: true,
            icon: 'eye-off',
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{ width: 200, height: 50, justifyContent: 'center', alignSelf: 'center', bottom: -80}}>
                    <Image source={Images.login} style={{top: 10, marginBottom:50, width: 100, height: 100, justifyContent: 'center', alignSelf: 'center'}} resizeMode='contain'/>
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconEmail}/>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconPassword}/>
                    <TextInput 
                        style={styles.inputs}
                        secureTextEntry={this.state.pass}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                    />
                    <Icon 
                        name={this.state.icon}
                        fontSize={16}
                        style={{ marginRight: 10}} 
                        onPress={()=> 
                            this.setState({ pass: !this.state.pass, icon: this.state.icon === 'eye' ? 'eye-off' : 'eye' })} 
                        color={'#808080'}
                    />
                </View>

                {/* Button Login */}
                <View style={{ width: 300, paddingHorizontal: 30, bottom: -80}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 30, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height: 40}} onPress={()=> this.props.navigation.navigate('HomeNavigation')} >
                            <Text style={{color: 'white', fontFamily: Fonts.type.bold, fontSize: 18}}> Sign In </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ flexDirection: 'row', bottom: -80}}>
                    <Text style={{ fontFamily: Fonts.type.bold}}>Don't have an account? </Text>
                    <Text style={{ color: '#00CCFF', fontFamily: Fonts.type.bold}} onPress={()=> this.props.navigation.navigate('Register')}>Sign Up</Text>
                </View>
                <View style={{ backgroundColor: 'transparent',width: 300, paddingHorizontal: 30, bottom: -80, left: -10}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#FFFFFF', '#FFFFFF']} style={{ borderRadius: 30, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', flexDirection:'row', height: 40}} onPress={()=> this.props.navigation.navigate('')} >
                        <Image style={styles.inputIcon} source={Images.iconFacebook}/>
                            <Text style={{color: 'white', fontFamily: Fonts.type.bold, color:'#000000'}}> Sign In with Facebook </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ backgroundColor: 'transparent',width: 300, paddingHorizontal: 30, bottom: -50, left: -10}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#FFFFFF', '#FFFFFF']} style={{ borderRadius: 30, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', flexDirection:'row', height: 40}} onPress={()=> this.props.navigation.navigate('')} >
                        <Image style={styles.inputIcon} source={Images.iconGoogle}/>
                            <Text style={{color: 'white', fontFamily: Fonts.type.bold, color:'#000000'}}> Sign In with Google </Text>
                        </TouchableOpacity>
                    </LinearGradient>
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
        borderColor: '#808080',
        borderWidth: 0,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        bottom: -100
        
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center',
        tintColor: '#00CCFF'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
})

export default Login;