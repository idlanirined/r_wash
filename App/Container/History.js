import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { Fonts } from '../Themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

class History extends Component {
    constructor(props){
        super(props)
        this.state={
            arrayDummy: [
                { tempat: 'Dipatiukur', jalan: 'Jl. Dipatiukur No.5 Bandung', waktu: 'THU, 24 October / 13.20.05', mobil: 'Honda Jazz / D 1514 BFF', via: 'Cash', harga:'IDR 25.000,-', status: 'Proccess'},
                { tempat: 'Dipatiukur', jalan: 'Jl. Dipatiukur No.5 Bandung', waktu: 'THU, 24 October / 13.20.05', mobil: 'Honda Jazz / D 1514 BFF', via: 'Cash', harga:'IDR 25.000,-', status: 'Cancelled'},
                { tempat: 'Dipatiukur', jalan: 'Jl. Dipatiukur No.5 Bandung', waktu: 'THU, 24 October / 13.20.05', mobil: 'Honda Jazz / D 1514 BFF', via: 'Cash', harga:'IDR 25.000,-', status: 'Done'},
                { tempat: 'Dipatiukur', jalan: 'Jl. Dipatiukur No.5 Bandung', waktu: 'THU, 24 October / 13.20.05', mobil: 'Honda Jazz / D 1514 BFF', via: 'Cash', harga:'IDR 25.000,-', status: 'Proccess'},
                { tempat: 'Dipatiukur', jalan: 'Jl. Dipatiukur No.5 Bandung', waktu: 'THU, 24 October / 13.20.05', mobil: 'Honda Jazz / D 1514 BFF', via: 'Cash', harga:'IDR 25.000,-', status: 'Done'},
                { tempat: 'Dipatiukur', jalan: 'Jl. Dipatiukur No.5 Bandung', waktu: 'THU, 24 October / 13.20.05', mobil: 'Honda Jazz / D 1514 BFF', via: 'Cash', harga:'IDR 25.000,-', status: 'Done'},
            ]
        }
    }

    clearAll(){
        this.setState({
            arrayDummy: []
        })
    }
    _onPressButton (){
        Alert.alert('Are you sure you want to delete history');
        
    }
    
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View style={{ height: 50, width: '100%', backgroundColor: '#00CCFF', flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'center'}} >
                    <View style={{  width: '95%', justifyContent: 'center'}}>
                        <Text style={{ alignSelf: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20}}>History</Text>
                    </View>
                    <TouchableOpacity onPress={()=> this.clearAll()} style={{ width: '5%', alignSelf: 'center', justifyContent: 'center'}}>
                        <Ionicons name='md-trash' size={28} color='white' />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ paddingHorizontal: 20, marginVertical: 0, backgroundColor: '#F5F5F5'}} showsVerticalScrollIndicator={false} >
                    {this.state.arrayDummy.map((item, index) => {
                        return(
                            <View style={{ marginTop: index == 0 ? 10 : 20}} key={index}>
                                <View style={{ width: '100%',  backgroundColor: '#FFFFFF', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingHorizontal: 20, shadowRadius: 80}}>
                                    <Text style={{ alignSelf: 'center', marginTop: 10, fontFamily: Fonts.type.bold, fontSize: 16}}>{item.tempat}</Text>
                                    <Text style={{ fontFamily: Fonts.type.light, marginTop: 10}}>{item.jalan}</Text>
                                    <Text style={{ fontFamily: Fonts.type.light}}>{item.waktu}</Text>
                                    <Text style={{ fontFamily: Fonts.type.light}}>{item.mobil}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontFamily: Fonts.type.light}}>{item.via}</Text>                          
                                        <Text style={{ fontFamily: Fonts.type.bold}}>{item.harga}</Text>                          
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
                                  
                                    <View style={{ borderWidth: .3, marginTop: 5, height: '1%', width: '85%', alignSelf: 'center'}} />
                                
                                </View>
                                <View style={{ backgroundColor: '#FFFFFF', height: 60, borderBottomStartRadius: 15, borderBottomEndRadius: 15, paddingHorizontal: 20, flexDirection: 'row', paddingBottom: 10, borderTopColor: '#dedede'}}>
                                    <Ionicons name='ios-timer' size={28} color={item.status == 'Proccess' ? 'orange' : item.status == 'Cancelled' ? 'red' : 'green'} style={{ alignSelf: 'center'}}/>
                                    <Text style={{ fontFamily: Fonts.type.bold, alignSelf: 'center', marginLeft: 10, color: item.status == 'Proccess' ? 'orange' : item.status == 'Cancelled' ? 'red' : 'green', fontSize: 16}}>{item.status}</Text>
                                </View>
                            </View>
                        )
                    })}
                    
                </ScrollView>
            </View>
        )
    }
}


export default History;