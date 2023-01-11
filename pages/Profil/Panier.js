import { Pressable, Text, View, ScrollView, StyleSheet, Image, TextInput, FlatList, SafeAreaView, Dimensions, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState , useEffect} from 'react';
import { Header } from '../../components/commons/Header';
import Svg, { Path, G } from "react-native-Svg";
import { capitalize } from '../../utils/utils';
import Toast from 'react-native-toast-message';
import Modal from "react-native-modalbox";
import { SaveCommande } from '../../graphql/types/commande.type';
import { useMutation } from '@apollo/client';

const mutedCategory = "w-full bg-white shadow-sm border border-gray-200 rounded-2xl px-2.5 py-1.5 text-center text-gray-900 text-sm font-medium"
const activeCategory = "w-full bg-[#0e0e0e] shadow-sm border border-gray-200 rounded-2xl px-2.5 py-1.5 text-center text-white text-sm font-medium"
const {width, height } = Dimensions.get("window");

export default function Panier({ route, navigation }) {

    const user = JSON.parse(localStorage.getItem('user'));
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
    const [totalPrice, setTotalPrice] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const [typeLivraison, setTypeLivraison] = useState(null)
    const [address, setAddress] = useState('')

    // calculate the total price of the basket
    useEffect(() => {
        let price = 0;
        basket.forEach(item => {
            price += item.price * item.quantity;
        });
        setTotalPrice(price);
    }, [basket]);

    function updateBasket(newBasket) {
        setBasket(newBasket);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    function updateQuantity(menuId, newQuantity) {
        let updatedBasket = [...basket];
        let menuIndex = updatedBasket.findIndex((basketItem) => basketItem.id === menuId);
        updatedBasket[menuIndex].quantity = Math.max(newQuantity, 1);
        updateBasket(updatedBasket);
    }

    function removeFromBasket(menuId) {
        let updatedBasket = [...basket];
        let menuIndex = updatedBasket.findIndex((basketItem) => basketItem.id === menuId);
        updatedBasket.splice(menuIndex, 1);
        updateBasket(updatedBasket);
        Toast.show({type: 'success',text1: 'Panier', text2: "L'article a été supprimé avec succès de votre panier.", visibilityTime: 2500,});
    }

    const [saveCommande, { data, loading, error }] = useMutation(SaveCommande);


    const handleOrderSubmit = () => {
        saveCommande({ variables: {
            id: null, 
            restaurantId: basket[0]?.restaurant?.id, 
            userId: user.id, 
            typeLivraison: typeLivraison, 
            address: address, 
            commandeMenus: basket.map(item => {
                return {
                    menuId: item.id, 
                    nombre: item.quantity
                }
            })
        }})
            .then((response) => {
            if (response.data.saveCommande.__typename === 'Commande') {
                Toast.show({type: 'success',text1: 'Commande', text2: "Votre commande a été enregistrée avec succès.", visibilityTime: 2500,});
                setTimeout(() => {navigation.navigate('Home')}, 2000);
                localStorage.setItem("basket", JSON.stringify([]));
                setBasket([]);
                setAddress(null);
                setTypeLivraison(null);
                setModalVisible(false)
            } else if (response.data.saveCommande.__typename === 'InputError') {
                Toast.show({type: 'error',text1: 'Commande', text2: response.data.saveCommande.message, visibilityTime: 2500,});
            }
        }).catch((error) => {
            Toast.show({type: 'error',text1: 'Commande', text2: error.message, visibilityTime: 2500,});
        });
    }
    

    const getModal = () =>{
        return (
          <Modal entry="bottom" backdropPressToClose={true} isOpen={modalVisible} style={styles.modalBox} onClosed={() => setModalVisible(false)}>
            <View style={styles.content} className="relative w-full h-full pb-16">
  
              {loading && (
                  <View className="absolute top-0 left-0 w-full h-full bg-gray-300/50 rounded-t-[25] z-40 items-center justify-center">
                      <ActivityIndicator size="large" color="#9d9d9d" />
                  </View>        
              )}
  
              <ScrollView showsVerticalScrollIndicator={false} className="w-full h-full px-6 py-8">
  
                  <Text className="text-2xl font-bold text-[#0b0b0b]">Commande</Text>
                  <Text className="text-base font-medium text-gray-700 mt-2">Commander vos menus préférés en ligne, simple et rapide.</Text>

                  <View className="mt-6">
                      <Text className="text-[16.5px] font-semibold text-gray-800 mb-3">Nom complet</Text>
                      <Text className="text-gray-700 text-sm font-medium">{user?.firstname + ' ' + user?.lastname}</Text>
                  </View>

                  <View className="mt-6">
                      <Text className="text-[16.5px] font-semibold text-gray-800 mb-3">Adresse email</Text>
                      <Text className="text-gray-700 text-sm font-medium">{user?.email}</Text>
                  </View>

                  {/* <View className="mt-6">
                      <Text className="text-[16.5px] font-semibold text-gray-800 mb-3">Téléphone</Text>
                      <Text className="text-gray-700 text-sm font-medium">{user?.phonenumber}</Text>
                  </View> */}
                  
                  <View className="mt-6 ">
                      <Text className="text-[16.5px] font-semibold text-gray-800 mb-3.5">Choisir un type de livraison</Text>
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="py-1.5">
                        <Pressable onPress={() => setTypeLivraison('HOME')}  activeOpacity={1} className="min-w-fit mr-3 mb-0.5">
                            <Text className={ typeLivraison == 'HOME' ? activeCategory: mutedCategory}>À domicille</Text>
                        </Pressable>
                        <Pressable onPress={() => setTypeLivraison('RESTAURANT')}  activeOpacity={1} className="min-w-fit mr-3 mb-0.5">
                            <Text className={ typeLivraison == 'RESTAURANT' ? activeCategory: mutedCategory}>Sur place</Text>
                        </Pressable>
                      </ScrollView>
                  </View>


                  {typeLivraison == 'HOME' &&
                    <View className="mt-6 ">
                        <Text className="text-[16.5px] font-semibold text-gray-800 mb-3.5">Adresse</Text>
                        <TextInput
                            className="w-full h-11 bg-[#f4f2ef] rounded-full shadow-inner px-4 text-gray-800 text-sm font-medium border-none active:border-none"
                            onChangeText={value => setAddress(value)}
                            placeholder="Votre adresse"
                            value={address}
                            style={{ outline: 'none' }}
                        />
                    </View>
                  }

  
                  <View className="mt-6 flex flex-row justify-end text-[16px]">
                      <Text className="font-semibold mr-2">Total :</Text>
                      <Text className="font-medium text-gray-600">{(totalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} XOF</Text>
                  </View>


                  <TouchableOpacity onPress={() => handleOrderSubmit()} className="w-full h-[60px] bg-[#0b0b0b] shadow-lg rounded-2xl flex flex-row justify-center mt-6">
                    <Text className="text-xl text-white font-semibold self-center">Valider</Text>
                </TouchableOpacity>
  
              </ScrollView>
            </View>
          </Modal>
        );
    };

    return (
        <View style={[styles.fontFamily]} className="relative w-full h-full" >

            <Header
                back
                title={'Mon panier (' + basket?.length + ')'}
                onPressBack={() => navigation.goBack()}
                right="more-vertical"
                onRightPress={() => console.log('right')}
            />

            <ScrollView className="w-full h-full px-4 py-4 pb-6 bg-[#fef9f6]">

                <View className="w-full bg-[#f4f2ef] rounded-xl h-auto px-4 py-2.5">
                    <FlatList data={basket} renderItem={renderItem} keyExtractor={item => item.id} />
                </View>

                <View className="w-full bg-[#f4f2ef] rounded-xl h-auto px-4 py-4 mt-5">
                    <Text className="text-base font-semibold text-gray-900">Récapitulatif</Text>
                    <View className="w-full flex flex-row justify-between py-2.5 mt-3">
                        <Text className="text-[14px] font-semibold text-gray-900">Sous total :</Text>
                        <Text className="text-[14px] font-medium text-gray-700 justify-self-center">{(totalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} XOF</Text>
                    </View>
                    <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>
                    <View className="w-full flex flex-row justify-between py-2.5">
                        <Text className="text-[14px] font-semibold text-gray-900">Taxe :</Text>
                        <Text className="text-[14px] font-medium text-gray-700 justify-self-center">{(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} XOF</Text>
                    </View>
                    <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>
                    <View className="w-full flex flex-row justify-between py-2.5">
                        <Text className="text-[14px] font-semibold text-gray-900">Total :</Text>
                        <Text className="text-[14px] font-medium text-gray-700 justify-self-center">{(totalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} XOF</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => setModalVisible(true)}  className="w-full h-[60px] bg-[#0b0b0b] shadow-lg rounded-2xl flex flex-row justify-center mt-6">
                    <Text className="text-xl text-white font-semibold self-center">Commander</Text>
                </TouchableOpacity>

            </ScrollView>

            {getModal()}

        </View>


    );

    function renderItem({item, index}) {
        return (
          <View>

            {index > 0 &&
                <View className="w-full h-[0.5px] bg-[#cccccc]/80"></View>
            }

            <View className="w-full h-28 flex flex-row justify-between py-4">
                <View className="w-[30%] h-full bg-[#cccccc]/80 rounded-2xl">
                    <Image className="w-full h-full object-cover rounded-2xl" source={{uri: item.images[0].url}} />
                </View>
                <View className="w-[67%] flex flex-col justify-between ">
                    <View className="w-full flex flex-row justify-between">
                        <View className="w-min flex flex-col">
                            <Text className="text-xs font-light text-gray-700">{capitalize(item?.categoryMenu?.name)}</Text>
                            <Text className="text-sm font-semibold text-gray-900 mt-0.5">{item?.name}</Text>
                        </View>
                        <Pressable onPress={() => removeFromBasket(item.id)} className="w-3.5 justify-self-center">
                            <Svg className="w-full" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" >
                                <G>
                                    <Path fill='#ed0000' d="M490.667,96c0-17.673-14.327-32-32-32h-80.555C364.632,25.757,328.549,0.13,288,0h-64   c-40.549,0.13-76.632,25.757-90.112,64H53.333c-17.673,0-32,14.327-32,32l0,0c0,17.673,14.327,32,32,32H64v266.667   C64,459.468,116.532,512,181.333,512h149.333C395.468,512,448,459.468,448,394.667V128h10.667   C476.34,128,490.667,113.673,490.667,96z M384,394.667C384,424.122,360.122,448,330.667,448H181.333   C151.878,448,128,424.122,128,394.667V128h256V394.667z"/>
                                    <Path fill='#ed0000' d="M202.667,384c17.673,0,32-14.327,32-32V224c0-17.673-14.327-32-32-32s-32,14.327-32,32v128   C170.667,369.673,184.994,384,202.667,384z"/>
                                    <Path fill='#ed0000' d="M309.333,384c17.673,0,32-14.327,32-32V224c0-17.673-14.327-32-32-32s-32,14.327-32,32v128   C277.333,369.673,291.66,384,309.333,384z"/>
                                </G>
                            </Svg>
                        </Pressable>
                    </View>
                    <View className="w-full flex flex-row justify-between">
                        <View className="w-[80px] h-[30px] items-center bg-[#0b0b0b] shadow-sm rounded-xl flex flex-row justify-between px-2 self-center mt-2">
                            <Button onPress={() => updateQuantity(item.id, --item.quantity)} color="transparent" titleStyle={{ color: "#000000" }} className="text-lg font-semibold h-full" title="-" />
                            <Text className="text-sm font-medium text-gray-50">{item?.quantity}</Text>
                            <Button onPress={() => updateQuantity(item.id, ++item.quantity)}  color="#transparent" titleStyle={{ color: "#000000" }} className="text-lg font-semibold h-full" title="+" />
                        </View>
                        <View className="flex flex-col justify-end">
                            <Text className="text-sm font-semibold text-gray-900 align-bottom">{(item?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} XOF</Text>
                        </View>
                    </View>
                </View>
            </View>

          </View>
        );
    }


    
}



const styles = StyleSheet.create({

    fontFamily: {
        fontFamily: 'lucida grande',
    },

    modalBox: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        height,
        width,
        backgroundColor: "transparent"
    },

    content: {
        position: "absolute",
        bottom: '-55px',
        width: '100%',
        height: 600,
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#fefaf9",
        zIndex: 1000,
    },

    textStyle: {
        fontSize: 22
    }

});


