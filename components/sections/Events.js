import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import DotPagination from '../commons/DotPagination';
import { LinearGradient } from 'expo-linear-gradient';

const {width: windowWidth} = Dimensions.get('window');

const data = [
    {
      id: 'item3',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/la-lutte-senegalaise-1024x609.jpeg?alt=media&token=9a5678fe-0279-47ac-ae52-e1ddb16a42ab',
      title: 'Combat de lutte',
      category: 'SPORT',
      uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    },
    {
      id: 'item6',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/concert2.webp?alt=media&token=257d9eea-199d-4a1e-99b7-0d6fc03264ab',
      title: 'Concert de Mbalax',
      category: 'CONCERT',
      uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    },
    {
      id: 'item1',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/bey%20concert.gif?alt=media&token=257aa2b7-ba2a-47ab-ab23-4ea22691f259',
      title: 'Coachella 2022',
      category: 'CONCERT',
      uri: 'https://www.npmjs.com/package/react-native-anchor-carousel',
    },
    {
      id: 'item2',
      image: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/giphy.gif?alt=media&token=20cb6993-3c68-4f3b-8cbb-f1a7b50d3522',
      title: 'Concert de Rap',
      category: 'CONCERT',
      uri: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
    },
  ];
const ITEM_WIDTH = 0.7 * windowWidth;
const SEPARATOR_WIDTH = 10;

export default function Events(props) {
  const {style} = props;
  const carouselRef = useRef(null);

  async function handleInstallNowClick(uri) {
    const supported = await Linking.canOpenURL(uri);
    if (supported) {
      await Linking.openURL(uri);
    } else {
      Alert.alert(`Don't know how to open this URL: ${uri}`);
    }
  }

  function renderItem({item, index}) {
    return (
      <Pressable activeOpacity={1} style={styles.item}  onPress={() => props.navigation.navigate('DetailEvent', { name: 'Jane' })} onFocus={() => {carouselRef.current.scrollToIndex(index);}}>

        <Image  style={styles.itemImage} source={{uri: item?.image}} />

        <LinearGradient colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} style={styles.placeView}>
            <View style={styles.itemDesc}>
                <Text style={styles.itemCategory}>{item.category}</Text>
                <Text style={styles.itemName}>{item.title}</Text>
            </View>
            <Text style={styles.itemDate}>Nov-22</Text>
        </LinearGradient>

      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH - 50}
        separatorWidth={SEPARATOR_WIDTH + 4}
        inActiveScale={1}
        inActiveOpacity={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20
      },
      carousel: {
        width: '100%',
        height: 175,
        aspectRatio: 1.5,
        flexGrow: 0,
        marginBottom: 20,
      },
      item: {
        borderWidth: 2,
        backgroundColor: '#ede6e7',
        flex: 1,
        borderRadius: 30,
        borderColor: '#f3f3f3',
        elevation: 3,
      },
      itemImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
     },

     placeView:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 30,
        opacity: '100%',
      },

      itemDesc:{
        position: 'absolute',
        bottom: 15,
        left: 12,
        display: 'flex',
        flexDirection: 'column',
      },

      itemCategory:{
        color: '#cbcbcb',
        fontSize: '13px',
         fontWeight: "500",
        marginBottom: '3px',
        textTransform: 'capitalize',
      },

      itemName:{
        color: 'white',
        fontSize: '16.5px',
        fontWeight: "700"
      },

      itemDate:{
        position: 'absolute',
        top: 15,
        right: 12,
        backgroundColor: 'white',
        padding: '5px',
        color: '#333333',
        fontSize: '12px',
        fontWeight: "700",
        borderRadius: 60,
      }

});
