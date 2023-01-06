import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput, FlatList, ActivityIndicator, Alert } from 'react-native';
import React, {useRef, useState} from 'react';
import Toast from 'react-native-toast-message';
import { Header } from '../components/commons/Header';
import Styles from '../styles';
import Places from '../components/sections/Places';
import Events from '../components/sections/Events';
import Hotels from '../components/sections/Hotels';
import Restos from '../components/sections/Restos';
import { getPlaces } from '../graphql/types/place.type';
import { getCategories } from '../graphql/types/category.type';
import { capitalize } from '../utils/utils';
import { getEvents } from '../graphql/types/event.type';
import { getCategoryEvents } from '../graphql/types/categoryEvent.type';
import { getHotels } from '../graphql/types/hotel.type';
import { getRestaurants } from '../graphql/types/restaurant.type';
import Svg, { Path } from "react-native-svg";


let mutedCategory = "w-full bg-white shadow-sm border border-gray-200 rounded-2xl px-2 py-1.5 text-center text-gray-900 text-sm font-medium"
let activeCategory = "w-full bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl px-2 py-1.5 text-center text-white text-sm font-medium"

export default function Home({ route, navigation }) {

    const [text, setText] = useState("");
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(10);
    const [filter, setFilter] = useState(null)
    const [filterEvent, setFilterEvent] = useState(null)
    const [direction, setDirection] = useState('asc')
    const [orderBy, setOrderBy] = useState({"id": direction})

    // Fetch place
    const {placesData, placesLoading, placesError} = getPlaces(page, take, filter,orderBy)
    const {categoriesData, categoriesLoading, categoriesError} = getCategories(null, null, null, null)
    // Fetch events
    const {eventsData, eventsLoading, eventsError} = getEvents(null, null, filterEvent, null)
    const {categoryEventsData, categoryEventsLoading, categoryEventsError} = getCategoryEvents(null, null, null, null)
    // Fetch hotels
    const {hotelsData, hotelsLoading, hotelsError} = getHotels(null, null, null, null)
    // Fetch restaurants
    const {restaurantsData, restaurantsLoading, restaurantsError} = getRestaurants(null, null, null, null)

    function filterByCategory(id, type = 'place'){
        let newFilter = null
        switch (type) {
            case 'place':
                newFilter = {"activated": null, "query": "", "categoryId": id};
                setFilter(newFilter)
                break;
            case 'event':
                newFilter = {"activated": null, "query": "", "categoryEventId": id};
                setFilterEvent(newFilter)
        }
    }

    function searchPlace(text){
        setText(text)
        let newFilter = {"activated": null, "query": text, "categoryId": null};
        setFilter(newFilter)
    }


    function renderCategory({item, index}) {
        return (
            <Pressable onPress={() => filterByCategory(item.id)}  activeOpacity={1} className="w-24 min-w-fit mr-3 mb-0.5">
                <Text className={item.id == filter?.categoryId ? activeCategory: mutedCategory}>{capitalize(item?.name)}</Text>
            </Pressable>
        );
    }

    function renderCategoryEvent({item, index}) {
        return (
            <Pressable onPress={() => filterByCategory(item.id, 'event')}  activeOpacity={1} className="w-24 min-w-fit mr-3 mb-0.5">
                <Text className={item.id == filterEvent?.categoryEventId ? activeCategory: mutedCategory}>{capitalize(item?.name)}</Text>
            </Pressable>
        );
    }

    return (
        <View style={[Styles.container, styles.fontFamily]} >

            <Header
                profil
                navigation={navigation}
                onPressBack={() => navigation.goBack()}
                // title={route.name}
                right="more-vertical"
                onRightPress={() => console.log('right')}
            />

            <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full px-4 py-2.5 bg-[#fef9f6]">

                <View className="w-full h-auto">
            
                    <Text className="text-xl text-gray-900 font-bold">Visitez les plus beaux endroits du Sénégal </Text>

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
                            onChangeText={value => searchPlace(value)}
                            placeholder="Rechercher un site ..."
                            value={text}
                        />
                    </View>
                </View>

                <View className="w-full mt-4">

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full h-full py-1">
                        <Pressable onPress={() => filterByCategory(null)}  activeOpacity={1} className="w-24 min-w-fit mr-3 mb-0.5">
                            <Text className={filter?.categoryId == null ? activeCategory: mutedCategory}>Tout</Text>
                        </Pressable>
                        <FlatList data={categoriesData?.categories?.categories} renderItem={renderCategory} keyExtractor={item => item.id} horizontal={true} />
                    </ScrollView>

                    {placesLoading ? (
                        <View style={styles.loadingContainer} className="py-40">
                            <ActivityIndicator size="large" color="#b1b1b1" />
                        </View>
                    ) : (

                        <Places navigation={navigation} places={placesData?.places?.places}  />

                    )}

                </View>

                <View className="w-full mt-2">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Evènements à venir</Text>
                        <Text className="text-base font-medium text-[#e16728] underline self-center">Voir+</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full h-full py-1 mt-2">
                        <Pressable onPress={() => filterByCategory(null, 'event')}  activeOpacity={1} className="w-24 min-w-fit mr-3 mb-0.5">
                            <Text className={filterEvent?.categoryEventId == null ? activeCategory: mutedCategory}>Tout</Text>
                        </Pressable>
                        <FlatList data={categoryEventsData?.categoryEvents?.categoryEvents} renderItem={renderCategoryEvent} keyExtractor={item => item.id} horizontal={true} />
                    </ScrollView>

                    {eventsLoading ? (
                        <View style={styles.loadingContainer} className="py-24">
                            <ActivityIndicator size="large" color="#b1b1b1" />
                        </View>
                    ) : (

                        <Events navigation={navigation} events={eventsData?.events?.events} />

                    )}

                </View>

                <View className="w-full">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Meilleurs hôtels</Text>
                        <Text className="text-base font-medium text-[#e16728] underline self-center">Voir+</Text>
                    </View>

                    {hotelsLoading ? (
                        <View style={styles.loadingContainer} className="py-24">
                            <ActivityIndicator size="large" color="#b1b1b1" />
                        </View>
                    ) : (
                        <Hotels navigation={navigation} hotels={hotelsData?.hotels?.hotels} />
                    )}

                </View>

                <View className="w-full">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Top des restaurants</Text>
                        <Text className="text-base font-medium text-[#e16728] underline self-center">Voir+</Text>
                    </View>

                    {restaurantsLoading ? (
                        <View style={styles.loadingContainer} className="py-24">
                            <ActivityIndicator size="large" color="#b1b1b1" />
                        </View>
                    ) : (
                        <Restos navigation={navigation} restaurants={restaurantsData?.restaurants?.restaurants} />
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

});
