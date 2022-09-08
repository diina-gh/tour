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
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/concert2.webp?alt=media&token=257d9eea-199d-4a1e-99b7-0d6fc03264ab',
    title: 'Bottle Opener Lorem ipsum dolor sit amet',
    uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item3',
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/la-lutte-senegalaise-1024x609.jpeg?alt=media&token=9a5678fe-0279-47ac-ae52-e1ddb16a42ab',
    title: 'Camera lens Lorem ipsum dolor sit amet',
    uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item1',
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/bey%20concert.gif?alt=media&token=257aa2b7-ba2a-47ab-ab23-4ea22691f259',
    title: 'Shoes Lorem ipsum dolor sit amet',
    uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item2',
    image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/giphy.gif?alt=media&token=20cb6993-3c68-4f3b-8cbb-f1a7b50d3522',
    title: 'Peach tea Whiskey Lorem ipsum',
    uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
];


export default function Index({ route, navigation }) {

    const [text, onChangeText] = React.useState("");

    function renderItem({item, index}) {
        return (
          <Pressable activeOpacity={1} className="relative w-full h-64 rounded-2xl mb-5">
    
            <Image className="w-full h-full rounded-2xl" source={{uri: item?.image}} />
    
            <LinearGradient className="absolute top-0 left-0 w-full h-full rounded-2xl" colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} >
                <View className="absolute bottom-5 left-6" >
                    <Text className="text-md text-gray-400 font-normal">CONCERT</Text>
                    <Text className="text-xl text-white font-semibold">Concert de Mbalax</Text>
                </View>
                <Text className="bg-white rounded-2xl h-fit w-fit px-3 py-1.5 absolute top-5 right-6 text-md font-bold">Nov-22</Text>
            </LinearGradient>
    
          </Pressable>
        );
      }

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

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="w-full py-1 mb-4">
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Tout</View>
                        <View className="w-24 min-w-fith-fit px-2 py-1 mr-3 bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl text-center text-white text-base font-medium font-mono">Musique</View>
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Sport</View>
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Education</View>
                        <View className="w-24 min-w-fit h-fit px-2 py-1 mr-3 bg-white shadow-sm border border-gray-200 rounded-2xl text-center text-gray-900 text-base font-medium font-mono">Culture</View>
                    </ScrollView>

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

    searchBar:{
        backgroundColor: '#FAE5D2',
    },

});
