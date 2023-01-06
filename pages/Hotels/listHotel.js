import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput, FlatList, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import React, {useRef, useState} from 'react';
import { Header } from '../../components/commons/Header';
import Styles from '../../styles';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from "react-native-svg";
import { getHotels } from '../../graphql/types/hotel.type';

  
export default function ListHotel({ route, navigation }) {

    // States
    const [text, setText] = useState("");
    const [filter, setFilter] = useState(null)

    // Fetch hotels
    const {hotelsData, hotelsLoading, hotelsError} = getHotels(null, null, filter, null)

    // Search Items
    function searchItem(text){
        setText(text)
        let newFilter = {"activated": null, "query": text};
        setFilter(newFilter)
    }

    function renderItem({item, index}) {
        return (
          <Pressable activeOpacity={1} onPress={() => navigation.navigate('DetailHotel', {hotel: item})} className="relative w-full h-64 rounded-2xl mb-5">
    
            <Image className="w-full h-full rounded-2xl" source={{uri: item?.images[0]?.url}} />
    
            <LinearGradient className="absolute top-0 left-0 w-full h-full rounded-2xl" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} >
                
                <View className="absolute bottom-5 left-6" >
                    <View className="flex flex-row">
                        <View className="w-3 text-gray-200 mr-0.5 self-center">
                            <Svg className="w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></Path>
                                <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></Path>
                            </Svg>
                        </View>
                        <Text className="text-gray-200 text-sm font-medium self-center">{item?.address}</Text>
                    </View>
                    <Text className="text-xl text-white font-semibold">{item?.name}</Text>
                </View>

                {/* <View className="absolute top-7 left-6 flex flex-row text-[16.5px] text-white font-semibold">
                    60.000 XOF / Nuit
                </View> */}

                <View className="bg-white/90 rounded-2xl px-3 py-1.5 absolute top-5 right-6 w-fit flex flex-row" >
                    <Text className="text-gray-800 text-sm font-semibold mr-1 self-center">4/5</Text>
                    <View className="w-5 text-orange-300 self-center">
                        <Svg className="w-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><Path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></Svg>
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
                            <Svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 28 28" fill="#ababab">
                                <Path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
                            </Svg>
                        </View>
                    </View>
                    <View className="w-[90%] h-full rounded-lg self-center">
                        <TextInput
                            className="w-full h-full px-2 text-[#7a7a7a] text-base font-medium border-none active:border-none"
                            onChangeText={value => searchItem(value)}
                            placeholder="Rechercher un hôtel ..."
                            value={text}
                        />
                    </View>
                </View>

                {hotelsLoading ? (
                    <View style={styles.loadingContainer} className="py-40">
                        <ActivityIndicator size="large" color="#b1b1b1" />
                    </View>
                ) : (
                    <View className="w-full mt-5">
                        <FlatList
                            data={hotelsData?.hotels?.hotels}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                )}

            </ScrollView>


        </View>


    );
}

const styles = StyleSheet.create({
	fontFamily: {
        fontFamily: 'lucida grande',
	},

})
