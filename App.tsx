import React from 'react';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Raleway_600SemiBold, Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';

import ProductsScreen from './screens/ProductsScreen/ProductsScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import { UserContextProvider } from './UserContext';

import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { AccountStackScreen, HomeStackScreen } from './NavigationStacks';
import AppLoading from 'expo-app-loading';

export type TabParamList = {
  Home: undefined
  Products: undefined
  Account: undefined
  Cart: undefined
  CreateAccount: undefined
}

const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {

  // Icons for tabBar
  const screenOptions = (route: RouteProp<TabParamList, keyof TabParamList>, color: string) => {
    let iconName;
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Products':
        iconName = 'th-large';
        break;
      case 'Account':
        iconName = 'user-alt';
        break;
      case 'Cart':
        iconName = 'shopping-basket';
        break;
      default:
        break;
    }
    return <FontAwesome5 name={iconName} color={color} size={26} />;
  };

  // GoogleFont call and loading
  let [fontsLoaded] = useFonts({
    Raleway_600SemiBold, Raleway_400Regular, Raleway_500Medium
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <UserContextProvider >
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#FAFAFA',
            tabBarInactiveTintColor: '#FFCDBD',
            tabBarStyle: {height: 60},
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color }) => screenOptions(route, color),
            tabBarBackground: () => (
              <LinearGradient
                colors={[ '#FF6464', '#FF9900', '#FF6464']}
                style={styles.background}
                start={{x: 1, y: 0}}
              />
            ),
          })}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Products" component={ProductsScreen} />
            <Tab.Screen name="Account" component={AccountStackScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 60
  },
});
