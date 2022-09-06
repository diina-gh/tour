import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import * as React from 'react';
import { Header } from '../components/commons/Header';
import Styles from '../styles';
import Places from '../components/sections/Places';
import Events from '../components/sections/Events';
import SearchIcon from '../components/ui/icons/searchIcon';

export default function Home({ route, navigation }) {

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
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="w-full h-full">

                        <View className="w-[72px] flex flex-col mr-4">
                            <View className="w-[72px] h-[72px] rounded-full border-2 border-orange-400 relative p-0.5">
                                <Image className="w-full h-full rounded-full object-cover" source={{uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/18045848-22350793.jpeg?alt=media&token=6a6d1e83-c0d8-4067-a148-4feaddbac01f'}} />
                                <View className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-5 rounded-full"></View>
                            </View>
                            <Text className="text-xs font-medium text-gray-800 mt-1 w-[72px] h-auto text-center ">Dakar</Text>
                        </View>

                        <View className="w-[72px] flex flex-col mr-4">
                            <View className="w-[72px] h-[72px] rounded-full border-2 border-orange-400 relative p-0.5">
                                <Image className="w-full h-full rounded-full object-cover" source={{uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/lac-rose.jpeg?alt=media&token=f239da10-17cf-4fe5-9213-8deae1203a2b'}} />
                                <View className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-5 rounded-full"></View>
                            </View>
                            <Text className="text-xs font-medium text-gray-800 mt-1 w-[72px] h-auto text-center truncate ">Thies</Text>
                        </View>

                        <View className="w-[72px] flex flex-col mr-4">
                            <View className="w-[72px] h-[72px] rounded-full border-2 border-orange-400 relative p-0.5">
                                <Image className="w-full h-full rounded-full object-cover" source={{uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/AdobeStock_305702974-Senegal-Casamance-Gambia-Mangroves-aerial-view.jpg.webp?alt=media&token=4cf5a974-95a1-4d74-ba89-61489141f932'}} />
                                <View className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-5 rounded-full"></View>
                            </View>
                            <Text className="text-xs font-medium text-gray-800 mt-1 w-[72px] h-auto text-center truncate ">Casamance</Text>
                        </View>


                        <View className="w-[72px] flex flex-col mr-4">
                            <View className="w-[72px] h-[72px] rounded-full border-2 border-orange-400 relative p-0.5">
                                <Image className="w-full h-full rounded-full object-cover" source={{uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/Les-puits-de-sel-multicolores-de-palmarin.jpeg?alt=media&token=77120c1e-aa4f-403f-84f5-cc141a21ea20'}} />
                                <View className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-5 rounded-full"></View>
                            </View>
                            <Text className="text-xs font-medium text-gray-800 mt-1 w-[72px] h-auto text-center truncate ">Kaolack</Text>
                        </View>

                        <View className="w-[72px] flex flex-col mr-4">
                            <View className="w-[72px] h-[72px] rounded-full border-2 border-orange-400 relative p-0.5">
                                <Image className="w-full h-full rounded-full object-cover" source={{uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/96cd8d35ac9d6fc85257386e78361bc0.webp?alt=media&token=51388630-abe3-4952-9c9a-1f650cb15555'}} />
                                <View className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-5 rounded-full"></View>
                            </View>
                            <Text className="text-xs font-medium text-gray-800 mt-1 w-[72px] h-auto text-center truncate ">Mbour</Text>
                        </View>


                    </ScrollView>
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

                <View className="w-full mt-2">
                    <Places />
                </View>

                <View className="w-full mt-2">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Prochaines évènements</Text>
                        <Text className="text-base font-medium text-[#EDA47E] underline self-center">Voir+</Text>
                    </View>

                    <Events />

                </View>

                <View className="w-full mt-2">

                    <View className="w-full flex flex-row justify-between">
                        <Text className="text-lg font-semibold self-center">Meilleurs hôtels</Text>
                        <Text className="text-base font-medium text-[#EDA47E] underline self-center">Voir+</Text>
                    </View>

                    <Places />

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
