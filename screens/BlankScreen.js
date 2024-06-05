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
import SectionContainer from "../components/container/SectionContainer";
const BlankScreen = ({ navigation }) => {
  return (
    <MainContainer isDark>
      <SectionContainer
        isLight
        header={"sample header"}
        subHeader={"sub header"}
      />
    </MainContainer>
  );
};

export default BlankScreen;
