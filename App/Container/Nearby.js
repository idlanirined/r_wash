import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Fonts } from '../Themes'

class Nearby extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center'}}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20}}>Nearby</Text>
                </View>
                    <View style={{ width: '100%', justifyContent: 'center', paddingHorizontal: 15, paddingTop: 10}}>
                        <View style={styles.inputContainer}>
                            <AntDesign name='search1' size={20} style={{ marginLeft: 10}}/>
                            <TextInput 
                                style={styles.inputs}
                                placeholder="Search.."
                                underlineColorAndroid='transparent'
                                onChangeText={(search) => this.setState({search})}
                            />                        
                        </View>
                    </View>

                    {/* Content Bawah */}
                    <ScrollView style={{ paddingHorizontal: 15, paddingBottom: 10}}>
                        
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'gray',
        borderWidth: 1,
        elevation: 2,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:'100%',
        height:45,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center',
        tintColor: '#30dae3'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
})


export default Nearby;