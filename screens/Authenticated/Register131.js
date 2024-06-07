import React from "react";
import MainContainer from "../../components/container/MainContainer";
import SectionContainer from "../../components/container/SectionContainer";
import CustomText from "../../components/text/CustomText";
import { StyleSheet, View, Text, Image } from "react-native";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import upload from "../../assets/icons/upload.png";
import emptyImage from "../../assets/images/emptyImage.png";
import trash from "../../assets/icons/trash.png";

const Register131 = ({}) => {
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

        <View style={styles.uploadedFile}>
          <View style={styles.imageContainer}>
            <Image source={emptyImage} style={styles.image}></Image>
            <Text style={[styles.text]}>photo_1.jpg</Text>
          </View>
          <View style={styles.trashContainer}>
            <Image source={trash} style={styles.trashIcon}></Image>
          </View>
        </View>

        <View style={styles.uploadedFile}>
          <View style={styles.imageContainer}>
            <Image source={emptyImage} style={styles.image}></Image>
            <Text style={[styles.text]}>photo_1.jpg</Text>
          </View>
          <View style={styles.trashContainer}>
            <Image source={trash} style={styles.trashIcon}></Image>
          </View>
        </View>

        <View style={styles.uploadedFile}>
          <View style={styles.imageContainer}>
            <Image source={emptyImage} style={styles.image}></Image>
            <Text style={[styles.text]}>photo_1.jpg</Text>
          </View>
          <View style={styles.trashContainer}>
            <Image source={trash} style={styles.trashIcon}></Image>
          </View>
        </View>

        <View style={{ paddingVertical: 60 }}>
          <CustomButton variant={"landing"} label={"FINISH"}></CustomButton>
        </View>
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
    marginBottom: 20,
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
  uploadedFile: {
    flexDirection: "row",
    height: 80,
    borderRadius: 15,
    backgroundColor: "#2E2E2F",
    paddingHorizontal: 30,

    // marginBottom: 20,
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: "row",
    columnGap: 20,
    width: 180,
    alignSelf: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  text: {
    color: "white",
    alignSelf: "center",
  },
  trashContainer: {
    backgroundColor: "#A5A5A5",
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 40,
  },
  trashIcon: {
    tintColor: "#343536",
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});
export default Register131;
