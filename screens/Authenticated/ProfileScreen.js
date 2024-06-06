import React, { useState, useContext } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import MainContainer from "../../components/container/MainContainer";
import CustomText from "../../components/text/CustomText";
import SectionContainer from "../../components/container/SectionContainer";
import emptyImage from "../../assets/images/emptyImage.png";
import download from "../../assets/icons/download.png";
import CustomButton from "../../components/button/CustomButton";
import Appbar from "react-native-paper/src/components/Appbar";
import CustomInput from "../../components/Inputs/CustomInput";

const ProfileScreen = ({ navigation }) => {
  const { state, auth } = useContext(AuthContext);
  const { user } = state;
  const handleLogout = () => {
    auth.logout(); // Call logout method from AuthContext
  };

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
            rowGap: 20,
            marginBottom: 30,
          }}
        >
          <View
            style={{
              display: "flex",
            }}
          >
            <CustomInput
              title={"Full Name"}
              value={user?.fullName}
              disabled
            ></CustomInput>
            <CustomInput
              title={"Email"}
              value={user?.email}
              disabled
            ></CustomInput>
            <CustomInput
              title={"Contact Number"}
              value={user?.contact}
              disabled
            ></CustomInput>
          </View>
        </View>
        <SectionContainer header={"skills"}></SectionContainer>
        <SectionContainer header={"files"}>
          <CustomText size={"md"} font={"poppinsMedium"}>
            {"Resume"}
          </CustomText>

          <View style={{ flexDirection: "row" }}>
            <CustomText label={"Download"}>
              {selectedFile ? selectedFile.name : "file.pdf"}
            </CustomText>

            <CustomButton
              onPress={handleFilePick}
              variant={"internal"}
              label={"Download"}
            ></CustomButton>
          </View>

          <CustomText size={"md"} font={"poppinsMedium"}>
            {"View Portfolio"}
          </CustomText>
        </SectionContainer>
      </MainContainer>
    </>
  );
};

export default ProfileScreen;
