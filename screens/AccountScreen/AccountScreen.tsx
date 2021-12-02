import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { TabParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import GradientText from '../../components/GradientsStyledComponents/GradientText';
import GradientInput from '../../components/GradientsStyledComponents/GradientInput';
import GradientButton from '../../components/GradientsStyledComponents/GradientButton';
import { UserContext } from '../../UserContext';

type Props = NativeStackScreenProps<TabParamList, 'Account'>;

const AccountScreen = ({navigation}: Props) => {
    const { user, setUser } = useContext(UserContext);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const pressHandler = async () => {
        const headers = new Headers({
            "Content-Type": "application/json"
        })
        const response = await fetch('https://la-dur-a-cuir-api.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })            
        })
        const responseJson = await response.json();
        setUser({
            id: responseJson._id,
            lastname: responseJson.lastname,
            firstname: responseJson.firstname,
            email: responseJson.email,
            isAdmin: responseJson.isAdmin,
            addresses: responseJson.addresses,
            accessToken: responseJson.accessToken
        });        
    }
    console.log(user);
    
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
}

export default AccountScreen;
