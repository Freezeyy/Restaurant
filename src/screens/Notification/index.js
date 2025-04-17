import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Notifications</Text>
        </View>
    )
}
