import React from "react";
import MainContainer from "../../components/container/MainContainer";
import SectionContainer from "../../components/container/SectionContainer";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import { View } from "react-native";

const Register11 = ({}) => {
  return (
    <MainContainer isDark>
      <SectionContainer isLight={true} header={"fill out your profile"}>
        <CustomInput
          isLight
          title={"Full Name"}
          onChangeText={""}
        ></CustomInput>
        <CustomInput isLight title={"Email"} onChangeText={""}></CustomInput>
        <CustomInput
          isLight
          title={"Contact Number"}
          onChangeText={""}
        ></CustomInput>
      </SectionContainer>

      <SectionContainer
        isLight
        header={"select your skills"}
      ></SectionContainer>

      <View style={{ paddingVertical: 30 }}>
        <CustomButton variant={"landing"} label={"NEXT"}></CustomButton>
      </View>
    </MainContainer>
  );
};

export default Register11;
