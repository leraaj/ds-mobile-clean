import React from "react";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import { TouchableOpacity, View } from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <MainContainer isDark>
      <View style={{ marginVertical: 60, gap: 45 }}>
        <CustomText isLight font={"montserrat"} size={"xl"}>
          Looking for Jobs?{"\n"}Want to provide{"\n"}services?
        </CustomText>
        <CustomText isLight font={"montserrat"} size={"xl"}>
          {"Join us"}
        </CustomText>
      </View>

      <CustomInput isLight title={"Full Name"} onChangeText={""}></CustomInput>
      <CustomInput isLight title={"Password"} onChangeText={""}></CustomInput>
      <CustomInput
        isLight
        title={"Re-enter Your Password"}
        onChangeText={""}
      ></CustomInput>

      <CustomButton
        variant={"landing"}
        label={"NEXT"}
        onPress={() => navigation.navigate("HomeScreen")}
      ></CustomButton>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          marginVertical: 10,
          justifyContent: "flex-end",
        }}
      >
        <CustomText isLight>Already have an account?</CustomText>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <CustomText isLight font={"poppinsMedium"}>
            Sign in
          </CustomText>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};

export default RegisterScreen;
