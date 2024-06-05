import React, { useRef, useEffect } from "react";
import { View, Text, Image, Animated } from "react-native";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#18191A",
      }}>
      <Animated.Image
        source={require("../assets/images/dslogo-collapsed-light.png")}
        style={{
          height: 160,
          width: 155,
          objectFit: "contain",
        }}
      />
    </View>
  );
};

export default LoadingScreen;
