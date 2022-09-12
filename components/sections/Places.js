import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import DotPagination from '../commons/DotPagination';
import { LinearGradient } from 'expo-linear-gradient';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/96cd8d35ac9d6fc85257386e78361bc0.webp?alt=media&token=51388630-abe3-4952-9c9a-1f650cb15555',
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/lac-rose.jpeg?alt=media&token=f239da10-17cf-4fe5-9213-8deae1203a2b',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum ',
  },
  {
    uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/18045848-22350793.jpeg?alt=media&token=6a6d1e83-c0d8-4067-a148-4feaddbac01f',
    title: 'Lorem ipsum dolor',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    uri: 'https://i.imgur.com/fRGHItn.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
  },
  {
    uri: 'https://i.imgur.com/WmenvXr.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
  },
];

const INITIAL_INDEX = 0;
export default function Places(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>

        <Image  style={styles.itemImage} source={{uri: item?.uri}} />
        
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.placeView}
        >

          <View>
            <Text style={styles.placeHeader}>Monument de la renaissance</Text>
            <Text style={styles.placeDesc}>
              Le Monument de la Renaissance africaine est un groupe monumental de 52 mètres ...
            </Text>
            <View style={styles.poster} >
              <View style={styles.posterImgContainer}>
               <Image style={styles.posterImg} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/tour-base-887ca.appspot.com/o/pexels-andrea-piacquadio-3765151.jpg?alt=media&token=b6daa01c-219c-453e-9201-ea3c6b3d9ecd'}} />
              </View>
              <Text style={styles.posterName}>Ndoumbe Sarr</Text>
            </View>
          </View>


      </LinearGradient>

      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <DotPagination currentIndex={currentIndex} length={data.length} color='#e4ded8' />
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
    height: 345,
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
    elevation: 4,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingVertical: '20px',
    paddingHorizontal: '16px',
  },

  placeHeader:{
    color: 'white',
    fontSize: '16.5px',
     fontWeight: "600"
  },

  placeDesc: {
    color: '#f3f3f3',
    fontSize: '12.5px',
     fontWeight: "400",
    marginTop: '5px',
  },

  poster:{
    marginTop: '8px',
    display: 'flex',
    flexDirection: 'row',
  },

  posterImgContainer:{
    width: '28px',
    height: '28px',
    backgroundColor: 'rgba(85,85,85,0.85)',
    borderRadius: '100%',
    marginRight: '5px',
    alignSelf: 'center'
  },

  posterImg: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
    aspectRatio: 1,
  },

  posterName:{
    color: '#cccccc',
    fontSize: '11.5px',
     fontWeight: "400",
    alignSelf: 'center'
  }
  
});
