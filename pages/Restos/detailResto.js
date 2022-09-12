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
        id: '1',
        image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-shameel-mukkath-5639516.jpg?alt=media&token=01526a0c-3666-4504-88d3-82cd4acaf420',
        title: 'Cheeseburger',
        restaurant: 'La Corvette',
        price: '3.500 XOF',
    },
    {
        id: '2',
        image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-ruslan-khmelevsky-4862267.jpg?alt=media&token=7fc2dcba-de8e-4be9-969e-e767273794c2',
        title: 'Margherita',
        restaurant: 'La Corvette',
        price: '4.000 XOF',
    },
    {
        id: '3',
        image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-engin-akyurt-7813578.jpg?alt=media&token=1eb90458-b8c0-43a3-bea9-5ab7efe7d647',
        title: 'Pepperoni',
        restaurant: 'La Corvette',
        price: '3.000 XOF',
    },
    {
        id: '4',
        image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-harry-dona-2338407.jpg?alt=media&token=a8a87796-a372-4d50-9646-348e8a8b0682',
        title: 'Chicken Wings',
        restaurant: 'La Corvette',
        price: '6.500 XOF',
    },
    {
        id: '5',
        image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-polina-tankilevitch-4518638.jpg?alt=media&token=bf7a0fb6-831d-4cb9-b8fc-0ed080188394',
        title: 'Hot Dog',
        restaurant: 'La Corvette',
        price: '3.000 XOF',
    },
    {
        id: '6',
        image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-michelle-riach-995743.jpg?alt=media&token=7476d0f9-067a-491a-b213-d940e22d2b06',
        title: 'Cheeseburger',
        restaurant: 'La Corvette',
        price: '4.000 XOF',
    },
  ];

const image1 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-frank-k-1808975.jpg?alt=media&token=570fec41-144b-4729-996f-69d724c84e0d"
const image2 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-aviz-3531070.jpg?alt=media&token=2ab8f434-a7e8-4408-b863-907c0e5d7fcf"
const image3 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-ludmilla-diniz-3766344.jpg?alt=media&token=7d03b0aa-d4ac-44d5-9dd9-6ec4e60c9e07"

const image_height = 0.265 * windowWidth;


export default function DetailResto({ route, navigation }) {

    const [text, onChangeText] = React.useState("");

    function renderItem({item, index}) {
        return (
          <Pressable onPress={() => navigation.navigate('DetailProduit', { name: 'Jane' })} activeOpacity={1} className="relative flex flex-col p-1.5 bg-white/90 rounded-2xl shadow" style={{flex: 1, flexDirection: 'column',margin: 6}}>
        
            <View style={{height: image_height}} className="relative w-full rounded-2xl bg-gray-300">
                <Image className="w-full h-full object-cover rounded-2xl" source={{uri: item.image}} />
                <LinearGradient className="absolute top-0 left-0 w-full h-full rounded-2xl" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.15)']} >
                    <View className="absolute top-2 right-2 w-7 h-7 flex flex-row justify-center bg-white/90 rounded-full">
                        <View className="w-4 h-4 text-[#3d3d3d] self-center">
                            <svg className='w-full h-full' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8498 2.50071C16.4808 2.50071 17.1108 2.58971 17.7098 2.79071C21.4008 3.99071 22.7308 8.04071 21.6198 11.5807C20.9898 13.3897 19.9598 15.0407 18.6108 16.3897C16.6798 18.2597 14.5608 19.9197 12.2798 21.3497L12.0298 21.5007L11.7698 21.3397C9.48077 19.9197 7.34977 18.2597 5.40077 16.3797C4.06077 15.0307 3.02977 13.3897 2.38977 11.5807C1.25977 8.04071 2.58977 3.99071 6.32077 2.76971C6.61077 2.66971 6.90977 2.59971 7.20977 2.56071H7.32977C7.61077 2.51971 7.88977 2.50071 8.16977 2.50071H8.27977C8.90977 2.51971 9.51977 2.62971 10.1108 2.83071H10.1698C10.2098 2.84971 10.2398 2.87071 10.2598 2.88971C10.4808 2.96071 10.6898 3.04071 10.8898 3.15071L11.2698 3.32071C11.3616 3.36968 11.4647 3.44451 11.5537 3.50918C11.6102 3.55015 11.661 3.58705 11.6998 3.61071C11.7161 3.62034 11.7327 3.63002 11.7494 3.63978C11.8351 3.68983 11.9245 3.74197 11.9998 3.79971C13.1108 2.95071 14.4598 2.49071 15.8498 2.50071ZM18.5098 9.70071C18.9198 9.68971 19.2698 9.36071 19.2998 8.93971V8.82071C19.3298 7.41971 18.4808 6.15071 17.1898 5.66071C16.7798 5.51971 16.3298 5.74071 16.1798 6.16071C16.0398 6.58071 16.2598 7.04071 16.6798 7.18971C17.3208 7.42971 17.7498 8.06071 17.7498 8.75971V8.79071C17.7308 9.01971 17.7998 9.24071 17.9398 9.41071C18.0798 9.58071 18.2898 9.67971 18.5098 9.70071Z" fill="currentColor"/>
                            </svg>
                        </View>
                    </View>
                </LinearGradient>
            </View>

            <View className="flex flex-col px-1 pb-2.5 mt-2">
                <Text className="text-[11.5px] text-gray-600 font-light">{item.restaurant}</Text>
                <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
                <Text className="text-[12.4px] font-medium text-[#e5724a] mt-0.5">{item.price}</Text>
            </View>

    
          </Pressable>
        );
      }

    return (
        <View style={[Styles.container, styles.fontFamily]} >

            <Header
                back
                title="La Corvette"
                onPressBack={() => navigation.goBack()}
                right="more-vertical"
                onRightPress={() => console.log('right')}
            />

            <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full px-4 py-2.5 bg-[#fef9f6]">

                <View className="w-full h-auto">

                    <Text className="text-2xl text-gray-900 font-bold">Saveur originale de La Corvette</Text>

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
                            placeholder="Rechercher un menu ..."
                            value={text}
                        />
                    </View>
                </View>

                <View className="w-full mt-4">

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full py-1 mb-4">
                        <View className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-[#e5724a] shadow-sm border border-gray-200 rounded-2xl text-center text-white text-sm font-medium ">Tout</View>
                        <View className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Pizza</View>
                        <View className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900  text-sm font-medium  ">Burger</View>
                        <View className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Hotdog</View>
                        <View className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Culture</View>
                    </ScrollView>

                    <FlatList
                        data={data}
                        numColumns={2}
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


