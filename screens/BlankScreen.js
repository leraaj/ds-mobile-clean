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
import { COLORS, FONT, SIZES, icons } from "../constant/Index";
import CustomText from "../components/text/CustomText";
import download from "../assets/icons/download.png";
import CustomInput from "../components/Inputs/CustomInput";
import SectionContainer from "../components/container/SectionContainer";

const BlankScreen = () => {
  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("");
      } else {
        console.log(err);
      }
    }
  };
  return (
    <MainContainer>
      <SectionContainer>
        <View style={styles.choosefileContainer}>
          <View style={{ flex: 1 }}>
            <CustomInput isDownload title="Resume" />
          </View>
          <TouchableOpacity style={[styles.chooseFileButton.button]}>
            <Text style={[styles.chooseFileButton.label]}>Download</Text>
            <Image
              source={download}
              resizeMode="contain"
              style={styles.logoStyle}
            />
          </TouchableOpacity>
        </View>

        <CustomButton title="Resume" isChooseFile isLight disabled />
      </SectionContainer>

      {/* <CustomButton variant={"multiple"} label={"7 files"}></CustomButton> */}
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  choosefileContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
  },
  chooseFileButton: {
    button: {
      backgroundColor: COLORS.secondary,
      height: 40,
      paddingHorizontal: 15,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      flexDirection: "row",
      gap: 10,
    },
    label: {
      color: "#FFFFFF",
      fontSize: 15,
      textTransform: "capitalize",
      fontFamily: FONT.montserrat,
    },
  },
  logoStyle: {
    height: 20,
    width: 20,
    tintColor: "white",
  },
});
export default BlankScreen;
