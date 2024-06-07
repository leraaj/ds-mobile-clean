import React from "react";
import MainContainer from "../../components/container/MainContainer";
import SectionContainer from "../../components/container/SectionContainer";
import CustomText from "../../components/text/CustomText";
import { StyleSheet, View, Text, Image } from "react-native";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import upload from "../../assets/icons/upload.png";

const Register13 = ({}) => {
  return (
    <MainContainer isDark>
      <SectionContainer isLight header={"upload your works"}>
        <CustomText isLight font={"poppinsMedium"}>
          Multiple Upload
        </CustomText>

        <View style={styles.uploadContainer}>
          <Text style={[styles.uploadText]}>{"Select From Files"}</Text>
          <Image source={upload} style={styles.uploadIcon}></Image>
        </View>

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

export const styles = StyleSheet.create({
  uploadContainer: {
    borderWidth: 1,
    borderColor: "white",
    height: 100,
    flex: 2,
    borderStyle: "dashed",
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
    top: 10,
  },
  uploadText: {
    fontFamily: "Poppins-Regular",
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
  uploadIcon: {
    tintColor: "#DDDDDD",
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});
export default Register13;
