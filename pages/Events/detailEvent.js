import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import Modal from "react-native-modalbox";
import { getDay, getMonth } from '../../utils/utils';
import Svg, { Path } from "react-native-svg";


const {width, height } = Dimensions.get("window");
let mutedImage = "w-14 h-14 self-center bg-gray-800/30 border-2 border-gray-500/30 rounded-lg p-0.5";
let activeImage = "w-16 h-16 self-center bg-gray-800/30 border-2 border-white rounded-lg p-0.5";

export default function DetailEvent({route, navigation}) {

  const { event } = route.params;
  const [chosenImage, setChosenImage] = useState(event?.images[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const getModal = () =>{
      return (
        <Modal
          entry="bottom"
          backdropPressToClose={true}
          isOpen={modalVisible}
          style={styles.modalBox}
          onClosed={() => setModalVisible(false)}
        >
          <View style={styles.content}>
            <Text style={styles.textStyle}>AndroidVille</Text>
          </View>
        </Modal>
      );
  };

  function renderGalerie({item, index}) {
    return (
        <Pressable onPress={() => setChosenImage(item)}  activeOpacity={1} className="mr-4 rounded-lg shadow-sm">
            <View className={item?.url == chosenImage?.url ? activeImage : mutedImage}>
                <Image className="w-full h-full object-cover rounded-lg" source={{uri: item?.url}} />
            </View>
        </Pressable>
    );
   }


  return (

    <View style={[styles.fontFamily]} className="relative w-full h-full" >

        <ScrollView className="w-full h-[0px] bg-[#fef9f6]" horizontal={false} showsVerticalScrollIndicator={false}>

            <View className="relative w-full h-96 bg-stone-100">
                
                <Image className="w-full h-full object-cover" source={{uri: chosenImage?.url}} />
                
                <LinearGradient className="absolute top-0 left-0 w-full h-full" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} >
                    
                    <View className="absolute bottom-5 left-6" >
                        <Text className="text-md text-gray-400 font-normal">{event?.categoryEvent?.name?.toUpperCase()}</Text>
                        <Text className="text-xl text-white font-semibold">{event?.name}</Text>
                        <Text className="text-xs text-gray-200 font-light">{event?.organizedBy}</Text>
                    </View>

                    <Pressable onPress={() => navigation.dispatch(CommonActions.goBack())} activeOpacity={1} className="">
                        <View className="absolute top-5 left-4 flex flex-row justify-center w-10 h-10 bg-white/90 rounded-full shadow">
                            <View className="w-5 h-5 self-center">
                                <Svg className="w-full h-full self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </Svg>
                            </View>
                        </View>
                    </Pressable>

                    <View className="bg-white/90 rounded-lg h-fit w-fit flex flex-col items-center px-[8px] py-1 absolute top-5 right-4">
                        <Text className="text-[14.5px] font-semibold text-[#0b0b0b]">{getDay(event?.date)}</Text>
                        <Text className="text-[12px] font-normal text-gray-500">{getMonth(event?.date)}</Text>
                    </View>

                </LinearGradient>

            </View>

            <View className="absolute bottom-5 left-0 w-full flex flex-row px-6">
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full flex flex-row" >
                    <FlatList data={event?.images} renderItem={renderGalerie} keyExtractor={item => item.id} horizontal={true} />
                </ScrollView>
            </View>

            <View className="w-full flex flex-row px-4 mt-4">
                <View className="flex flex-col mr-5">
                    <Text className="text-lg font-medium text-[#e16728]">Description</Text>
                    <View className="w-20 h-[2px] bg-[#e16728] transition duration-700 ease-in-out mt-[1px] "></View>
                </View>
               
            </View>

            <View className="px-4 mb-24">

                <View className="flex flex-col mt-4">
                    <Text className="text-base text-gray-700 font-medium">
                        {event?.desc}
                    </Text>
                </View>

                <View className="w-full flex flex-row mt-4">

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#e16728]/25 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">{event?.startHours}</Text>
                    </View>

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#e16728]/25 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">{event?.endHours}</Text>
                    </View>

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#e16728]/25 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">{event?.ticketPrice} XOF</Text>
                    </View>
                    
                </View>

                <View className="w-full flex flex-col mt-5 mb-4">

                    <View></View>

                    <View className="w-full h-52 bg-slate-300 rounded-xl" >
                    </View>
                    
                </View>

            </View>


        </ScrollView>

        <View className="w-full h-[80px] bg-[#fefaf9] shadow rounded-t-2xl absolute bottom-0 left-0 z-10 px-6 py-3">
            <TouchableOpacity onPress={() => setModalVisible(true)} className="w-full h-full bg-[#0b0b0b] shadow-lg rounded-2xl flex flex-row justify-center">
                <Text className="text-xl text-white font-semibold self-center">Participer</Text>
            </TouchableOpacity>
        </View>

        {getModal()}

    </View>
  );
}

const styles = StyleSheet.create({

    fontFamily: {
        fontFamily: 'lucida grande',
    },

    modalBox: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        height,
        width,
        backgroundColor: "transparent"
    },

    content: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: 375,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fefaf9",
        zIndex: 1000,
    },

    textStyle: {
        fontSize: 22
    },

    map: {
        flex: 1,
    }

});
