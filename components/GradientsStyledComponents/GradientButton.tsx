import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import {LinearGradient} from "expo-linear-gradient";

type ButtonProps = {
    title: string
    onPress: (event: GestureResponderEvent) => void
}

const GradientButton = ( { title, onPress }: ButtonProps) => {
  return (
      <LinearGradient
        colors={['#FF9900', '#FF6464']}
        start={{ x: 1 , y: 0 }}
        style={styles.container}
      >
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text} >{title}</Text>
          </TouchableOpacity>
      </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 1,
    borderRadius: 5,
    marginVertical: 30
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%'
  },
  text: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'Raleway_600SemiBold'
  }

});

export default GradientButton;