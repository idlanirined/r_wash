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
              <Text>Recommendation</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Nearby</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Lowest Price</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Fastest</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
        </Content>

      
                            </View>
                            </View>
                            </View>

    );
  }
}


export default Filtersort;