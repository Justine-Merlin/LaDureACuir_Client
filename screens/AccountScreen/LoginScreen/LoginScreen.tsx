//import liraries
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { Component, Dispatch, SetStateAction } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TabParamList } from '../../../App';
import GradientButton from '../../../components/GradientsStyledComponents/GradientButton';
import GradientInput from '../../../components/GradientsStyledComponents/GradientInput';
import GradientText from '../../../components/GradientsStyledComponents/GradientText';
import { styles } from './styles';

type Props = NativeStackScreenProps<TabParamList, 'Account'>;

type LoginScreenProps = {
    setCredentials: Dispatch<SetStateAction<{ email: string; password: string; }>>
    credentials: {email: string, password: string} | unknown | any
    pressHandler: () => void
}

const LoginScreen = ({setCredentials, credentials, pressHandler}: LoginScreenProps, {navigation}: Props) => {
    return (
        <View style={styles.container}>
            <GradientText style={styles.screenTitle}>Connexion</GradientText>
            <View style={styles.credentialsContainer} >
                <Text style={styles.label} >Adresse Mail:</Text>
                <GradientInput onChangeText={(text: string) => setCredentials({...credentials, email: text})} />
            </View >
            <View style={styles.credentialsContainer} >
                <Text style={styles.label} >Mot de passe :</Text>
                <GradientInput onChangeText={(text: string) => setCredentials({...credentials, password: text})} secureTextEntry={true}/>
            </View>
            <View>
                <Text style={styles.createAccountLabel}>Pas encore de compte ?</Text>
                <TouchableOpacity>
                    <GradientText style={styles.createAccountLink} onPress={() => navigation.navigate('CreateAccount')}>Créez le vôtre !</GradientText>
                </TouchableOpacity>
            </View>
            <View>
                <GradientButton title={'Se connecter'} onPress={pressHandler} />
            </View>
        </View>
    );
};

export default LoginScreen;
