import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import * as React from 'react';
import { Header } from '../components/commons/Header';
import Styles from '../styles';
import Places from '../components/sections/Places';
import Events from '../components/sections/Events';
import Hotels from '../components/sections/Hotels';
import Restos from '../components/sections/Restos';
import { gql, useQuery } from '@apollo/client'
import { PlacesQuery } from '../graphql/types/place.type';


export default function Home({ route, navigation }) {

    const [text, onChangeText] = React.useState("");

    const { data, loading } = useQuery(PlacesQuery)
    if(data) console.log("home:query:data => ", data)

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
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 28 28" fill="#ababab">
                                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/>
                            </svg>
                        </View>
                    </View>
                    <View className="w-[90%] h-full rounded-lg self-center">
                        <TextInput
                            className="w-full h-full px-2 text-[#7a7a7a] text-base font-medium border-none active:border-none"
                            onChangeText={onChangeText}
                            placeholder="Rechercher un site ..."
                            value={text}
                        />
                    </View>
                </View>

                <View className="w-full mt-4">

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full h-full py-1">
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl text-center text-white text-sm font-medium  ">Tout</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Sport</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900  text-sm font-medium  ">Musique</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Education</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Culture</Text>
                    </ScrollView>

                    <Places />

                </View>

                <View className="w-full mt-2">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Evènements à venir</Text>
                        <Text className="text-base font-medium text-[#e16728] underline self-center">Voir+</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full h-full mt-2 py-1">
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl text-center text-white text-sm font-medium  ">Tout</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Sport</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900  text-sm font-medium  ">Musique</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Education</Text>
                        <Text className="w-24 min-w-fit px-2 py-1.5 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-sm font-medium  ">Culture</Text>
                    </ScrollView>

                    <Events navigation={navigation} />

                </View>

                <View className="w-full">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Meilleurs hôtels</Text>
                        <Text className="text-base font-medium text-[#e16728] underline self-center">Voir+</Text>
                    </View>

                    <Hotels navigation={navigation} />

                </View>

                <View className="w-full">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Top des restaurants</Text>
                        <Text className="text-base font-medium text-[#e16728] underline self-center">Voir+</Text>
                    </View>

                    <Restos navigation={navigation} />

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
