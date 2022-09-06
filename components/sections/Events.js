import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';


const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    id: 'item2',
    image: 'https://i.imgur.com/N3nQ9CS.jpg',
    title: 'Peach tea Whiskey Lorem ipsum',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item3',
    image: 'https://i.imgur.com/AzdYlDM.jpg',
    title: 'Camera lens Lorem ipsum dolor sit amet',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item1',
    image: 'https://i.imgur.com/s7GgEa8.jpg',
    title: 'Shoes Lorem ipsum dolor sit amet',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
  {
    id: 'item6',
    image: 'https://i.imgur.com/1O1Kd6T.jpg',
    title: 'Bottle Opener Lorem ipsum dolor sit amet',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },
  {
    id: 'item4',
    image: 'https://i.imgur.com/eNuhvpN.jpg',
    title: 'Modern sunglasses Lorem ipsum dolor sit amet',
    url: 'https://github.com/lehoangnam97/react-native-anchor-carousel',
  },

  {
    id: 'item5',
    image: 'https://i.imgur.com/jEiBmma.jpg',
    title: 'Cigarettes pipe Lorem ipsum dolor sit amet',
    url: 'https://www.npmjs.com/package/react-native-anchor-carousel',
  },
];

const ITEM_WIDTH = 0.7 * windowWidth;
const SEPARATOR_WIDTH = 10;
export default function Events(props) {
  const {style} = props;
  const carouselRef = useRef(null);

  async function handleInstallNowClick(url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  

  function renderItem({item, index}) {
    const {image, title, url} = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
      
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
        height: 155,
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

});
