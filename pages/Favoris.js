import * as React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Favoris({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Favoris</Text>
            <Pressable onPress={() => navigation.navigate('Maps')} style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
                <Text>Go to Maps</Text>
            </Pressable>
        </View>
    );
}