import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput, FlatList, SafeAreaView, Dimensions, ActivityIndicator } from 'react-native';
import React, {useRef, useState} from 'react';
import { Header } from '../../components/commons/Header';
import Styles from '../../styles';
import Places from '../../components/sections/Places';
import Events from '../../components/sections/Events';
import Hotels from '../../components/sections/Hotels';
import { LinearGradient } from 'expo-linear-gradient';
import { getEvents } from '../../graphql/types/event.type';
import { getCategoryEvents } from '../../graphql/types/categoryEvent.type';
import Svg, { Path } from "react-native-svg";
import { capitalize, getDay, getMonth } from '../../utils/utils';

let mutedCategory = "w-full bg-white shadow-sm border border-gray-200 rounded-2xl px-2 py-1.5 text-center text-gray-900 text-sm font-medium"
let activeCategory = "w-full bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl px-2 py-1.5 text-center text-white text-sm font-medium"

const image1 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-frank-k-1808975.jpg?alt=media&token=570fec41-144b-4729-996f-69d724c84e0d"
const image2 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-aviz-3531070.jpg?alt=media&token=2ab8f434-a7e8-4408-b863-907c0e5d7fcf"
const image3 = "https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-ludmilla-diniz-3766344.jpg?alt=media&token=7d03b0aa-d4ac-44d5-9dd9-6ec4e60c9e07"

export default function ListEvent({ route, navigation }) {

    const [text, setText] = useState("");
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(10);
    const [filter, setFilter] = useState(null)
    const [direction, setDirection] = useState('asc')
    const [orderBy, setOrderBy] = useState({"id": direction})

    // Fetch events
    const {eventsData, eventsLoading, eventsError} = getEvents(page, take, filter,orderBy)
    // Fetch categoryEvents
    const {categoryEventsData, categoryEventsLoading, categoryEventsError} = getCategoryEvents(null, null, null, null)


    function searchItem(text){
        setText(text)
        let newFilter = {"activated": null, "query": text, "categoryEventId": null};
        setFilter(newFilter)
    }

    function filterByCategory(id){
        let newFilter = null
        newFilter = {"activated": null, "query": "", "categoryEventId": id};
        setFilter(newFilter)
    }

    function renderItem({item, index}) {
        return (
          <Pressable onPress={() => navigation.navigate('DetailEvent', {event: item})} activeOpacity={1} className="relative w-full h-64 rounded-2xl mb-5">
    
            <Image className="w-full h-full rounded-2xl" source={{uri: item?.images[0]?.url}} />
    
            <LinearGradient className="absolute top-0 left-0 w-full h-full rounded-2xl" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} >
                <View className="absolute bottom-5 left-6" >      
                    <Text className="text-md text-gray-400 font-normal uppercase">{item?.categoryEvent?.name}</Text>
                    <Text className="text-xl text-white font-semibold">{item?.name}</Text>
                </View>
                <View className="absolute top-2 left-3 flex flex-row p-2">
                    <View className="w-10 h-10 rounded-full bg-gray-400 bg-opacity-50 shadow-xl border-2 border-[#0e0e0e] self-center">
                        <Image className="w-full h-full rounded-full" source={{uri: image1}} />
                    </View>
                    <View className="w-10 h-10 rounded-full bg-gray-400 bg-opacity-50 shadow-xl border-2 border-[#0e0e0e] self-center -ml-5">
                        <Image className="w-full h-full rounded-full" source={{uri: image2}} />
                    </View>
                    <View className="w-10 h-10 rounded-full bg-gray-400 bg-opacity-50 shadow-xl border-2 border-[#0e0e0e] self-center -ml-5">
                        <Image className="w-full h-full rounded-full" source={{uri: image3}} />
                    </View>
                    <View className="w-10 h-10 rounded-full bg-[#0e0e0e] bg-opacity-50 shadow-xl border-2 border-[#0e0e0e] self-center flex flex-col justify-center -ml-5">
                        <Text className="w-full text-center text-sm text-white font-semibold">+2k</Text>
                    </View>
                </View>
                <View className="bg-white/90 rounded-lg h-fit w-fit flex flex-col items-center px-[8px] py-1 absolute top-5 right-4">
                        <Text className="text-[14.5px] font-semibold text-[#0b0b0b]">{getDay(item?.date)}</Text>
                        <Text className="text-[12px] font-normal text-gray-500">{getMonth(item?.date)}</Text>
                </View>
            </LinearGradient>
    
          </Pressable>
        );
    }


    function renderCategory({item, index}) {
        return (
            <Pressable onPress={() => filterByCategory(item.id)}  activeOpacity={1} className="w-24 min-w-fit mr-3 mb-0.5">
                <Text className={item.id == filter?.categoryEventId ? activeCategory: mutedCategory}>{capitalize(item?.name)}</Text>
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

                    <Text className="text-2xl text-gray-900 font-bold">Evènements à venir</Text>

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
                            placeholder="Rechercher un évènement ..."
                            value={text}
                        />
                    </View>
                </View>

                <View className="w-full mt-4">

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full py-1 mb-4">
                        <Pressable onPress={() => filterByCategory(null)}  activeOpacity={1} className="w-24 min-w-fit mr-3 mb-0.5">
                            <Text className={filter?.categoryEventId == null ? activeCategory: mutedCategory}>Tout</Text>
                        </Pressable>
                        <FlatList data={categoryEventsData?.categoryEvents?.categoryEvents} renderItem={renderCategory} keyExtractor={item => item.id} horizontal={true} />
                    </ScrollView>

                    {eventsLoading ? (
                        <View style={styles.loadingContainer} className="py-40">
                            <ActivityIndicator size="large" color="#b1b1b1" />
                        </View>
                    ) : (
                        <FlatList data={eventsData?.events?.events} renderItem={renderItem} keyExtractor={item => item.id} />
                    )}

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
