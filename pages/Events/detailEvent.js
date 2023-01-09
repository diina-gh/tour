import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions, ScrollView, FlatList, Image, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import Modal from "react-native-modalbox";
import { getDay, getMonth } from '../../utils/utils';
import Svg, { Path } from "react-native-svg";
import { SaveEventReservation } from '../../graphql/types/eventReservation';
import Toast from 'react-native-toast-message';
import { useMutation } from '@apollo/client';

const {width, height } = Dimensions.get("window");
let mutedImage = "w-14 h-14 self-center bg-gray-800/30 border-2 border-gray-500/30 rounded-lg p-0.5";
let activeImage = "w-16 h-16 self-center bg-gray-800/30 border-2 border-white rounded-lg p-0.5";

export default function DetailEvent({route, navigation}) {

  const { event } = route.params;
  const user = JSON.parse(localStorage.getItem('user'));

  const [chosenImage, setChosenImage] = useState(event?.images[0]);
  const [nbPersons, setNbPersons] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const [saveEventReservation, { loading: mutationLoading, error: mutationError }] = useMutation(SaveEventReservation);

  async function onBook() {
    if(mutationLoading) return null;
    try {
      const result = await saveEventReservation({
        variables: {
          id: null,
          eventId: event.id,
          userId: user.id,
          nbPersons: parseInt(nbPersons) 
        }
      });
      if (result.data) {
        if (result.data.saveEventReservation.__typename === 'InputError') {
          // An input error occurred, display an error message to the user
          Toast.show({type: 'error',text1: 'Error', text2: result.data.saveEventReservation.message, visibilityTime: 2500,});
        } else if (result.data.saveEventReservation.__typename === 'EventReservation') {
          // Mutation was successful, show a success message and navigate the user back to the list of hotels
          Toast.show({type: 'success', text1: 'Réservation', text2: 'Reservation saved!', visibilityTime: 2500,});
          navigation.dispatch(CommonActions.goBack({key: "ListEvent",})
          );
        }
      }
    } catch (e) {
      // An error occurred, display an error message to the user
      console.error(e);
      alert(e.message);
    }
  }

  const updateNbPersons = (increment) => {
    setNbPersons((prevNbPersons) => {
      const newNbPersons = prevNbPersons + increment;
      return Math.max(newNbPersons, 1);
    });
  };


  const getModal = () =>{
    return (
      <Modal entry="bottom" backdropPressToClose={true} isOpen={modalVisible} style={styles.modalBox} onClosed={() => setModalVisible(false)}>
        <View style={styles.content} className="relative w-full h-full pb-16">

          {mutationLoading && (
              <View className="absolute top-0 left-0 w-full h-full bg-gray-300/50 rounded-t-[25] z-40 items-center justify-center">
                  <ActivityIndicator size="large" color="#9d9d9d" />
              </View>        
          )}

          <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full px-6 py-8">

              <Text className="text-2xl font-bold text-[#0b0b0b]">Réservation</Text>
              <Text className="text-base font-medium text-gray-700 mt-2">Ne tardez pas à réserver votre place pour l'évènement de l'année."</Text>
              

              <View className="mt-6">
                  <Text className="text-[16.5px] font-semibold text-gray-800 mb-2">Nombre de personnes</Text>
                  <View className="w-min flex flex-row justify-start">
                    <View className="w-24 h-9 items-center bg-[#0b0b0b] shadow-sm rounded-xl flex flex-row justify-between px-3 self-center mt-2">
                        <Button color="transparent" titleStyle={{ color: "#000000" }} onPress={() => updateNbPersons(-1)} className="text-lg font-semibold h-full" title="-" />
                        <Text className="text-base font-medium text-gray-50">{nbPersons}</Text>
                        <Button color="#transparent" titleStyle={{ color: "#000000" }} onPress={() => updateNbPersons(1)} className="text-lg font-semibold h-full" title="+" />
                    </View>
                  </View>
              </View>

              <View className="mt-6 flex flex-row justify-end text-[16px]">
                <Text className="font-semibold mr-2">Total :</Text>
                <Text className="font-medium text-gray-600">{(event?.ticketPrice * nbPersons).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} XOF</Text>
              </View>

          </ScrollView>
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
            {!modalVisible ?
                <TouchableOpacity onPress={() => setModalVisible(true)} className="w-full h-full bg-[#0b0b0b] shadow-lg rounded-2xl flex flex-row justify-center">
                    <Text className="text-xl text-white font-semibold self-center">Participer</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onBook} className="w-full h-full bg-[#0b0b0b] shadow-lg rounded-2xl flex flex-row justify-center">
                    <Text className="text-xl text-white font-semibold self-center">Valider</Text>
                </TouchableOpacity>
            }

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
