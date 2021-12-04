import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import GradientButton from '../../components/GradientsStyledComponents/GradientButton';
import { UserContext } from '../../UserContext';
import LoginScreen from './LoginScreen/LoginScreen';

const AccountScreen = () => {
    const { user, setUser } = useContext(UserContext);
    const [isLoading, setIsloading] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const pressHandler = async () => {
        setIsloading(true);
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
        responseJson && setIsloading(false);
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
    if(user === null){
        return (
            <LoginScreen pressHandler={pressHandler} setCredentials={setCredentials} credentials={credentials} />
        );
    } else {
        return(
            <View style={styles.container}>
                <GradientButton title={'Se déconnecter'} onPress={() => setUser(null)} />
            </View>
        )
    }
}

export default AccountScreen;
