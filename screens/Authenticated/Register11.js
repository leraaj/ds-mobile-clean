import React from "react";
import MainContainer from "../../components/container/MainContainer";
import SectionContainer from "../../components/container/SectionContainer";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";

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

      <CustomButton variant={"landing"} label={"NEXT"}></CustomButton>
    </MainContainer>
  );
};

export default Register11;
