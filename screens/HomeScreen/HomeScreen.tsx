//import liraries
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackParamList } from '../../App';
import { UserContext } from '../../UserContext';

const HomeScreen = () => {
    const { user, setUser } = useContext(UserContext);
    
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
});

//make this component available to the app
export default HomeScreen;
