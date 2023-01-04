import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import Modal from "react-native-modalbox";
import Svg, { Path } from "react-native-svg";


const {width, height } = Dimensions.get("window");
let mutedImage = "w-14 h-14 self-center bg-gray-800/30 border-2 border-gray-500/30 rounded-lg p-0.5";
let activeImage = "w-16 h-16 self-center bg-gray-800/30 border-2 border-white rounded-lg p-0.5";

const image1 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-thorsten-technoman-338504.jpg?alt=media&token=4d92b49b-e524-407d-8697-9a2e45cdc8e7"
const image2 = 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-pixabay-276671.jpg?alt=media&token=869bf7b1-8de1-44f1-aa98-396cd352efe4'

const image3 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-pixabay-261169.jpg?alt=media&token=2853439f-21f2-48d8-8b32-6d75536a6fb5"
const image4 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-kelly-2869215.jpg?alt=media&token=5a7135ad-c31b-4bc5-83e6-987cf9573124"


export default function DetailHotel({route, navigation}) {

  const { hotel } = route.params;
  const [chosenImage, setChosenImage] = useState(hotel?.images[0]);
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
    // <View style={styles.container}>
    //   <Button title="Press Me!" onPress={() => setModalVisible(true)} />
    //   {getModal()}
    // </View>
    <View style={[styles.fontFamily]} className="relative w-full h-full" >

        <ScrollView className="w-full h-[0px] bg-[#fef9f6]" horizontal={false} showsVerticalScrollIndicator={false}>

            <View className="relative w-full h-96 bg-stone-100">
                
                <Image className="w-full h-full object-cover" source={{uri: chosenImage?.url}} />
                
                <LinearGradient className="absolute top-0 left-0 w-full h-full" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.3)']} >

                    <Pressable onPress={() => navigation.dispatch(CommonActions.goBack())} activeOpacity={1} className="">
                        <View className="absolute top-5 left-4 flex flex-row justify-center w-10 h-10 bg-white/90 rounded-full shadow">
                            <View className="w-5 h-5 self-center">
                                <Svg className="w-full h-full self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </Svg>
                            </View>
                        </View>
                    </Pressable>

                    <View className="bg-white/90 rounded-2xl px-3 py-1.5 absolute top-5 right-4 w-fit flex flex-row" >
                        <Text className="text-gray-800 text-sm font-semibold mr-1 self-center">4/5</Text>
                        <View className="w-5 text-orange-300 self-center">
                            <Svg className="w-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><Path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></Svg>
                        </View>
                    </View>

                    <View className="absolute bottom-5 left-0 w-full flex flex-row px-6">
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full flex flex-row" >
                            <FlatList data={hotel?.images} renderItem={renderGalerie} keyExtractor={item => item.id} horizontal={true} />
                        </ScrollView>
                    </View>

                </LinearGradient>

            </View>

            <View className="w-full flex-col px-4 mt-4" >
                <View className="flex flex-row">
                    <View className="w-3 text-gray-400 mr-0.5 self-center">
                        <Svg className="w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></Path>
                            <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></Path>
                        </Svg>
                    </View>
                    <Text className="text-gray-400 text-[14px] font-medium self-center">{hotel?.address}</Text>
                </View>
                <Text className="text-xl text-[#0b0b0b] font-semibold">{hotel?.name}</Text>
            </View>

            <View className="w-full flex flex-row px-4 mt-4">
                <View className="flex flex-col mr-5">
                    <Text className="text-lg font-medium text-[#e16728] self-center">Description</Text>
                    <View className="w-20 h-[2px] bg-[#e16728] transition duration-700 ease-in-out mt-[1px] "></View>
                </View>
                <View className="flex flex-col self-center mr-5">
                    <Text className="text-lg font-medium text-gray-400">Reviews</Text>
                    {/* <View className="w-20 h-[2px] bg-[#e16728] transition duration-700 ease-in-out mt-[1px] "></View> */}
                </View>
            </View>

            <View className="px-4 mb-24">

                <View className="flex flex-col mt-4">
                    <Text className="text-base text-gray-700 font-medium">
                        {hotel?.desc}
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
                <Text className="text-xl text-white font-semibold self-center">Réserver</Text>
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
