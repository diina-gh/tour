import * as React from 'react';
import { StyleSheet, Pressable, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Styles from '../../styles';
import { Header } from '../../components/commons/Header';
import Svg, { G, Path } from "react-native-Svg";

export default function Profil({route, navigation}) {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <SafeAreaView style={[Styles.container, styles.fontFamily]} >
        <Header
            profil
            navigation={navigation}
            onPressBack={() => navigation.goBack()}
            // title={route.name}
            right="more-vertical"
            onRightPress={() => console.log('right')}
        />

        <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full px-4 py-4 bg-[#fef9f6]">

          <View className="w-full bg-[#f4f2ef] rounded-xl  items-center py-4 px-4 pb-9">
            <View className="w-full flex flex-row justify-end">
              <Svg className="w-[14px]" xmlns="http://www.w3.org/2000/Svg" id="Outline" viewBox="0 0 24 24">
                <Path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><Path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/>
              </Svg>
            </View>
            <View className="w-20 h-20 rounded-full border-2 border-gray-900 shadow-sm mt-3.5 p-0.5">
              <Image className="w-full h-full rounded-full" source={{uri: user?.image?.url}} />
            </View>
            <Text className="text-[14.5px] font-semibold text-gray-900 mt-2.5">{user?.firstname + ' ' + user?.lastname}</Text>
            <Text className="text-[12px] font-medium text-gray-700 mt-0.5">{user?.email}</Text>
          </View>

          <View className="mt-10 px-1">

            <Pressable className="flex flex-row justify-between text-gray-900 px-1.5 py-4 active:bg-[#f4f2ef]/90 active:shadow-inner">
              <Text className="text-[14px] font-semibold">Mon profil</Text>
              <Svg className="w-[12.5px]" xmlns="http://www.w3.org/2000/Svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24">
                <Path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/>
              </Svg>
            </Pressable>

            <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>

            <Pressable onPress={() => navigation.navigate('Panier')} className="flex flex-row justify-between text-gray-900 px-1.5 py-4 active:bg-[#f4f2ef]/90 active:shadow-inner">
              <Text className="text-[14px] font-semibold">Mon panier</Text>
              <Svg className="w-[12.5px]" xmlns="http://www.w3.org/2000/Svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24">
                <Path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/>
              </Svg>
            </Pressable>

            <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>

            <Pressable className="flex flex-row justify-between text-gray-900 px-1.5 py-4 active:bg-[#f4f2ef]/90 active:shadow-inner">
              <Text className="text-[14px] font-semibold">Mes réservation</Text>
              <Svg className="w-[12.5px]" xmlns="http://www.w3.org/2000/Svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24">
                <Path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/>
              </Svg>
            </Pressable>

            <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>

            <Pressable className="flex flex-row justify-between text-gray-900 px-1.5 py-4 active:bg-[#f4f2ef]/90 active:shadow-inner">
              <Text className="text-[14px] font-semibold">Mes favoris</Text>
              <Svg className="w-[12.5px]" xmlns="http://www.w3.org/2000/Svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24">
                <Path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/>
              </Svg>
            </Pressable>

            {/* <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>

            <Pressable className="flex flex-row justify-between px-1.5 py-4 active:bg-[#f4f2ef]/90 active:shadow-inner">
              <Text className="text-[14px] font-semibold">Se déconnecter</Text>
              <Svg className="w-[12.5px]" xmlns="http://www.w3.org/2000/Svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" >
                <Path  d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/>
              </Svg>
            </Pressable> */}

            <TouchableOpacity onPress={() => {}}  className="w-full h-[50px] bg-[#f4f2ef] rounded-xl px-4 py-2 mt-6">
              <View className="w-full h-full rounded-2xl flex flex-row justify-between items-center">
                <Text className="text-[14px] font-semibold">Se déconnecter</Text>
                <Svg className="w-[12.5px]" id="Capa_1" viewBox="0 0 512 512" >
                  <G>
                    <Path d="M170.698,448H72.757c-4.814-0.012-8.714-3.911-8.725-8.725V72.725c0.012-4.814,3.911-8.714,8.725-8.725h97.941   c17.673,0,32-14.327,32-32s-14.327-32-32-32H72.757C32.611,0.047,0.079,32.58,0.032,72.725v366.549   C0.079,479.42,32.611,511.953,72.757,512h97.941c17.673,0,32-14.327,32-32S188.371,448,170.698,448z"/>
                    <Path d="M483.914,188.117l-82.816-82.752c-12.501-12.495-32.764-12.49-45.259,0.011s-12.49,32.764,0.011,45.259l72.789,72.768   L138.698,224c-17.673,0-32,14.327-32,32s14.327,32,32,32l0,0l291.115-0.533l-73.963,73.963   c-12.042,12.936-11.317,33.184,1.618,45.226c12.295,11.445,31.346,11.436,43.63-0.021l82.752-82.752   c37.491-37.49,37.491-98.274,0.001-135.764c0,0-0.001-0.001-0.001-0.001L483.914,188.117z"/>
                  </G>
                </Svg>
              </View> 
            </TouchableOpacity>

          </View>

        </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fontFamily: {
      fontFamily: 'lucida grande',
  },
});