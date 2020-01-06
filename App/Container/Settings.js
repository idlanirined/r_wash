import React, { Component } from 'react';
import { Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Icon, Container, Header, Content, Button,ListItem,Left, Right, Radio } from 'native-base';
import { RadioButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Images from '../Lib/Images'



 
class Settingss extends Component {
  
    constructor() {
      super();
      this.state = {
       //itemSelected: 'itemOne',
     }
    };

 
    render() {
      const { checked } = this.state;
        return (

          
          
            <View style={{ flex: 1, backgroundColor: '#F5F5f5' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Settings</Text>
                </View>
                <Text style={{marginLeft:15, marginTop: 10, fontFamily: Fonts.type.bold}}>PREFERENCES</Text>
                <View style={{ paddingHorizontal: 15, paddingBottom: 10, backgroundColor: '#F5F5F5', marginLeft: -15, marginRight: -15 }}>

                    <View style={{ height: 171, paddingTop: 5, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                    <Content>
              
            
              

          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Country</Text>
            </Left>
            <Right style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontFamily: Fonts.type.medium, fontSize: 14,marginRight:10, marginLeft:-15}}>Indonesia</Text>
            <Image source={Images.iconNextBiru} style={{width:20, height:20, marginRight:20}}></Image>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Curency</Text>
            </Left>
            <Right style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontFamily: Fonts.type.medium, fontSize: 14,marginRight:10, marginLeft:-60}}>Indonesia Rupiah</Text>
            <Image source={Images.iconNextBiru} style={{width:20, height:20, marginRight:20}}></Image>
            </Right>
          </ListItem>
          <ListItem>
            <Left style={{alignItems:'center'}}>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Language</Text>
            </Left>
            <Right style={{flexDirection:'row'}}>
            <View style={{ width: 80, marginLeft:-100, marginRight:10}}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#00CCFF', '#00CCFF']} style={{ borderRadius: 10, justifyContent: 'flex-end'}}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('')} >
                                    <Text style={{ color: 'white', fontFamily: Fonts.type.bold, fontSize: 16, alignSelf: 'center' }}> English </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <View style={{ width: 80, paddingHorizontal: 0, alignSelf: 'flex-end' }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#f5f5f5', '#f5f5f5']} style={{ borderRadius: 10, justifyContent: 'flex-end'}}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 40 }} onPress={() => this.props.navigation.navigate('')} >
                                    <Text style={{ color: '#00ccff', fontFamily: Fonts.type.bold, fontSize: 16, alignSelf: 'center' }}> Indonesia </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>            
            </Right>
          </ListItem>
        </Content>
    </View>
    </View>
    </View>

    );
  }
}


export default Settingss;