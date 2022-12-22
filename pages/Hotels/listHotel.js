import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput, FlatList, SafeAreaView, Dimensions } from 'react-native';
import * as React from 'react';
import { Header } from '../../components/commons/Header';
import Styles from '../../styles';
import Places from '../../components/sections/Places';
import Events from '../../components/sections/Events';
import Hotels from '../../components/sections/Hotels';
import { LinearGradient } from 'expo-linear-gradient';

const {width: windowWidth} = Dimensions.get('window');

const data = [
    {
      id: 'item6',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-thorsten-technoman-338504.jpg?alt=media&token=4d92b49b-e524-407d-8697-9a2e45cdc8e7',
      title: 'Hotel Riu Baobab',
      uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    },
    {
      id: 'item2',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/33075123.jpeg?alt=media&token=9990eeb4-d38e-43a1-85a5-e85a145e5109',
      title: 'Terrou-Bi',
      uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    },
    {
      id: 'item3',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/55472295_-VmXnOnzPz1EYBje8D3onqo7Ey16KEp4TfHzqyXaRm0.jpeg?alt=media&token=f790f246-f132-47aa-9d2a-36942aabea2c',
      title: 'Radisson Blu Hotel',
      uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    },
    {
      id: 'item1',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/vue-des-piscines-lage.jpeg?alt=media&token=d7f9b82d-6760-4847-ab00-36ebd12bde03',
      title: 'Pullman Dakar Teranga',
      uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    },
  ];
  

const image1 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-frank-k-1808975.jpg?alt=media&token=570fec41-144b-4729-996f-69d724c84e0d"
const image2 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-aviz-3531070.jpg?alt=media&token=2ab8f434-a7e8-4408-b863-907c0e5d7fcf"
const image3 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-ludmilla-diniz-3766344.jpg?alt=media&token=7d03b0aa-d4ac-44d5-9dd9-6ec4e60c9e07"

export default function ListHotel({ route, navigation }) {

    const [text, onChangeText] = React.useState("");

    function renderItem({item, index}) {
        return (
          <Pressable activeOpacity={1} onPress={() => navigation.navigate('DetailHotel', { name: 'Jane' })} className="relative w-full h-64 rounded-2xl mb-5">
    
            <Image className="w-full h-full rounded-2xl" source={{uri: item?.image}} />
    
            <LinearGradient className="absolute top-0 left-0 w-full h-full rounded-2xl" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} >
                
                <View className="absolute bottom-5 left-6" >
                    <View className="flex flex-row">
                        <View className="w-3 text-gray-200 mr-0.5 self-center">
                            <svg className="w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </View>
                        <Text className="text-gray-200 text-sm font-medium self-center">Dakar, Senegal</Text>
                    </View>
                    <Text className="text-xl text-white font-semibold">{item?.title}</Text>
                </View>

                {/* <View className="absolute top-7 left-6 flex flex-row text-[16.5px] text-white font-semibold">
                    60.000 XOF / Nuit
                </View> */}

                <View className="bg-white/90 rounded-2xl px-3 py-1.5 absolute top-5 right-6 w-fit flex flex-row" >
                    <Text className="text-gray-800 text-sm font-semibold mr-1 self-center">4/5</Text>
                    <View className="w-5 text-orange-300 self-center">
                        <svg className="w-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    </View>
                </View>

            </LinearGradient>
    
          </Pressable>
        );
      }

    return (
        <View style={[Styles.container, styles.fontFamily]} >

            <Header
                profil
                onPressBack={() => navigation.goBack()}
                // title={route.name}
                right="more-vertical"
                onRightPress={() => console.log('right')}
            />

            <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full px-4 py-2.5 bg-[#fef9f6]">

                <View className="w-full h-auto">

                    <Text className="text-xl text-gray-900 font-bold">Retrouvez les meilleurs hôtels</Text>

                </View>

                <View className="w-full h-11 bg-[#f4f2ef] rounded-full shadow-inner border border-0.5 border-[#f0f0f0] flex flex-row justify-between px-2.5 py-1 mt-3">
                    <View className="w-[9%] h-full flex flex-col justify-center">
                        <View className="w-6 h-6 -mb-1 self-center">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 28 28" fill="#ababab">
                                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
                            </svg>
                        </View>
                    </View>
                    <View className="w-[90%] h-full rounded-lg self-center">
                        <TextInput
                            className="w-full h-full px-2 text-[#7a7a7a] text-base font-medium border-none active:border-none"
                            onChangeText={onChangeText}
                            placeholder="Rechercher un hôtel ..."
                            value={text}
                        />
                    </View>
                </View>

                <View className="w-full mt-5">

                    {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full py-1 mb-4">
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium  ">Tout</View>
                        <View className="w-24 min-w-fith-fit px-2 py-1 mr-3 bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl text-center text-white text-base font-medium  ">Musique</View>
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium  ">Sport</View>
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium  ">Education</View>
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium  ">Culture</View>
                    </ScrollView> */}

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                </View>


            </ScrollView>


        </View>


    );
}

const styles = StyleSheet.create({
	fontFamily: {
        fontFamily: 'lucida grande',
	},

})
