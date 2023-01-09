import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions, ScrollView, Image, TouchableOpacity, FlatList, TextInput, ActivityIndicator, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CommonActions } from '@react-navigation/native';
import Modal from "react-native-modalbox";
import Svg, { Path } from "react-native-svg";
import CalendarPicker from 'react-native-calendar-picker';
import { capitalize } from '../../utils/utils';
import { useMutation } from '@apollo/client';
import { SavePlaceReservation } from '../../graphql/types/placeReservation.type';
import Toast from 'react-native-toast-message';
import { getServices } from '../../graphql/types/service.type';

const {width, height } = Dimensions.get("window");
const mutedImage = "w-14 h-14 self-center bg-gray-800/30 border-2 border-gray-500/30 rounded-lg p-0.5";
const activeImage = "w-16 h-16 self-center bg-gray-800/30 border-2 border-white rounded-lg p-0.5";
const mutedCategory = "w-full bg-white shadow-sm border border-gray-200 rounded-2xl px-2.5 py-1.5 text-center text-gray-900 text-sm font-medium"
const activeCategory = "w-full bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl px-2.5 py-1.5 text-center text-white text-sm font-medium"

export default function DetailPlace({route, navigation}) {

  const { place } = route.params;
  console.log("Actual place => ", place)
  const user = JSON.parse(localStorage.getItem('user'));

  // Fetch services
  const serviceFilter = {"activated": true, "query": "", "placeId": place?.id}
  const {servicesData, servicesLoading, servicesError} = getServices(null,null,serviceFilter,null)
  console.log("getServices:servicesData => ", servicesData )

  const [chosenImage, setChosenImage] = useState(place?.images[0]);
  const [modalVisible, setModalVisible] = useState(false);

  //Booking variables
  const minDate = new Date(); // Today
  const [nbPersons, setNbPersons] = useState(1);
  const [services, setServices] = useState([]);
  const [date, setDate] = useState(null);
  const [total, setTotal] = useState(place.ticketPrice);

  function changeDate(date, type) {
    setDate(date.format('YYYY-MM-DD'))
    calculateTotal()
  }

  const [savePlaceReservation, { loading: mutationLoading, error: mutationError }] = useMutation(SavePlaceReservation);

  async function onBook() {
    if(mutationLoading) return null;
    try {
      const result = await savePlaceReservation({
        variables: {
          id: null,
          placeId: place.id,
          userId: user.id,
          date: date,
          nbPersons: parseInt(nbPersons),
          services: services
        }
      });
      if (result.data) {
        if (result.data.savePlaceReservation.__typename === 'InputError') {
          // An input error occurred, display an error message to the user
          Toast.show({type: 'error',text1: 'Error', text2: result.data.savePlaceReservation.message, visibilityTime: 2500,});
        } else if (result.data.savePlaceReservation.__typename === 'PlaceReservation') {
          // Mutation was successful, show a success message and navigate the user back to the list of places
          Toast.show({type: 'success', text1: 'Réservation', text2: 'Reservation saved!', visibilityTime: 2500,});
          navigation.dispatch(CommonActions.goBack({key: "ListPlace",})
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
    calculateTotal()
  };

  function toggleService(serviceId) {
    if (services.includes(serviceId)) {
      setServices(services.filter(id => id !== serviceId));
    } else {
      setServices([...services, serviceId]);
    }
  }

  function calculateTotal() {
    const selectedServices = servicesData.services.services.filter(service => services.includes(service.id));
    const totalAmount = selectedServices.reduce((acc, service) => acc + service.price, 0);
    setTotal((totalAmount + place.ticketPrice) * nbPersons)
  }

  function renderService({item, index}) {
    return (
        <Pressable onPress={() => toggleService(item.id)}  activeOpacity={1} className="min-w-fit mr-3 mb-0.5">
            <Text className={services.includes(item.id) ? activeCategory: mutedCategory}>{capitalize(item?.name)}</Text>
        </Pressable>
    );
  }

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
                <Text className="text-base font-medium text-gray-700 mt-2">Optez pour la simplicité de la réservation en ligne.</Text>
                
                <View className="mt-6 z-20">
                    <Text className="text-[16.5px] font-semibold text-gray-800 mb-3.5">Choisir des services</Text>
                    <FlatList data={servicesData?.services?.services} renderItem={renderService} scrollEnabled={true} showsHorizontalScrollIndicator={false} keyExtractor={item => item.id} horizontal={true} />
                </View>

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

                <View className="relative mt-6 w-full">
                    <Text className="text-[16.5px] font-semibold text-gray-800 mb-2.5">Choisir une date</Text>
                    <CalendarPicker
                        minDate={minDate}
                        width={345}
                        startFromMonday={true}
                        allowRangeSelection={false}
                        todayBackgroundColor="#aeaeae"
                        selectedDayColor="#333333"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={(date, type) => changeDate(date,type)}
                        weekdays={['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Van.', 'Sam.', 'Dim.']}
                        months={['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']}
                        previousTitle="←"
                        nextTitle="→"
                    />
                </View>

                <View className="mt-6 flex flex-row justify-end text-[16px]">
                    <Text className="font-semibold mr-2">Total :</Text>
                    <Text className="font-medium text-gray-600">{(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} XOF</Text>
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
                            <FlatList data={place?.images} renderItem={renderGalerie} keyExtractor={item => item.id} horizontal={true} />
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
                    <Text className="text-gray-400 text-[14px] font-medium self-center">{place?.address}</Text>
                </View>
                <Text className="text-xl text-[#0b0b0b] font-semibold">{place?.name}</Text>
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
                        {place?.desc}
                    </Text>
                </View>

                {/* <View className="w-full flex flex-row mt-4">

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
                    
                </View> */}

                <View className="w-full flex flex-col mt-5 mb-4">

                    <View></View>

                    <View className="w-full h-52 bg-slate-300 rounded-xl"></View>
                    
                </View>

            </View>


        </ScrollView>

        <View className="w-full h-[80px] bg-[#fefaf9] shadow rounded-t-2xl absolute bottom-0 left-0 z-10 px-6 py-3">
            {!modalVisible ?
                <TouchableOpacity onPress={() => setModalVisible(true)} className="w-full h-full bg-[#0b0b0b] shadow-lg rounded-2xl flex flex-row justify-center">
                    <Text className="text-xl text-white font-semibold self-center">Réserver</Text>
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
        height: 470,
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#fefaf9",
        zIndex: 1000,
    },

    textStyle: {
        fontSize: 22
    }

});
