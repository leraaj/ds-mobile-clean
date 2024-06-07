import React from "react";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import { TouchableOpacity, View } from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <MainContainer isDark>
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <CustomText font={"montserrat"} size={"xl"} isLight>
          <CustomText font={"montserratBold"} size={"xl"} isLight>
            Looking
          </CustomText>{" "}
          for Jobs? {"\n"}Want to{" "}
          <CustomText font={"montserratBold"} size={"xl"} isLight>
            provide
          </CustomText>{" "}
          {"\n"}services?
        </CustomText>
      </View>

      <View style={{ paddingBottom: 40 }}>
        <CustomText font={"montserrat"} size={"xl"} isLight>
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

      <View style={{ paddingTop: 30 }}>
        <CustomButton
          variant={"landing"}
          label={"NEXT"}
          onPress={() => navigation.navigate("HomeScreen")}
        ></CustomButton>
      </View>

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
