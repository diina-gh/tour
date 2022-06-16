import { Pressable, Text, View } from 'react-native';
import * as React from 'react';

export default function Home() {
    return (
        <View className="w-full h-full px-4 py-2.5">
            <View className="w-full h-full flex-1 items-center justify-center bg-purple-200">
                <Text>Welcome to our Home Screen</Text>
                <Text>Checkout screens from the tab below</Text>
            </View>
        </View>
    );
}