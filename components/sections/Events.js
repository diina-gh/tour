import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { formatDate } from '../../utils/utils';

const {width: windowWidth} = Dimensions.get('window');

const ITEM_WIDTH = 0.7 * windowWidth;
const SEPARATOR_WIDTH = 10;

export default function Events(props) {
  const {style} = props;
  const carouselRef = useRef(null);

  function renderItem({item, index}) {
    return (
      <Pressable activeOpacity={1} style={styles.item} onPress={() => props.navigation.navigate('DetailEvent', {event: item})} onFocus={() => {carouselRef.current.scrollToIndex(index);}}>

        <Image  style={styles.itemImage} source={{uri: item?.images[0]?.url}} />

        <LinearGradient colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} style={styles.placeView}>
            <View style={styles.itemDesc}>
                <Text style={styles.itemCategory}>{item?.categoryEvent?.name}</Text>
                <Text style={styles.itemName}>{item?.name}</Text>
            </View>
            <Text style={styles.itemDate}>{formatDate(item?.date)}</Text>
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
        data={props.events}
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
