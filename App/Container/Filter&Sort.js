import React, { Component } from 'react';
import { Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Icon, Container, Header, Content, Button,ListItem,Left, Right, Radio } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Images from '../Lib/Images'



class Filtersort extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5f5' }}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Filter & Sort</Text>
                </View>

                <View style={{ paddingHorizontal: 15, paddingBottom: 10, marginTop: 5, backgroundColor: '#F5F5F5', marginLeft: -15, marginRight: -15 }}>

                    <View style={{ height: 280, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                    <Content>
              <Text style={{ paddingHorizontal: 18, paddingBottom: 10, fontFamily: Fonts.type.regular, fontSize: 12, color: '#808080'}}>FILTER & SORT BY</Text>
            
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Recommendation</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Nearby</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Lowest Price</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Fastest</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
        </Content>
      </View>             
        <View style={{width:400, height:-20, justifyContent:'center', left: -10, marginBottom:20, paddingTop:300}}>
            <Button block style={{margin:10, backgroundColor:'#FFCA00', height: 100}}>
                <Text style={{left: -10, color:'#000000',top: -15, fontFamily: Fonts.type.bold, fontSize: 18}}>Apply Changes</Text>
            </Button>
        </View>
      </View>
    </View>

    );
  }
}


export default Filtersort;