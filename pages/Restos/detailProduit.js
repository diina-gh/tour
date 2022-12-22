import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import Modal from "react-native-modalbox";


const {width, height } = Dimensions.get("window");

const image1 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-shameel-mukkath-5639516.jpg?alt=media&token=01526a0c-3666-4504-88d3-82cd4acaf420"
const image2 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-andra-918581.jpg?alt=media&token=c0e9c30b-929b-4c1c-9bef-7b5fdb4f5ac2"
const image3 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-rajesh-tp-1633578.jpg?alt=media&token=4a0e23ff-e45c-48e5-9a8b-f08ae9bfa822"
const image4 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-horizon-content-3738730.jpg?alt=media&token=90603d7d-4d87-479d-9cc1-10ec317613dc"


export default function DetailProduit({navigation}) {

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
                
                <LinearGradient className="absolute top-0 left-0 w-full h-full" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.3)']} >

                    <Pressable onPress={() => navigation.dispatch(CommonActions.goBack())} activeOpacity={1} className="">
                        <View className="absolute top-5 left-4 flex flex-row justify-center w-10 h-10 bg-white/90 rounded-full shadow">
                            <View className="w-5 h-5 self-center">
                                <svg className="w-full h-full self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </View>
                        </View>
                    </Pressable>

                    <View className="absolute top-5 right-4 w-10 h-10 flex flex-row justify-center bg-white/90 rounded-full">
                        <View className="w-5 h-5 text-[#3d3d3d] self-center">
                            <svg className='w-full h-full' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8498 2.50071C16.4808 2.50071 17.1108 2.58971 17.7098 2.79071C21.4008 3.99071 22.7308 8.04071 21.6198 11.5807C20.9898 13.3897 19.9598 15.0407 18.6108 16.3897C16.6798 18.2597 14.5608 19.9197 12.2798 21.3497L12.0298 21.5007L11.7698 21.3397C9.48077 19.9197 7.34977 18.2597 5.40077 16.3797C4.06077 15.0307 3.02977 13.3897 2.38977 11.5807C1.25977 8.04071 2.58977 3.99071 6.32077 2.76971C6.61077 2.66971 6.90977 2.59971 7.20977 2.56071H7.32977C7.61077 2.51971 7.88977 2.50071 8.16977 2.50071H8.27977C8.90977 2.51971 9.51977 2.62971 10.1108 2.83071H10.1698C10.2098 2.84971 10.2398 2.87071 10.2598 2.88971C10.4808 2.96071 10.6898 3.04071 10.8898 3.15071L11.2698 3.32071C11.3616 3.36968 11.4647 3.44451 11.5537 3.50918C11.6102 3.55015 11.661 3.58705 11.6998 3.61071C11.7161 3.62034 11.7327 3.63002 11.7494 3.63978C11.8351 3.68983 11.9245 3.74197 11.9998 3.79971C13.1108 2.95071 14.4598 2.49071 15.8498 2.50071ZM18.5098 9.70071C18.9198 9.68971 19.2698 9.36071 19.2998 8.93971V8.82071C19.3298 7.41971 18.4808 6.15071 17.1898 5.66071C16.7798 5.51971 16.3298 5.74071 16.1798 6.16071C16.0398 6.58071 16.2598 7.04071 16.6798 7.18971C17.3208 7.42971 17.7498 8.06071 17.7498 8.75971V8.79071C17.7308 9.01971 17.7998 9.24071 17.9398 9.41071C18.0798 9.58071 18.2898 9.67971 18.5098 9.70071Z" fill="currentColor"/>
                            </svg>
                        </View>
                    </View>

                    <View className="absolute bottom-5 left-0 w-full flex flex-row justify-center" >

                        <View className="w-14 h-14 self-center bg-gray-800/30 border-2 border-gray-500/30 rounded-lg shadow-sm p-0.5 mr-4">
                            <Image className="w-full h-full object-cover rounded-lg" source={{uri: image2}} />
                        </View>

                        <View className="w-16 h-16 self-center bg-gray-800/30 border-2 border-white rounded-lg shadow-sm p-0.5 mr-4">
                            <Image className="w-full h-full object-cover rounded-lg" source={{uri: image1}} />
                        </View>

                        <View className="w-14 h-14 self-center bg-gray-800/30 border-2 border-gray-500/30 rounded-lg p-0.5 shadow-sm mr-4">
                            <Image className="w-full h-full object-cover rounded-lg" source={{uri: image3}} />
                        </View>

                        <View className="w-14 h-14 self-center bg-gray-800/30 border-2 border-gray-500/30 rounded-lg p-0.5 shadow-sm">
                            <Image className="w-full h-full object-cover rounded-lg" source={{uri: image4}} />
                        </View>

                    </View>

                </LinearGradient>

            </View>

            <View className="w-full flex flex-row justify-between px-4 mt-4">

                <View className="w-7/12 flex flex-col self-center">
                    <Text className="text-[12.5px] font-light text-gray-700">La Corvette / Burger</Text>
                    <Text className="text-lg font-semibold text-[#0b0b0b]">Cheeseburger</Text>
                    <Text className="text-[14px] font-medium text-[#e5724a]">3.000 XOF</Text>
                </View>

                <View className="w-24 h-9 items-center bg-[#cccccc]/40 shadow-sm rounded-xl flex flex-row justify-between px-3 self-center">
                    <Text className="text-lg font-semibold text-[#0b0b0b]">-</Text>
                    <Text className="text-base font-medium text-[#0b0b0b]">1</Text>
                    <Text className="text-lg font-semibold text-[#0b0b0b]">+</Text>
                </View>
               
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </Text>
                </View>

                <View className="w-full flex flex-row mt-4">

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#cccccc]/30 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">08:30 PM</Text>
                    </View>

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#cccccc]/30 shadow"></View>
                        <Text className="w-20 text-gray-700 text-center text-xs font-medium mt-1">5000 XOF</Text>
                    </View>

                    <View className="flex flex-col items-center mr-4">
                        <View className="w-14 h-14 rounded-full bg-[#cccccc]/30 shadow"></View>
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
                <Text className="text-xl text-white font-semibold self-center">Commander</Text>
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
