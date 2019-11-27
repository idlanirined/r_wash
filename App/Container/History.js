import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
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
            ]
        }
    }
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: 'white'}}>
                <View style={{ height: 60, width: '100%', backgroundColor: '#00CCFF', justifyContent: 'center'}}>
                    <Text style={{ alignSelf: 'center', justifyContent: 'center', fontFamily: Fonts.type.medium, color: 'white', fontSize: 20}}>History</Text>
                </View>
                <ScrollView style={{ paddingHorizontal: 20, marginVertical: 10}} showsVerticalScrollIndicator={false} >
                    {this.state.arrayDummy.map((item, index) => {
                        return(
                            <View style={{ marginTop: index == 0 ? 0 : 20}} key={index}>
                                <View style={{ width: '100%', backgroundColor: '#dedede', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingHorizontal: 20}}>
                                    <Text style={{ alignSelf: 'center', marginTop: 10, fontFamily: Fonts.type.bold, fontSize: 16}}>{item.tempat}</Text>
                                    <Text style={{ fontFamily: Fonts.type.light, marginTop: 10}}>{item.jalan}</Text>
                                    <Text style={{ fontFamily: Fonts.type.light}}>{item.waktu}</Text>
                                    <Text style={{ fontFamily: Fonts.type.light}}>{item.mobil}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ fontFamily: Fonts.type.light}}>{item.via}</Text>                          
                                        <Text style={{ fontFamily: Fonts.type.bold}}>{item.harga}</Text>                          
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#dedede' }}>
                                    <View style={{ height: 25, width: 25, backgroundColor: 'white', borderRadius: 20, marginLeft: -10}}></View>
                                    <View style={{ borderWidth: .3, marginTop: 5, height: '1%', width: '85%', alignSelf: 'center'}} />
                                    <View style={{ height: 25, width: 25, backgroundColor: 'white', borderRadius: 20, marginRight: -10}}></View>
                                </View>
                                <View style={{ backgroundColor: '#dedede', height: 40, paddingHorizontal: 20, flexDirection: 'row', paddingBottom: 10, borderTopColor: '#dedede'}}>
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