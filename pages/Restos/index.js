import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import * as React from 'react';
import { Header } from '../../components/commons/Header';
import Styles from '../../styles';
import Places from '../../components/sections/Places';
import Events from '../../components/sections/Events';
import Hotels from '../../components/sections/Hotels';

export default function Index({ route, navigation }) {

    const [text, onChangeText] = React.useState("");

    return (
        <View style={Styles.container} >

            <Header
                profil
                onPressBack={() => navigation.goBack()}
                // title={route.name}
                right="more-vertical"
                onRightPress={() => console.log('right')}
            />

            <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full px-4 py-2.5 bg-[#fef9f6]">

                <View className="w-full h-auto">

                    <Text className="text-2xl text-gray-900 font-bold">Visitez les plus beaux endroits du Sénégal </Text>

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
                            placeholder="Que cherchez vous ?"
                            value={text}
                        />
                    </View>
                </View>

                <View className="w-full mt-4">

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full h-full py-1">
                        <View className="w-24 min-w-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Tout</View>
                        <View className="w-24 min-w-fit px-2 py-1 mr-3 bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl text-center text-white text-base font-medium font-mono">Musique</View>
                        <View className="w-24 min-w-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Sport</View>
                        <View className="w-24 min-w-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Education</View>
                        <View className="w-24 min-w-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Culture</View>
                    </ScrollView>

                    {/* <Places /> */}

                </View>


            </ScrollView>


        </View>


    );
}

const styles = StyleSheet.create({
    regionScroll: {
        width: '100%',
        height: '20px',
        backgroundColor: 'pink',
    },
    searchBar:{
        backgroundColor: '#FAE5D2',
    }
});
