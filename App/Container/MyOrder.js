import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';

class MyOrder extends Component {
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center'}}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20}}>My Order</Text>
                </View>
            <View style={styles.container}>
                <View style={{ width: 100, height: 180 }}>
                    <Image source={Images.noorder} style={{ marginBottom:50, width: 300, height: 400, justifyContent: 'center', alignSelf: 'center'}} resizeMode='contain'/>
                </View>
                <View style={styles.container}>
                    <Text style={{ fontFamily: Fonts.type.bold, fontSize:23 }}>No Order Available </Text>
                    <Text style={styles.instruction}>find the nearest car wash</Text>
                    <Text style={styles.instructions}>and order now</Text>
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
        alignItems: 'center'  
    },  
});  

export default MyOrder;