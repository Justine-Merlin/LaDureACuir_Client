import React from "react";
import { StyleSheet, TextInput } from "react-native";
import {LinearGradient} from "expo-linear-gradient";

type InputProps = {
  placeholder?: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
}
const GradientInput = ({ placeholder, onChangeText, secureTextEntry }: InputProps) => {
  return (
      <LinearGradient
        colors={['#FF6464', '#FF9900']}
        start={{ x: 1 , y: 0 }}
        style={styles.container}
      >
          <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry || false} onChangeText={onChangeText} style={styles.input} />
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 350,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 1,
    borderRadius: 5
  },
  input: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    width: '99.5%',
    height: '99%',
    borderRadius: 3,
    paddingHorizontal: 5,
    fontSize: 18
  },
});

export default GradientInput;