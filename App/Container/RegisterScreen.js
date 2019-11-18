import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            email:'',
            password: '',
            confPassword: '',
            jenisKendaraan: [
                'Small Car',
                'Sedan',
                'Mini Bus',
                'VAN'
            ],
            merk: '',
            nopol: '',
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={{ color: '#3333ff', fontSize: 18, fontWeight: 'bold'}}>Register</Text>
                
                {/* USERNAME */}
                <View style={styles.inputContainer}>
                    {/* <Image style={styles.inputIcon} source={Images.iconEmail}/> */}
                    <TextInput style={styles.inputs}
                        placeholder="Username" 
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({username})}
                    />
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
        borderRadius:30,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
})

export default Register;