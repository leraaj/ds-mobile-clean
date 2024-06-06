import React from "react";
import MainContainer from "../../components/container/MainContainer";
import SectionContainer from "../../components/container/SectionContainer";
import CustomText from "../../components/text/CustomText";
import { View } from "react-native";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";

const Register131 = ({}) => {
  return (
    <MainContainer isDark>
      <SectionContainer isLight header={"upload your works"}>
        <CustomText isLight font={"poppinsMedium"}>
          Multiple Upload
        </CustomText>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <CustomText isLight>or</CustomText>
        </View>

        <CustomInput
          isLight
          title={"Shareable Link"}
          onChangeText={""}
        ></CustomInput>

        <CustomButton variant={"landing"} label={"FINISH"}></CustomButton>
      </SectionContainer>
    </MainContainer>
  );
};

export default Register131;
