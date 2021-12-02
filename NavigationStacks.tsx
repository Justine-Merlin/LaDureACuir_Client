import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import AccountScreen from "./screens/AccountScreen/AccountScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen/CreateAccountScreen";

const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
//const SettingsStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

export const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{headerShown: false}}
      />
      <AccountStack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
      />
    </AccountStack.Navigator>
  );
}
// export function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen
//         name="B"
//         component={B}
//         options={{ tabBarLabel: 'Settings!' }}
//       />
//     </SettingsStack.Navigator>
//   );
// }