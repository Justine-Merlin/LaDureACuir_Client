import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import {LinearGradient} from "expo-linear-gradient";
    

const GradientText = (props: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#FF6464', '#FF9900']}
        start={{ x: 1.5 , y: 0 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;