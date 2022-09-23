//import liraries
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackParamList } from '../../App';

type Props = NativeStackScreenProps<StackParamList, 'Products'>;

// create a component
const ProductsScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text>ProductsScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProductsScreen;
