import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid,ScrollView } from 'react-native'
import { View, Container, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Lib/Images';
import Fonts from '../Themes/Fonts';

class RwashDetail extends Component {
    render(){
        return(
            <ScrollView horizontal={true} style={{ flex: 1, backgroundColor: 'white', flexDirection:'row'}}>
                    <View style={{ height: 180, width: 180, borderRadius: 8, backgroundColor:'pink'}}>
                        <Image source={Images.rwash1} style={{width: undefined, height: undefined, resizeMode: 'cover', flex:1, borderRadius: 8}}/>
                </View>
                    <View style={{marginRight: 10}}/>
                        <View style={{ height: 180, width: 180, borderRadius: 8, backgroundColor:'pink'}}>
                            <Image source={Images.rwash2} style={{width: undefined, height: undefined, resizeMode: 'cover', flex:1, borderRadius: 8}}/>
                </View>
                    <View style={{marginRight: 10}}/>
                        <View style={{ height: 180, width: 180, borderRadius: 8, backgroundColor:'pink'}}>
                            <Image source={Images.rwash3} style={{width: undefined, height: undefined, resizeMode: 'cover', flex:1, borderRadius: 8}}/>
                </View>
                </ScrollView>
                
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

export default RwashDetail;