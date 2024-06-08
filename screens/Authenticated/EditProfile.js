import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import MainContainer from "../../components/container/MainContainer";
import Appbar from "react-native-paper/src/components/Appbar";
import SectionContainer from "../../components/container/SectionContainer";
import emptyImage from "../../assets/images/emptyImage.png";
import CustomText from "../../components/text/CustomText";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import download from "../../assets/icons/download.png";

const EditProfile = ({}) => {
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

  const user = {
    fullName: "",
    email: "",
    contact: "",
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
      </Appbar.Header>
      <MainContainer>
        <SectionContainer header={"profile"}>
          <View style={{ display: "flex" }}>
            <Image
              source={emptyImage}
              style={{
                borderRadius: 50,
                height: 80,
                width: 80,
                marginBottom: 20,
              }}
            ></Image>
          </View>
        </SectionContainer>
        <View
          style={{
            display: "flex",
          }}
        >
          <CustomInput
            title={"Full Name"}
            value={user?.fullName}
            onChangeText={""}
          ></CustomInput>
          <CustomInput
            title={"Email"}
            value={user?.email}
            onChangeText={""}
          ></CustomInput>
          <CustomInput
            title={"Contact Number"}
            value={user?.contact}
            onChangeText={""}
          ></CustomInput>
        </View>

        <SectionContainer header={"skills"}>
          {/* <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              gap: 8,
              paddingVertical: 30,
            }}
          >
            <CustomButton
              variant={"learn"}
              label={"Test"}
              isLight
            ></CustomButton>
          </View> */}
        </SectionContainer>

        <SectionContainer header={"files"}>
          <View style={{ paddingVertical: 30 }}>
            <CustomButton title="Resume" isChooseFile disabled />
          </View>
        </SectionContainer>

        <View style={styles.uploadContainer}>
          <Text style={[styles.uploadText]}>{"7 Files"}</Text>
        </View>
      </MainContainer>
    </>
  );
};

export const styles = StyleSheet.create({
  uploadContainer: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#18191A",
    height: 100,
    borderStyle: "dashed",
    columnGap: 8,
    justifyContent: "center",
    marginBottom: 50,
  },
  uploadText: {
    fontFamily: "Poppins-Regular",
    color: "#18191A",
    fontSize: 15,
    alignSelf: "center",
  },
});
export default EditProfile;
