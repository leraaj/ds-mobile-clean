import React, { useRef, useEffect } from "react";
import { View, Text, Image, Animated } from "react-native";
import CustomText from "../components/text/CustomText";
import { ActivityIndicator } from "react-native-paper";

const LogginInLoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#18191A",
      }}>
      <View style={{ flexDirection: "row" }}>
        <CustomText>Logging in ...</CustomText>
        <ActivityIndicator size="large" color="#e0e0e0" />
      </View>
    </View>
  );
};

export default LogginInLoadingScreen;
