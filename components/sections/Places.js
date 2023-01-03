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
import { getPlaces } from '../../graphql/types/place.type';
import { getCategories } from '../../graphql/types/category.type';
import { truncate } from '../../utils/utils';

const {width: windowWidth} = Dimensions.get('window');
const INITIAL_INDEX = 0;


export default function Places(props) {

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {

    return (
      <TouchableOpacity activeOpacity={1} style={styles.item} onPress={() => {carouselRef.current.scrollToIndex(index);}}>

        <Image  style={styles.itemImage} source={{uri: item?.images[0]?.url}} />
        
        <LinearGradient colors={['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.6)']} style={styles.placeView}>

          <View>
            <Text style={styles.placeHeader}>{item?.name}</Text>
            <Text style={styles.placeDesc}>
              {truncate(item?.desc, 95)}
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
        data={props.places}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <DotPagination currentIndex={currentIndex} length={props.places?.length} color='#e4ded8' />
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
