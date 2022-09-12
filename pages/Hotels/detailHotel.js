import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import Modal from "react-native-modalbox";


const {width, height } = Dimensions.get("window");

const image1 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/concert2.webp?alt=media&token=257d9eea-199d-4a1e-99b7-0d6fc03264ab"
const image2 = 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/la-lutte-senegalaise-1024x609.jpeg?alt=media&token=9a5678fe-0279-47ac-ae52-e1ddb16a42ab'

const image3 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-frank-k-1808975.jpg?alt=media&token=570fec41-144b-4729-996f-69d724c84e0d"
const image4 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-aviz-3531070.jpg?alt=media&token=2ab8f434-a7e8-4408-b863-907c0e5d7fcf"
const image5 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-ludmilla-diniz-3766344.jpg?alt=media&token=7d03b0aa-d4ac-44d5-9dd9-6ec4e60c9e07"


export default function DetailHotel({navigation}) {

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


  return (
    // <View style={styles.container}>
    //   <Button title="Press Me!" onPress={() => setModalVisible(true)} />
    //   {getModal()}
    // </View>
    <View style={[styles.fontFamily]} className="relative w-full h-full" >

        <ScrollView className="w-full h-[0px] bg-[#fef9f6]" horizontal={false} showsVerticalScrollIndicator={false}>

            <View className="relative w-full h-96 bg-stone-100">
                
                <Image className="w-full h-full object-cover" source={{uri: image1}} />
                
                <LinearGradient className="absolute top-0 left-0 w-full h-full" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} >
                    
                    <View className="absolute bottom-5 left-6" >
                        <Text className="text-md text-gray-400 font-normal">CONCERT</Text>
                        <Text className="text-xl text-white font-semibold">Concert de Mbalax</Text>
                        <Text className="text-xs text-gray-200 font-light">Animé par Youssou Ndour</Text>
                    </View>

                    <Pressable onPress={() => navigation.dispatch(CommonActions.goBack())} activeOpacity={1} className="">
                        <View className="absolute top-5 left-4 flex flex-row justify-center w-10 h-10 bg-white/90 rounded-full shadow">
                            <View className="w-5 h-5 self-center">
                                <svg className="w-full h-full self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </View>
                        </View>
                    </Pressable>

                    <View className="bg-white/90 rounded-lg h-fit w-fit flex flex-col items-center px-[8px] py-1 absolute top-5 right-4">
                        <Text className="text-[14.5px] font-semibold text-[#0b0b0b]">22</Text>
                        <Text className="text-[12px] font-normal text-gray-500">Nov</Text>
                    </View>

                </LinearGradient>

            </View>

            <View className="flex flex-row px-4 mt-4">
                <View className="w-9 h-9 rounded-full bg-gray-400 bg-opacity-50 shadow border-2 border-[#0e0e0e] self-center">
                    <Image className="w-full h-full rounded-full" source={{uri: image3}} />
                </View>
                <View className="w-9 h-9 rounded-full bg-gray-400 bg-opacity-50 shadow border-2 border-[#0e0e0e] self-center -ml-4">
                    <Image className="w-full h-full rounded-full" source={{uri: image4}} />
                </View>
                <View className="w-9 h-9 rounded-full bg-gray-400 bg-opacity-50 shadow border-2 border-[#0e0e0e] self-center -ml-4">
                    <Image className="w-full h-full rounded-full" source={{uri: image5}} />
                </View>
                <View className="h-9 px-2 rounded-full bg-[#0b0b0b] shadow self-center flex flex-col justify-center -ml-5">
                    <View className="w-full text-center text-sm text-white font-semibold   ">+2k participants</View>
                </View>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </Text>
                </View>

                <View className="w-full flex flex-row mt-4">

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#e16728]/25 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">08:30 PM</Text>
                    </View>

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#e16728]/25 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">5000 XOF</Text>
                    </View>

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#e16728]/25 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">Lorem ipsm</Text>
                    </View>
                    
                </View>

                <View className="w-full flex flex-col mt-5 mb-4">

                    <View></View>

                    <View className="w-full h-52 bg-slate-300 rounded-xl"></View>
                    
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
    }

});
