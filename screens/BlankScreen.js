import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import MainContainer from "../components/container/MainContainer";
import CustomButton from "../components/button/CustomButton";
import { SIZES, icons } from "../constant/Index";
import backDark from "../assets/icons/left.png";
import CustomInput from "../components/Inputs/CustomInput";
import CustomText from "../components/text/CustomText";
const BlankScreen = ({ navigation }) => {
  return (
    <MainContainer>
      <CustomButton
        label={"go to login"}
        onPress={() => navigation.navigate("Login")}
      />
      <View
        style={{
          flexDirection: "column",
          padding: 10,
          gap: 5,
        }}>
        <CustomText size={"xs"}>X-Small</CustomText>
        <CustomText size={"sm"}>Small</CustomText>
        <CustomText size={"md"}>Medium</CustomText>
        <CustomText size={"lg"}>Large</CustomText>
        <CustomText size={"xl"}>X-Large</CustomText>
        <CustomText isHeader subHeader={"hybrid"}>
          Section Header
        </CustomText>
        <CustomButton label={"landing"} variant={"landing"} />
        <CustomButton label={"internal"} variant={"internal"} />
        <CustomButton label={"learn"} variant={"learn"} />
        <CustomButton label={"view"} variant={"view"} />
        <CustomButton label={"yes"} variant={"yes"} />
        <CustomButton label={"no"} variant={"no"} />
        <CustomInput placeholder={"placeholder"} isLight />
      </View>
    </MainContainer>
  );
};

export default BlankScreen;
