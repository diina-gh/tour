import * as React from 'react';
import { Dimensions, StyleSheet, Pressable, Text, TextInput,  View, Image } from 'react-native';
import Styles from '../styles';

const imageBg= 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/digital-technology-background-with-hexagon-pattern-white-tone_53876-117566.webp?alt=media&token=402e9cf7-0008-49b1-a225-496bef175351'

const {width: windowWidth} = Dimensions.get('window');
const top_margin = 0.2 * windowWidth;

export default function Signup() {
    return (
        <View style={[Styles.container, styles.fontFamily]} className="relative w-full h-full">

            <Image className="w-full h-full object-cover" source={{uri: imageBg}} />

            <View className="absolute top-0 left-0 w-full h-full px-5">

                <Text style={{marginTop: top_margin}}  className="text-2xl font-bold text-[#0b0b0b]">Inscription</Text>
                <Text className="text-base font-medium text-gray-800 mt-2">Créer un compte et profitez au maximum de nos services.</Text>

                <View className="mt-6">
                    <View className="mb-2">
                        <Text className="text-[16.5px] font-semibold text-gray-800 mb-1.5">Adresse email</Text>
                        <TextInput placeholder="Adresse email"  className="w-full h-12 bg-[#cccccc]/50 shadow-inner rounded-2xl text-base font-medium text-gray-500 px-4 mb-4"/>
                    </View>
                    <View className="mb-2">
                        <Text className="text-[16.5px] font-semibold text-gray-800 mb-1.5">Téléphone</Text>
                        <TextInput placeholder="Adresse email"  className="w-full h-12 bg-[#cccccc]/50 shadow-inner rounded-2xl text-base font-medium text-gray-500 px-4 mb-4"/>
                    </View>
                    <View className="">
                        <Text className="text-[16.5px] font-semibold text-gray-800 mb-1.5">Mot de passe</Text>
                        <View className="w-full h-12 relative">
                            <TextInput secureTextEntry={true} placeholder="**********" className="w-full h-full bg-[#cccccc]/50 shadow-inner rounded-2xl text-base font-medium text-gray-500 px-4"  />
                            <View className="absolute top-4 right-5 w-5 text-gray-500">
                                <svg className="w-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                            </View>
                        </View>
                    </View>
                </View>

                <Pressable className="w-full h-[55px] bg-[#0b0b0b] rounded-2xl shadow mt-8">
                    <View className="w-full h-full flex-col justify-center">
                        <Text className="w-full text-center text-[20px] font-semibold text-gray-50">S'inscrire</Text>
                    </View>
                </Pressable>

                <View className="w-full flex flex-col items-center mt-5">
                    <Text className="text-base font-medium text-gray-800 mt-3">Vous avez déjà un compte ?</Text>
                    <Text className="text-lg font-semibold text-[#0b0b0b] underline mt-0.5">Se connecter</Text>
                </View>

            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    fontFamily: {
        fontFamily: 'lucida grande',
    },

});
