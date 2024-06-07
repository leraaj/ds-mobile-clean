import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import SectionContainer from "../../components/container/SectionContainer";
import CustomText from "../../components/text/CustomText";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import upload from "../../assets/icons/upload.png";

const Register12 = ({}) => {
  const [selectedFile, setSelectedFile] = useState(null);
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
    <MainContainer isDark>
      <SectionContainer isLight header={"upload your resume"}>
        <CustomText isLight>CV / Resume</CustomText>
        <View style={styles.choosefileContainer}>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder]}>
              {selectedFile ? selectedFile.name : "file.pdf"}
            </Text>
          </View>
          <TouchableOpacity style={styles.uploadBtn} onPress={handleFilePick}>
            <Text style={[styles.btnStyle]}>{"Upload"}</Text>
            <Image source={upload} style={styles.uploadIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", paddingVertical: 30 }}>
          <CustomText isLight>or</CustomText>
        </View>

        <CustomInput
          isLight
          title={"Shareable Link"}
          onChangeText={""}
        ></CustomInput>

        <CustomButton variant={"landing"} label={"NEXT"}></CustomButton>
      </SectionContainer>
    </MainContainer>
  );
};

export const styles = StyleSheet.create({
  choosefileContainer: {
    borderColor: "#DDDDDD",
    flexDirection: "row",
    borderWidth: 2,
    display: "flex",
    width: "100%",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  fileNamePlaceholder: {
    display: "flex",
    flex: 1,
    width: 30,
  },
  placeholder: {
    fontSize: 15,
    paddingHorizontal: 10,
    padding: 10,
    color: "#DDDDDD",
  },
  btnStyle: {
    color: "black",
    fontSize: 15,
    textTransform: "capitalize",
  },
  uploadBtn: {
    backgroundColor: "white",
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
  uploadIcon: {
    tintColor: "black",
    height: 20,
    width: 20,
  },
});
export default Register12;
