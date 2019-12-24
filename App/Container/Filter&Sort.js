import React, { Component } from 'react';
import { Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Icon, Container, Header, Content, Button,ListItem,Left, Right, Radio } from 'native-base';
import { RadioButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient'
import { Fonts } from '../Themes'
import { Avatar } from 'react-native-elements'
import Images from '../Lib/Images'



 
class Filtersort extends Component {
  
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
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20 }}>Filter & Sort</Text>
                </View>

                <View style={{ paddingHorizontal: 15, paddingBottom: 10, marginTop: 5, backgroundColor: '#F5F5F5', marginLeft: -15, marginRight: -15 }}>

                    <View style={{ height: 315, paddingTop: 20, backgroundColor: 'white', marginTop: 10, borderRadius: 5, flexDirection: 'row' }}>

                    <Content>
              <Text style={{ paddingHorizontal: 18, paddingBottom: 10, fontFamily: Fonts.type.regular, fontSize: 12, color: '#808080'}}>FILTER & SORT BY</Text>
            
              

          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Recommendationss</Text>
            </Left>
            <Right>
            <RadioButton
          value="1"
          status={checked === '1' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: '1' }); }}
          color='#00CCFF'
        />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Nearby</Text>
            </Left>
            <Right>
            <RadioButton
          value="2"
          status={checked === '2' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: '2' }); }}
          color='#00CCFF'
        />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Lowest Price</Text>
            </Left>
            <Right>
              <RadioButton
          value="3"
          status={checked === '3' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: '3' }); }}
          color='#00CCFF'
        />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{fontFamily: Fonts.type.medium, fontSize: 14}}>Fastest</Text>
            </Left>
            <Right>
              <RadioButton
          value="4"
          status={checked === '4' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: '4' }); }}
          color='#00CCFF'
        />
            </Right>
          </ListItem>
        </Content>

        

      </View>             
        <View style={{width:400, height:-20, justifyContent:'center', left: -10, marginBottom:20, paddingTop:230}}>
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