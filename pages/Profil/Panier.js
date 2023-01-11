import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput, FlatList, SafeAreaView, Dimensions, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { Header } from '../../components/commons/Header';
import Styles from '../../styles';
import Svg, { Path, G } from "react-native-Svg";
import { capitalize } from '../../utils/utils';


export default function Panier({ route, navigation }) {

    let basket = JSON.parse(localStorage.getItem("basket")) || [];

    return (
        <View style={[styles.fontFamily]} className="relative w-full h-full" >

            <Header
                back
                title="Mon Panier"
                onPressBack={() => navigation.goBack()}
                right="more-vertical"
                onRightPress={() => console.log('right')}
            />

            <ScrollView className="w-full h-full px-4 py-4 pb-6 bg-[#fef9f6]">

                <View className="w-full bg-[#f4f2ef] rounded-xl h-auto px-4 py-2.5">
                    <FlatList data={basket} renderItem={renderItem} keyExtractor={item => item.id} />
                </View>

                <View className="w-full bg-[#f4f2ef] rounded-xl h-auto px-4 py-4 mt-5">
                    <Text className="text-base font-semibold text-gray-900">Récapitulatif</Text>
                    <View className="w-full flex flex-row justify-between py-2.5 mt-3">
                        <Text className="text-[14px] font-semibold text-gray-900">Sous total :</Text>
                        <Text className="text-[14px] font-medium text-gray-700 justify-self-center">12.000 XOF</Text>
                    </View>
                    <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>
                    <View className="w-full flex flex-row justify-between py-2.5">
                        <Text className="text-[14px] font-semibold text-gray-900">Taxe :</Text>
                        <Text className="text-[14px] font-medium text-gray-700 justify-self-center">0 XOF</Text>
                    </View>
                    <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>
                    <View className="w-full flex flex-row justify-between py-2.5">
                        <Text className="text-[14px] font-semibold text-gray-900">Total :</Text>
                        <Text className="text-[14px] font-medium text-gray-700 justify-self-center">12.000 XOF</Text>
                    </View>
                </View>

                <TouchableOpacity className="w-full h-[60px] bg-[#0b0b0b] shadow-lg rounded-2xl flex flex-row justify-center mt-5">
                    <Text className="text-xl text-white font-semibold self-center">Commander</Text>
                </TouchableOpacity>

            </ScrollView>


        </View>


    );

    function renderItem({item, index}) {
        return (
          <View>

            {index > 0 &&
                <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>
            }

            <View className="w-full h-28 flex flex-row justify-between py-4">
                <View className="w-[30%] h-full bg-[#cccccc]/80 rounded-2xl">
                    <Image className="w-full h-full object-cover rounded-2xl" source={{uri: item.images[0].url}} />
                </View>
                <View className="w-[67%] flex flex-col justify-between ">
                    <View className="w-full flex flex-row justify-between">
                        <View className="w-min flex flex-col">
                            <Text className="text-xs font-light text-gray-700">{capitalize(item?.categoryMenu?.name)}</Text>
                            <Text className="text-sm font-semibold text-gray-900 mt-0.5">{item?.name}</Text>
                        </View>
                        <View className="w-3.5 justify-self-center">
                            <Svg className="w-full" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" >
                                <G>
                                    <Path fill='#ed0000' d="M490.667,96c0-17.673-14.327-32-32-32h-80.555C364.632,25.757,328.549,0.13,288,0h-64   c-40.549,0.13-76.632,25.757-90.112,64H53.333c-17.673,0-32,14.327-32,32l0,0c0,17.673,14.327,32,32,32H64v266.667   C64,459.468,116.532,512,181.333,512h149.333C395.468,512,448,459.468,448,394.667V128h10.667   C476.34,128,490.667,113.673,490.667,96z M384,394.667C384,424.122,360.122,448,330.667,448H181.333   C151.878,448,128,424.122,128,394.667V128h256V394.667z"/>
                                    <Path fill='#ed0000' d="M202.667,384c17.673,0,32-14.327,32-32V224c0-17.673-14.327-32-32-32s-32,14.327-32,32v128   C170.667,369.673,184.994,384,202.667,384z"/>
                                    <Path fill='#ed0000' d="M309.333,384c17.673,0,32-14.327,32-32V224c0-17.673-14.327-32-32-32s-32,14.327-32,32v128   C277.333,369.673,291.66,384,309.333,384z"/>
                                </G>
                            </Svg>
                        </View>
                    </View>
                    <View className="w-full flex flex-row justify-between">
                        <View className="w-[80px] h-[30px] items-center bg-[#0b0b0b] shadow-sm rounded-xl flex flex-row justify-between px-2 self-center mt-2">
                            <Button color="transparent" titleStyle={{ color: "#000000" }} className="text-lg font-semibold h-full" title="-" />
                            <Text className="text-sm font-medium text-gray-50">{item?.quantity}</Text>
                            <Button color="#transparent" titleStyle={{ color: "#000000" }} className="text-lg font-semibold h-full" title="+" />
                        </View>
                        <View className="flex flex-col justify-end">
                            <Text className="text-sm font-semibold text-gray-900 align-bottom">{item?.price} XOF</Text>
                        </View>
                    </View>
                </View>
            </View>

          </View>
        );
    }
}



const styles = StyleSheet.create({
	fontFamily: {
        fontFamily: 'lucida grande',
	},

})


