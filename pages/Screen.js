import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import Styles from '../common/Styles';
import { Button } from 'react-native-paper';
import { Colors } from '../utils/colors';
import { Header } from '../components/commons/Header';

export default function Screen({ route, navigation }) {
  return (
    <View style={Styles.container}>
      <Header
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
    </View>
  )
}